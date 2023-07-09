
// abrir menu mobile
$(function () {
    $(".btn-hamburger").click(function () {
        $(".menu-mobile").removeClass("desactivado");
    });

    $(".btnClose").click(function () {
        $(".menu-mobile").addClass("desactivado");
    });
});


// mudar cor thumbnails

$('.thumbnail-link-1').on({
    mouseenter: function(){
      $('.thumbnail-1').css("background-color", "#9b70e5");
    },
    mouseleave: function(){
      $('.thumbnail-1').css("background-color", "#6e71df");
    },
    click: function(){
      $('.thumbnail-1').css("background-color", "#d960da");
    }
  }); 


  $('.thumbnail-link-2').on({
    mouseenter: function(){
      $('.thumbnail-2').css("background-color", "#9b70e5");
    },
    mouseleave: function(){
      $('.thumbnail-2').css("background-color", "#6e71df");
    },
    click: function(){
      $('.thumbnail-2').css("background-color", "#d960da");
    }
  }); 


$('.thumbnail-link-3').on({
    mouseenter: function(){
      $('.thumbnail-3').css("background-color", "#9b70e5");
    },
    mouseleave: function(){
      $('.thumbnail-3').css("background-color", "#6e71df");
    },
    click: function(){
      $('.thumbnail-3').css("background-color", "#d960da");
    }
  }); 


//fazer o hero funcionar para firefox

$(function () {
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        $('#hero-section').removeClass('hero-default');
        $('#hero-section').addClass('hero-firefox');
        $('#glyph-div').removeClass('hero-default');
        $('#glyph-div').addClass('hero-firefox');
        $('#hero-container-div').removeClass('bg-clip');
    }
});

