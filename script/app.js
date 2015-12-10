// Write your code here!
$(document).ready(function(){
    
    $('#signup-form').on('submit', function(event) {
    // write your code here
    
    if (($('input[name="password"]').val() === $('input[name="password2"]').val()) && $('input[name="password"]').val().length < 10 ){
        event.preventDefault();
        alert('All good!');
    } else {
        alert('You messed up!');
    }
});
    
})