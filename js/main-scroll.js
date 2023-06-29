// tornar o nome visível
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
        $(".logo").addClass("visivel");
        $(".main-header").addClass("line-header");
    } else {
        //esconder
        $(".logo").removeClass("visivel")
        $(".main-header").removeClass("line-header")
    }
 });





//  tornar a linha visivel



// $(window).scroll(function() {
//     var bodyElement = document.getElementById("main-header");
    
//     var hH = $('#name-limit').outerHeight();
//     var wH = $(window).height();
//     var limit = hH-wH;
//     var wS = $(this).scrollTop();
//     var showText = wS > limit;

//     if (showText) {
//         // mostrar
//         $(".main-header").addClass("line-header");
//     } else {
//         //esconder
//         $(".main-header").removeClass("line-header")
//     }
//  });
