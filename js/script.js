//Smooth Scrolling
$(function() {
    $('.content a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500);
        event.preventDefault();
    });
});

$(function() {
    $('.bubble').on('click', function() {
    	$('.bubble').removeClass('active');
        $(this).addClass('active');

        console.log(this.getAttribute('data-link'));


        $('.buttonContent').removeClass('active');
        $(this.getAttribute('data-link')).addClass('active');
    });
});

$(function() {
    $('.gridItem').on('click', function() {
    	$('.gridItem').removeClass('active');
        $(this).addClass('active');
    });
});