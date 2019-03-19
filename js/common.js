$(function () {
    $('.floatingBox').on('mouseenter',function () {
        $(this).addClass('show');
    }).on('mouseleave',function () {
        $(this).removeClass('show');
    })
})