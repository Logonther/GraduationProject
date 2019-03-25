$(function () {
    /*鼠标悬浮在商品上显示蓝框*/
    $('.goods-list li').on('mouseenter',function () {
        $(this).addClass('hovered').siblings().removeClass('hovered');
    }).on('mouseleave',function () {
        $(this).removeClass('hovered');
    })
})