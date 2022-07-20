$(function() {
    let header = $("#header"),
        introH = $("#about").innerHeight(),
        scrollOffset = $(window).scrollTop();

    introH *=2;
        // Header 
    

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset){
        
        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")
        }      
        
        
    }

    // smothScroll 

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
             blockOffset -= 100;
        $("html, body").animate({
            
            scrollTop: blockOffset
        },500);

        introH -=50;
    });

});