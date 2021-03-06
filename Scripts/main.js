﻿$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $("#fixxo-navbar").addClass('margin-top-0');
        }
        else {
            if (!window.matchMedia('(max-width: 991px)').matches) {
                $("#fixxo-navbar").removeClass('margin-top-0');
            }
        }
    })

    //our team click event
    $('#ourteam .image img').on('click', function () {
        $('#ourteam .image img').removeClass('border-yellow');
        $(this).addClass('border-yellow');
        var description = $(this).data('des');
        $('#ourteam-content').html(description);
    })

    $(".scrollTo").click(function () {

        var target = $(this).data("scroll");
        $('body, html').animate({
            scrollTop: $(target).offset().top - 90
        }, 1000);
    });
    function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image').show();
        if (counter_max == counter_current) {
            $('#show-next-image').hide();
        } else if (counter_current == 1) {
            $('#show-previous-image').hide();
        }
    }
    loadGallery(true, 'a.thumbnail');

    function loadGallery(setIDs, setClickAttr) {
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function () {
            if ($(this).attr('id') == 'show-previous-image') {
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });


        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true) {
            $('[data-image-id]').each(function () {
                counter++;
                $(this).attr('data-image-id', counter);
            });
        }
        $(setClickAttr).on('click', function () {
            updateGallery($(this));
        });
    }
})


    (function ($) {

        /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *     the user visible viewport of a web browser.
         *     only accounts for vertical position, not horizontal.
         */

        $.fn.visible = function (partial) {

            var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

        };

    })(jQuery);

$(document).on('click', function () {
    $('.collapse').collapse('hide');
})

$(window).scroll(function (event) {

    $(".module").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});
var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});