$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay:true,
    });

    $('.contact-slider').slick({
        slidesToScroll: 10,
        slidesToShow: 10,
        dots: true,
        arrows: false,        
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow-left article-slider__arrow"><img src="images/arrow-left-slide.svg" alt="Prev"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow-right article-slider__arrow"><img src="images/arrow-right-slide.svg" alt="Next"></button>'       
    });

    var mixer = mixitup('.gallery__inner',
    {
        load: {
            filter: '.living'
        }
    });
})