$(function(){

    loadOW();

    function loadOW(){
        if (Cookies.get('meteo')) {
            var data = JSON.parse(Cookies.get('meteo'));
            showMeteo(data);
        } else {
            $.get(
                "https://api.openweathermap.org/data/2.5/weather",
                {
                    q: "Bruxelles, BE",
                    appid: "c61270e27f4b64f25a2e55fd546f36f5",
                    units: "metric",
                    lang: "fr",
                },
                function(data, status){
                    var json_data = JSON.stringify(data);
                    Cookies.set('meteo', json_data, {expires: 1, path: '/'});
                    showMeteo(data);
                }
            );
        }
    }

    function showMeteo(data) {
        var htmlWidget = `
            <div>${data.name}, ${data.sys.country}</div>
            <div style="display: flex; align-items: center; gap: 15px; font-size: 32px; font-weight: bold;">
                ${Math.round(data.main.temp)}°C
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" style="width: 50px; height: 50px;" />
            </div>
            <div style="text-transform: capitalize;">${data.weather[0].description}</div>
        `;

        $(".widget-meteo").html(htmlWidget);
    }
});