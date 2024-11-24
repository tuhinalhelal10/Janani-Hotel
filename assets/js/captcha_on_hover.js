	(function ($) {
         $(".capthca").focus(function() {
            $(this).attr('placeholder', 'In number, please.')
        }).blur(function() {            
            $(this).attr('placeholder', $(this).attr("data-place")+' = ?*');
        });
	})(jQuery);