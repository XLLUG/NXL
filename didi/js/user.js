$(function () {
    /*当点击用户头像时*/
    $(".user").click(function () {
        $(".setting").fadeIn("slow");
    })
    $(".mask").click(function () {
        $(".setting").fadeOut("slow");
    })
});