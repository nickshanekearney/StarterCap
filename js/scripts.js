 
/***************** Flexsliders ******************/

jQuery(window).load(function() {

	jQuery('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			jQuery.waypoints('refresh');
		}
	});

	jQuery('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			jQuery.waypoints('refresh');
		}
	});

	jQuery('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			jQuery.waypoints('refresh');
		}
	});

});








// pop up 
 jQuery(function(){
		jQuery('#open').click(function() {
		    jQuery('#dialog').dialog('open');
			jQuery("#ui-dialog-title-dialog").hide();
		    jQuery(".ui-dialog-titlebar").removeClass('ui-widget-header');
		});
		 
		
		jQuery(document).ready(function() {
		    jQuery("#dialog").dialog({
		        autoOpen: false,
		        modal: true,
				resizable: false,
				draggable: false,
				show: 'fade',
				hide: 'fade',
		        open: function(){
		            jQuery('.ui-widget-overlay').bind('click',function(){
		                jQuery('#dialog').dialog('close');
		            })
		        }
		    });
		}); 

});//]]>  
		
		
		
		/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

		
		
		
		
		 