;(function($){
    var header = $('header');
    var windowHeight = $(window).height();

    $(window).on('scroll', function(){
        var scrollTop = $(window).scrollTop();

        if(scrollTop > windowHeight){
            header.addClass('is-fixed');
            header.css('position', 'fixed');

        } else{
            header.removeClass('is-fixed');
            header.css('position', 'absolute');
        }
    });
})(jQuery);

(function($) {
    $(window).on('load', function (){
        var prev = $('.slick-prev');
        var next = $('.slick-next');

        var parentCarousel, curentSlide, nextSlide, prevSlide;

        function addClassSlider(self, elem){
            parentCarousel = $(self).closest('.corusel');
            curentSlide =  $(parentCarousel).find('.slick-current');

            nextSlide =  curentSlide.next('.slick-slide');
            prevSlide =  curentSlide.prev('.slick-slide');


            if(elem == 'next'){
                $(curentSlide).addClass('translate-left');
                $(nextSlide).addClass('translate-left');
            }  else{
                $(curentSlide).addClass('translate-right');
                $(prevSlide).addClass('translate-right');
            }

        };

        next.on('mouseover', function() {
            addClassSlider(this, 'next');
        });
        next.on('mouseout', function () {
            $(curentSlide).removeClass('translate-left');
            $(nextSlide).removeClass('translate-left');
        })
        prev.on('mouseover', function(){
            addClassSlider(this, "prev");
        });
        prev.on('mouseout', function () {
            $(curentSlide).removeClass('translate-right');
            $(prevSlide).removeClass('translate-right');
        })
    })
})(jQuery);

(function($){
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // код для прокрутки вниз
            $('header').removeClass('active');
        } else {
            // код для прокрутки вверх
            $('header').addClass('active');

        }
        lastScrollTop = st;
    });
}) (jQuery);

(function($){
    $(window).on('load', function(){
        $('body,html').animate({scrollTop: 0}, 100);

        var animateElements = $ ('[data-animate]');

        $('[data-animate="load"]').addClass('animate');

        function isVisible(elem) {

            var coords = elem.getBoundingClientRect();

            var windowHeight = document.documentElement.clientHeight;


            var topVisible = coords.top > 0 && coords.top < windowHeight;
            var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

            return topVisible || bottomVisible;
        }

        var windowWidth = $(window).width();

        if (windowWidth > 1024) {
            $(window).on('scroll load', function(){
                var scroll = $(window).scrollTop();
                for( var i = 0; i <animateElements.length; i++ ){
                    var offsetTopBlock =  $(animateElements[i]).offset().top;
                    var activateHeight = offsetTopBlock*0.8;

                    if (isVisible(animateElements[i])) {
                        $(animateElements[i]).addClass('animate')
                    }
                }
            })
        } else {
            animateElements.addClass('animate');
        }
    });
})(jQuery);

(function($) {
    $(function() {

        $('select, input, textarea').styler();

    });
})(jQuery);

//slick nav
(function($) {
    $(window).on('load', function () {
        $('.header-nav').slicknav({
            prependTo: 'body'

        });
    });


})(jQuery);

//Validation

(function ($) {
    $('input').focusout(function () {
        //функция после того как убирается фокус
    });
    //сделать корректную валидацию: валидация для имейла, поставить условие чтобы в имени небыло цифр
    $('#btn-for-contact-page').on('click', function () {
        var name = $('#user-name');
        var email = $('#email');
        var select = $('.jq-selectbox');
        var comment = $('#comment');
        console.log('IT WORKS!');

        //validation for name input
        if (name.val().length == 0 || 1 ){
            name.closest('.ff-block').addClass('show');
        } else {
            name.closest('.ff-block').removeClass('show');
        }

        //validation for email input

        //validation for select
        if (!select.is('.changed')){
            select.closest('.ff-block').addClass('show');
        } else {
            select.closest('.ff-block').removeClass('show');
        }

        //validation for comments
        if (comment.val().length == 0 ){
            comment.closest('.ff-block').addClass('show');
        } else {
            comment.closest('.ff-block').removeClass('show');
        }
    });


})(jQuery);

