$(document).ready(function() {
    function clignoterLive() {
        $('.live').fadeToggle(1000, function() {
            clignoterLive();
        });
    }
    clignoterLive();
});