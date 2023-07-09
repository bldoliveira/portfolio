// tornar o nome visível e fundo blur

$(window).scroll(function() {
    var bodyElement = document.getElementById("logo");
    var bodyElement = document.getElementById("main-header");
    
    var hH = $('#name-limit').outerHeight();
    var wH = $(window).height();
    var limit = hH-wH;
    var wS = $(this).scrollTop();
    var showText = wS > limit;

    if (showText) {
        // mostrar
        $(".logo").addClass("visible");
        $(".main-header").addClass("line-header");
    } else {
        //esconder
        $(".logo").removeClass("visible")
        $(".main-header").removeClass("line-header")
    }
 });





