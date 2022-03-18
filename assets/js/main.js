
(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    marqueImage();
    tiltImage();
    fetchDark();
    stickyHeader();
    toggleSwitch();
    sal();
  });


  function marqueImage(){
      $(".shape-3").each(function(){
          let t = 0;
          let i = 1;
          let _this = $(this);
          setInterval(function(){
              t+=1;
              _this.css("background-position-x", -t + "px");
          }, 10);
      })
  }




  function tiltImage() {
    let tiltAnimation = $(".paralax-image");

    if(tiltAnimation.length) {
      tiltAnimation.tilt({
        maxTilt: 12,
        maxTilt: 20,
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        speed: 200, // Speed of the enter/exit transition.
        scale: 1,
        perspective: 1000
      });
    }
  }



  function fetchDark(){
    // localStorage.getItem('dark-mode') ? $('body').addClass('active-dark-mode') : $('body').removeClass('active-dark-mode')
    let setColor = $('.setColor');
    if(localStorage.getItem('dark-mode') != null){
      $('body').addClass('active-dark-mode');
      setColor.addClass('active');
      setColor.html('<i class="fa-solid fa-lightbulb"></i>')
    }
    else{
      $('body').removeClass('active-dark-mode');
      setColor.removeClass('active');
      setColor.html('<i class="fa-solid fa-moon"></i>')
    }
  }


  function toggleSwitch(){
    $('.my-switcher').on('click', function(){
      let setColor = $('.setColor');

      if(setColor.hasClass('active')){
        setColor.removeClass('active');
        setColor.html('<i class="fa-solid fa-moon"></i>')
      }
      else{
        setColor.addClass('active');
        setColor.html('<i class="fa-solid fa-lightbulb"></i>')
      }

      $('body').toggleClass('active-dark-mode')
      localStorage.setItem('dark-mode', 'true');

      if(!$('body').hasClass('active-dark-mode')){
        localStorage.removeItem('dark-mode');
      }
    })
  }


  function stickyHeader(){
    $(window).on("scroll", function(){
      const scrollTop = $(window).scrollTop(),
      siteHeader = $('.header');

      if(scrollTop < 200){
        siteHeader.removeClass('sticky')
      }
      else{
        siteHeader.addClass('sticky')
      }
    })
  }

})(jQuery);
