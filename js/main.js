 

/*============================= change backgroundColor of nav and show scroll to top btn */
 $(window).scroll(function () {
    let scrollTo = $(window).scrollTop(); 
     let aboutPosition = $("#about").offset().top;
     if(scrollTo>aboutPosition-50)
     {
         $("nav").css("backgroundColor","rgba(0,0,0,.5)");
         $(".btnUp").css("opacity","1");
     }
     else
     {
        $("nav").css("backgroundColor","transparent");
        $(".btnUp").css("opacity","0");
     }
 });
// =========================== show btn
 $(".btnUp").click(()=>{
    $("html,body").animate({scrollTop:0},1500);
 });

 