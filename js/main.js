/* === === === === -< Change BackgroundColor Of Nav And Show ScrollToTop Btn >- === === === === */

const aboutPosition = $("#about").offset().top;

$(window).scroll(function () {

    let scrollTo = $(window).scrollTop();

    if (scrollTo > aboutPosition - 50) {
        $("nav").css("backgroundColor", "rgba(0,0,0,.5)");
        $(".btnUp").css("opacity", "1");
    } else {
        $("nav").css("backgroundColor", "transparent");
        $(".btnUp").css("opacity", "0");
    }
});
/* === === === === -< Show BtnUp >- === === === === */
$(".btnUp").click(() => {
    $("html,body").animate({
        scrollTop: 0
    }, 1500);
});


/* === === === === -< Scrolling To Position Of The Link Clicked On The Navbar >- === === === === */
$("nav a[href ^='#']").click(function () {

    let currentLink = $(this).attr("href");

    $("html,body").animate({
        scrollTop: $(currentLink).offset().top
    }, 1500);

});


/* === === === === -< color Box toggle  >- === === === === */
$(".toggleBtn").click(function () {

    let colorBoxwidth = $(".contentBox").innerWidth();

    if ($(".colorBox").css("left") == "0px") {
        $(".colorBox").animate({
            left: -colorBoxwidth + 20
        }, 500);
    } else {
        $(".colorBox").animate({
            left: "0px"
        }, 500);
    }
});

/* === === === === -< change web color >- === === === === */
$(".colorBox .color-item").click(function () {
    let bgColor = $(this).css("backgroundColor");
    $(".change-color").css("color", bgColor);
});