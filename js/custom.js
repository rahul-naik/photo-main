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

    $(window).on('scroll', function () {
        if ($('#dDiv').css('display') !== 'none') {
            if ($('.fb').offset().top > 2744 && $('.fb').offset().top < 3354) {
                $('.fb').addClass('grayed');
            } else {
                $('.fb').removeClass('grayed');
            }

            if ($('.tw').offset().top > 2744 && $('.tw').offset().top < 3354) {
                $('.tw').addClass('grayed');
            } else {
                $('.tw').removeClass('grayed');
            }

            if ($('.tube').offset().top > 2744 && $('.tube').offset().top < 3354) {
                $('.tube').addClass('grayed');
            } else {
                $('.tube').removeClass('grayed');
            }

            if ($('.pin').offset().top > 2744 && $('.pin').offset().top < 3354) {
                $('.pin').addClass('grayed');
            } else {
                $('.pin').removeClass('grayed');
            }

            if ($('.messenger').offset().top > 2744 && $('.messenger').offset().top < 3354) {
                $('.messenger').addClass('grayed');
            } else {
                $('.messenger').removeClass('grayed');
            }
        } else {
            if ($('.fb').offset().top > 2609 && $('.fb').offset().top < 3597) {
                $('.fb').addClass('grayed');
            } else {
                $('.fb').removeClass('grayed');
            }

            if ($('.tw').offset().top > 2609 && $('.tw').offset().top < 3597) {
                $('.tw').addClass('grayed');
            } else {
                $('.tw').removeClass('grayed');
            }

            if ($('.tube').offset().top > 2609 && $('.tube').offset().top < 3597) {
                $('.tube').addClass('grayed');
            } else {
                $('.tube').removeClass('grayed');
            }

            if ($('.pin').offset().top > 2609 && $('.pin').offset().top < 3597) {
                $('.pin').addClass('grayed');
            } else {
                $('.pin').removeClass('grayed');
            }

            if ($('.messenger').offset().top > 2609 && $('.messenger').offset().top < 3597) {
                $('.messenger').addClass('grayed');
            } else {
                $('.messenger').removeClass('grayed');
            }
        }


    });


});