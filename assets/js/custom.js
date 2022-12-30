var siteScroll = function() {
  $(window).on('scroll',function(){
    if($(window).scrollTop()>70){
        $('.nav-wrapper').addClass('nav-white');
    }
    else{
        $('.nav-wrapper').removeClass('nav-white');
    }
  });
};
siteScroll();


var categoriesslider = $("#categories-icon-slider");
categoriesslider.owlCarousel({
  autoplay: true,
  nav: true,
  autoplayHoverPause: true,
  smartSpeed: 350,
  dots: false,
  margin: 30,
  loop: true,
  navText: ['<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    575: {
      items: 4,
    },
    991: {
      items: 6,
    }
  }
});


var categoriesslider = $("#premium-ads-carousel");
categoriesslider.owlCarousel({
  autoplay: true,
  nav: true,
  autoplayHoverPause: true,
  smartSpeed: 550,
  dots: false,
  margin: 30,
  loop: true,
  navText: ['<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    575: {
      items: 2,
    },
    991: {
      items: 4,
    }
  }
});

	// Single Item Carousel
	if ($('#latest-ads-carousel').length) {
		$('#latest-ads-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
      autoplayHoverPause: true,
			smartSpeed: 550,
			autoplay: 6000,
      dots: false,
			navText: [ '<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>' ],
			responsive:{
				0:{
          items:1,
          autoplay: false
				},
				600:{
					items:1,
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
				1500:{
					items:1
				}
			}
		});    		
	}
  
  
  if ($('#testimonials').length) {
		$('#testimonials').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
      autoplayHoverPause: true,
			smartSpeed: 550,
			autoplay: 6000,
      dots: false,
			navText: [ '<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				},
				1500:{
					items:2
				}
			}
		});    		
  }
  
  if ($('#sponsors-carousel').length) {
		$('#sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
      nav:false,
      dots:false,
			smartSpeed: 500,
			autoplay: 4000,
			responsive:{
				0:{
					items:3
				},
				480:{
					items:2
				},
				600:{
					items:4
				},
				800:{
					items:4
				},
				1024:{
					items:6
				}
			}
		});    		
	}
  
  

  (function ($) {
    var $main_window = $(window);
  $main_window.on("scroll", function () {
    if ($(this).scrollTop() > 250) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  $(".back-to-top").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
})(jQuery);


	//Price Range Slider
	if($('.area-range-slider').length){
		$( ".area-range-slider" ).slider({
			range: true,
			min: 0,
			max: 1000,
			values: [ 100, 500 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".area-range-slider" ).slider( "values", 0 ) + " - " + $( ".area-range-slider" ).slider( "values", 1 ) );	
	}



	jQuery(document).ready(function() {
    var sync1 = jQuery("#sync1");
    var sync2 = jQuery("#sync2");
    var slidesPerPage = 6; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1
      .owlCarousel({
      items: 1,
      slideSpeed: 3000,
      slideSpeed: 1000,
      nav: true,

      //   animateOut: 'fadeOut',
      animateIn: "animate__fadeIn",
      autoplayHoverPause: true,
      autoplaySpeed: 1400,
      dots: false,
      loop: true,
      responsiveClass: true,
      responsive: {
        0: {
          item: 1,
          autoplay: false
        },
        600: {
          items: 1,
          autoplay: true
        }
      },
      responsiveRefreshRate: 200,
      navText: [
        '<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>' 
      ]
    })
      .on("changed.owl.carousel", syncPosition);

    sync2
      .on("initialized.owl.carousel", function() {
      sync2
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
      .owlCarousel({
      items: 8,
      dots: false,
      //   nav: true,
      smartSpeed: 1000,
      slideSpeed: 1000,
      center: false,
      margin: 5,
      responsive: {
        300: {
          items: 3,
          autoplay: false
        },
        420: {
          items: 4,
          autoplay: false
        },
        600: {
          items: 8,
          autoplay: false
        },
      },
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    })
      .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }

      //end block

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find(".owl-item.active").length - 1;
      var start = sync2
      .find(".owl-item.active")
      .first()
      .index();
      var end = sync2
      .find(".owl-item.active")
      .last()
      .index();

      if (current > end) {
        sync2.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        sync2.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data("owl.carousel").to(number, 100, true);
      }
    }

    sync2.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = jQuery(this).index();
      sync1.data("owl.carousel").to(number, 300, true);
    });
  });


  	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
  }

//notification check all

$('.select-all-btn').on('click',function(){
  if ($('input[type="checkbox"]').is(':checked'))
    {
        $('input[type="checkbox"]').attr('checked', false); 
    }else{
        $('input[type="checkbox"]').attr('checked', true); 
    }
})


//print
$(function() {
  $("#printable").find('.print').on('click', function() {
  $.print("#printable");
  });
});


//datetime
if($('.datetimepicker').length > 0 ){
  $('.datetimepicker').datetimepicker({
    format: 'DD-MM-YYYY',
    icons: {
      up: "fas fa-angle-up",
      down: "fas fa-angle-down",
      next: 'fas fa-angle-right',
      previous: 'fas fa-angle-left'
    }
  });
}



//upload images
$(document).ready(function() {
  if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function(e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<div class=\"image-preview\">" + 
              "<div class=\"single-img\">" +
                "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
                "<span class=\"remove\"><i class=\"icon icon-times\"></span>" +
              "</div>" +
            "</div>").insertAfter("#files");
          $(".remove").click(function(){
            $(this).parent(".single-img").remove();
          });
          
        });
        fileReader.readAsDataURL(f);
      }
      console.log(files);
    });
  } else {
    alert("Your browser doesn't support to File API")
  }
});


// Menu side toggle
$('document').ready(function(){
  $('button.navbar-toggle').click(function(){
    var navbar_obj = $($(this).data("target"));
    navbar_obj.toggleClass("open");
  });
});


//nex-step

$('.next-step').on('click',function(){
  $('#about-ad').removeClass('active');
  $('#details').addClass('active');

  $('#about-ad-tab').removeClass('active');
  $('#details-tab').addClass('active');
})


//prev-step

$('.prev-step').on('click',function(){
  $('#about-ad').addClass('active');
  $('#details').removeClass('active');

  $('#about-ad-tab').addClass('active');
  $('#details-tab').removeClass('active');
})


//agent profile number

$('.show-num').on('click',function(){
  $('.show-num').css("display", "none");
  $('.number').css("display", "block");
})