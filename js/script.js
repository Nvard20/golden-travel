$('.open').click(function(){
    $(this).next('.submenu').toggle(300);
    $(this).children('.arrow').toggleClass('rotate');
});
$('.close').click(function(){
    $('.mobile-container').hide();
});
$('.burger').click(function(){
    $('.mobile-container').show();
});
$('.moreless-button').click(function() {
    $('.moretext').slideToggle();

    if ($('.moreless-button').text() == "Подробнее") {
        $(this).text("Свернуть ");
        $(this).append("<img src='../img/arrow.png' class='as'>");


    } else {
        $(this).text("Подробнее");
        $(this).append("<img src='../img/Arrow-12.png'>");

    }
});

