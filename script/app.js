// Write your code here!
$(document).ready(function() {

    $('.announcement').prepend('<button data-text-swap="Show Announcement">X</button>');

    $("button").on("click", function() {

        $(this).siblings().toggle('slow');
        
        var el = $(this);
        if (el.text() == el.data("text-swap")) {
            el.text(el.data("text-original"));
        }
        else {
            el.data("text-original", el.text());
            el.text(el.data("text-swap"));
        }
    });


    /*$('button').on('click', function(){
        $(this).replaceWith("<button>Show Announcement</button>");
        $('.announcement p').toggle('slow');
    }); */
});