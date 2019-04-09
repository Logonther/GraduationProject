$(function () {
    /*初始化所在地选择*/
    $('#division').distpicker();
    /*表单验证*/
    $("#saveAddress").on('click',function(){
        $(".address-form").data("bootstrapValidator").validate();//手动触发全部验证
        var flag = $(".address-form").data("bootstrapValidator").isValid();//获取当前表单验证状态
        if (flag) {//验证通过
            console.log(123);
        }else{
            return false;
        }
    })
    $(".address-form").bootstrapValidator({
        //配置校验不同状态下显示的图标
        //需要校验的表单元素写在里面，通过name名校验
        fields: {
            associate: {
                //配置自定义的校验规则，不配置就会用默认的
                validators: {
                    //配置不能为空的校验规则
                    notEmpty: {
                        message: '请输入详细地址'
                    },
                    callback:{
                        message:'详细地址输入错误'
                    }
                }
            },
            zipcode: {
                //配置自定义的校验规则，不配置就会用默认的
                validators: {
                    notEmpty: {
                        message: '请输入邮政编码'
                    },
                    callback:{
                        message:'邮政编码输入错误'
                    },
                    digits:{
                        message:'邮编只能由数字组成'
                    }
                }
            },
            fullname: {
                //配置自定义的校验规则，不配置就会用默认的
                validators: {
                    notEmpty: {
                        message: '请输入收货人姓名'
                    },
                    callback:{
                        message:'收货人姓名输入错误'
                    },
                    stringLength: {
                        min: 2,
                        max: 25,
                        message: '收货人姓名应为2-25个字符，一个汉字为两个字符'
                    },
                }
            },
            phonenumber: {
                //配置自定义的校验规则，不配置就会用默认的
                validators: {
                    notEmpty: {
                        message: '请输入手机号码'
                    },
                    callback:{
                        message:'手机号码输入错误'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: '请输入11位手机号码'
                    },
                    regexp: {
                        regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                        message: '请输入正确的手机号码'
                    }
                }
            },
        }
    })
})