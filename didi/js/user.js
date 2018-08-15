$(function () {
    /*当点击用户头像时*/
    var a = 1;
    $(".user").click(function () {

        if(a){
            $(".setting").fadeIn("slow");
            $(".user_setting").css("transform","translateX(0)");
            a = 0;
        }else{
            $(".login").fadeIn();
        }

    });
    $(".mask").click(function () {
        $(".setting").fadeOut("fast");
        $(".user_setting").css("transform","translateX(-70%)");

    });
    /*当点击信息时*/
    $(".message").click(function () {
        $(".message_detail").css("display","block");
        $(".message_detail").css("transform","translateX(0)");
    });
    $(".message_back").click(function () {
        $(".message_detail").css("display","none");
        $(".message_detail").css("transform","translateX(100%)");
    })
    $(".login_back").click(function () {
        $(".login").fadeOut();
    })
    $(".login_next").click(function () {
        $(".login_password").fadeIn();
        $(".login").fadeOut();
    })
    $(".login_sure").click(function () {
        $(".login_password").fadeOut();
        a=1;
    })
    $(".pass_back").click(function () {
        $(".login_password").fadeOut();
        $(".login").fadeIn();
    })
});