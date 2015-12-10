// Write your code here!
$(document).ready(function() {

    $('img').on('click', function() {
        $('body').append('<div class="overlay"><img src=' + $(this).attr("src") + '><p>' + $(this).attr("alt") + '</p></div>');

        $('.overlay').on('click', function() {
            $(this).remove();
        });

    });
});