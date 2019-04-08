$(function () {
//全选功能
    $('.checkAll').on('click',function () {
        $('input[type=checkbox]').prop('checked',$(this).is(':checked'));
        calculate();
    });
    for (var i = 0; i < $('.goodsList tr.content input[type=checkbox]').length; i++) {
        $('.goodsList tr.content input[type=checkbox]').eq(i).on('click',function () {
            var flag = true;
            for (var i = 0; i < $('.goodsList tr.content input[type=checkbox]').length; i++) {
                if (!$('.goodsList tr.content input[type=checkbox]').eq(i).prop('checked')) {
                    flag = false;
                    break;
                }
            }
            $('.checkAll').prop('checked',flag);
            calculate();
        });
    }

//计算价格、积分
    function calculate() {
        var totalPrice = 0;
        for (var i = 0; i < $('.goodsList tr.content').length; i++) {
            $('.goodsList tr.content').eq(i).find('.goodPrice').text(($('.goodsList tr.content').eq(i).find('.price').text() *
                mui($('.goodsList tr.content').eq(i).find('.mui-numbox')).numbox().getValue()).toFixed(2));
            if ($('.goodsList tr.content input[type=checkbox]').eq(i).prop('checked')) {
                totalPrice += parseFloat($('.goodsList tr.content').eq(i).find('.goodPrice').text());
            }
        }
        $('#totalPrice').text(parseFloat(totalPrice).toFixed(2));
    }

    calculate();

//删除商品函数
    function delEle(good) {
        good.parent().parent().remove();
    }

//给单个按钮设置删除事件
    for (var i = 0; i < $('.delete a').length; i++) {
        $('.delete a').eq(i).on('click',function () {
            var r=confirm("你确定删除吗？");
            if (r==true){
                delEle($(this));
                calculate();
            }
        });
    }
//删除所选
    $('#delSelected').on('click',function () {
        var r=confirm("你确定删除吗？");
        if (r==true){
            for (var i = $('.goodsList tr.content input[type=checkbox]').length-1; i >=0 ; i--) {
                if ($('.goodsList tr.content input[type=checkbox]').eq(i).prop('checked')) {
                    delEle($('.goodsList tr.content input[type=checkbox]').eq(i));
                }
            }
            calculate();
        }
    });

//改变商品数量后重新进行计算
    $('.mui-btn').on('click',function () {
        calculate();
    })
    /*点击确认订单后*/
    $('.confirm .buy').on('click',function () {
        var $tr = $('.goodsList tr.content');
        var n = 0;
        for (var i = 0; i < $tr.length; i++) {
            if ($tr.eq(i).find('[type=checkbox]').prop('checked')){
                $('.confirm-modal tbody').append('<tr class="content">\n' +
                    '                                    <td>\n' +
                    '                                        <div class="good">\n' +
                    '                                            <div class="goodPic">\n' +
                    '                                                <img src="'+$tr.eq(i).find('img').attr('src')+'">\n' +
                    '                                            </div>\n' +
                    '                                            <div class="goodInfo">\n' +
                    '                                                <div>\n' +
                    '                                                    <div class="goodName"><a href="javascript:void(0)">'+$tr.eq(i).find('.goodName a').text()+'</a></div>\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                    <td class="price">'+$tr.eq(i).find('.price').text()+'</td>\n' +
                    '                                    <td class="amount">'+mui($tr.eq(i).find('.mui-numbox')).numbox().getValue()+'</td>\n' +
                    '                                    <td class="goodPrice">'+$tr.eq(i).find('.goodPrice').text()+'</td>\n' +
                    '                                </tr>');
            }else{
                n+=1;
            }
        }
        if(n != $tr.length){
            console.log(111);
            $('.confirm-modal').modal('show');
        }
    })
    /*关闭模态框时清除内容*/
    $('.confirm-modal').on('hide.bs.modal',function () {
        $('.confirm-modal tbody').empty();
    })
})