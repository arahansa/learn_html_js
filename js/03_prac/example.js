$(function () {
    $("div[href]").click(function (event) {
        window.protocolCheck($(this).attr("href"),
            function () {
                alert("프로토콜이 존재하지 않습니다");
            });
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
});
