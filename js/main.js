// function changeCss () {
//     var bodyElement = document.getElementById("logo");

//     //this.scrollY > 500 ? bodyElement.style.opacity = 1 : bodyElement.style.opacity = 0;
//     var limitDiv = document.getElementById("name-limit");

//     var limitDivRectange = limitDiv.getBoundingClientRect();

//     var limit = limitDivRectange.top
//     bodyElement.style.opacity = this.scrollY > limit ?  1 : 0;
//   }
  
// window.addEventListener("scroll", changeCss , false);


// $(window).scroll(function() {
//     var bodyElement = document.getElementById("logo");
    
//     var hH = $('#name-limit').outerHeight();
//     var wH = $(window).height();
    
//     var limit = hH-wH;
//     console.log(limit)

//     var wS = $(this).scrollTop();
//     var showText = wS > limit;
//     bodyElement.style.opacity = showText ?  1 : 0
//  });


// abrir menu mobile
$(function () {
    $(".btn-hamburger").click(function () {
        $(".menu-mobile").removeClass("desactivado");
    });

    $(".btnClose").click(function () {
        $(".menu-mobile").addClass("desactivado");
    });
});