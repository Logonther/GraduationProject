$(function () {
    /*悬浮窗*/
    $('.floatingBox').on('mouseenter',function () {
        $(this).addClass('show');
    }).on('mouseleave',function () {
        $(this).removeClass('show');
    })
    /*返回顶部*/
    $('.goTop').click(function () {
        $('html,body').animate({scrollTop: 0}, 300);
        return false;
    });
})