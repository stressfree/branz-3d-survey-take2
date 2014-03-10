$(function() {
    "use strict";
    
	$('form#ss-form').on("submit", function(e) {
        var reqCount = 0;
    
        $('div.ss-item-required tr.ss-gridrow').each(function() {
            var item = this;
            var parent = $(item).parents('div.ss-item-required');
            
            $(item).removeClass('ss-not-supplied');
            $(parent).removeClass('ss-not-supplied');

            if ($('input.ss-q-radio:checked', this).length === 0) {
                $(item).addClass('ss-not-supplied');
                $(parent).addClass('ss-not-supplied');
                
                reqCount++;

                if (reqCount === 1) {
                    $('html, body').animate({
                        scrollTop: ($(item).offset().top - 150)
                    }, 500);
                }
            }
        });
        
        if (reqCount > 0) {
            e.preventDefault();
        }
    });
});