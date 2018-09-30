$(function () {
    $("#passwords").blur(function () {
        if ($(this).val()=="") {
            $("#3").append('<span class="error">确认密码不能为空</span>');
        }else if($(this).val()!=$("#password").val()) {
            $("#3").append('<span class="error">两次密码不正确</span>');
        }else{
            $("#3").append('<span class="right">确认密码正确</span>');
        }
    });
    $("#password").blur(function () {
        if ($(this).val()=="") {
            $("#2").append('<span class="error">密码不能为空</span>');
        }else if($(this).val().length<6) {
            $("#2").append('<span class="error">密码不能小于六位</span>');
        }else{
            $("#2").append('<span class="right">密码正确</span>');
        }
    });
    $("#name").blur(function () {
        if ($(this).val()=="") {
            $("#1").append('<span class="error">用户名不能为空</span>');
        }else if($(this).val().length<3) {
            $("#1").append('<span class="error">用户名不能小于三位</span>');
        }else{
            $("#1").append('<span class="right">用户名正确</span>');
        }
    });
})