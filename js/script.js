// $(function(){
//     function loadOW(){
//         if (Cookies.get('meteo')) {
//             var data = JSON.parse(Cookies.get('meteo'));
//             showMeteo(data);
//         } else {
//             $.get(
//                 "https://api.openweathermap.org/data/2.5/weather",
//                 {
//                     q: "Bruxelles, BE",
//                     appid: "c61270e27f4b64f25a2e55fd546f36f5",
//                     units: "metric",
//                     lang: "fr",
//                 },
//                 function(data, status){
//                     // var json_data = JSON.stringify(data);
//                     // console.log(data);
//                     // document.getElementById("titre").innerHTML = data;
//                     var json_data = JSON.stringify(data);
//                     Cookies.set('meteo', json_data, {expires: 1, path: '/'});
//                     showMeteo(data);
//                 }
//             );
//         }
//     }
//     function showMeteo(data) {
//         // console.log(data);
//         var directions = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
//         var calc = Math.floor((data.wind.deg+22.5)/45);
//         var direction = directions[calc];
//         var fl = (data.wind.deg-90)+'deg';
//         var ligneFooter =       "<li>"+data.name+"</li>"+
//                                 "<li>"+data.weather[0].description+"</li>"+
//                                 "<li>"+data.main.temp+"</li>"+
//                                 "<li>"+data.wind.speed+" km/h "+direction+' <i class="fa-solid fa-arrow-right"></i>'+"</li>";
//         $("ul.meteo").html(ligneFooter);
//         $("footer .cercle i").addClass('owf-'+data.weather[0].id);
//         $("footer ul i").css({
//             transform: 'rotate('+fl+')'
//         })
//     }
// })