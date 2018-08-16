$(function () {
    /*当点击用户头像时*/
    var a = 1;
    $(".user").click(function () {
        if(a){
            $(".setting").fadeIn("slow");
            $(".user_setting").css("transform","translateX(0)");
            a = 0;
        }else{
            location.href='login.html';
        }
    });
    $(".mask").click(function () {
        $(".setting").fadeOut("fast");
        $(".user_setting").css("transform","translateX(-70%)");

    });
    $(".message_back").click(indexBack);
    $(".login_back").click(function () {
        $(".login").fadeOut();
    });
    $(".login_next").click(function () {
        $(".login_password").fadeIn();
        $(".login").fadeOut();
    });
    $(".login_sure").click(indexBack);
    $(".pass_back").click(function () {
        $(".login_password").fadeOut();
        $(".login").fadeIn();
    })
    function indexBack() {
            location.href = 'index.html';
            a=1;

    };
});