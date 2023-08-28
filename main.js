$(function() {
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