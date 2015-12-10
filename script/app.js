// Write your code here!
$(document).ready(function(){
    
    jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal').then(
    function(res) {
        $('article > h2').after('<p>' + res.results[0].geometry.location + '</p>');
    }
);
    
})