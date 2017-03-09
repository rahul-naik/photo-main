$(function () {
    $("nav").find("a").click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });
    $('.scrollup').click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    var images = [
        'https://unsplash.it/1300/800?image=875',
        'https://unsplash.it/1300/800?image=874',
        'https://unsplash.it/1300/800?image=872',
        'https://unsplash.it/1300/800?image=868',
        'https://unsplash.it/1300/800?image=839',
        'https://unsplash.it/1300/800?image=838'
    ];

    $('.gallery').imagesGrid({
        images: images,
        cells: 1,
        getViewAllText: function () {

        }
    });

   $('.parallax').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
           var yPos = -( ($(window).scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    


});