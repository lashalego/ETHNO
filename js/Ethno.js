$('.dropdown-toggle').click(function () {
    
    let menu = $('.dropdown-menu');
    menu.toggleClass('show');
} );
$('.lang-toggle').click(function () {
    
    let menu = $('.lang-menu');
    menu.toggleClass('show');
} );
$('.left-opener').click(function () {
    let hide = $('.left-menu');
    hide.addClass('show-menu');
    let open = $('.left-opener');
    open.addClass('hide')
} );
$('.close-hide').click(function () {
    let hide = $('.left-menu');
    hide.removeClass('show-menu');
    let open = $('.left-opener');
    open.removeClass('hide')
})