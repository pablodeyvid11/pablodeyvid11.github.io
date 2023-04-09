(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
      if($('.color-mode')[0].innerHTML.match("PT-BR")) {
        $('.color-mode')[0].innerHTML = `<i class="bi bi-globe" style="margin-right: 10%;"></i>Language: US-EN`;
        // Mudar do português para inglês
      } else {
        $('.color-mode')[0].innerHTML = `<i class="bi bi-globe" style="margin-right: 10%;"></i>Idioma: PT-BR`;
        // Mudar do inglês para o português
      }
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

    
})(jQuery);
