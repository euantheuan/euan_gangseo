$('div.main_cont02 ul.tab_title > li').click(function() {
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $('div.main_cont02 div.swiper_area > div.swiper').eq($(this).index()).addClass('on');
    $('div.main_cont02 div.swiper_area > div.swiper').eq($(this).index()).siblings().removeClass('on')
});
$('div.main_cont03 ul.tab_title > li').click(function() {
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $('div.main_cont03 div.swiper_area > div.swiper').eq($(this).index()).addClass('on');
    $('div.main_cont03 div.swiper_area > div.swiper').eq($(this).index()).siblings().removeClass('on')
});

$('div.main_cont04 button.btnSlide01').click(function() {
    $('div.main_cont04 div.slide_position').animate({
        left: 0
    }, 400, 'linear');
});
$('div.main_cont04 button.btnSlide02').click(function() {
    $('div.main_cont04 div.slide_position').animate({
        left: '-100%'
    }, 400, 'linear');
});
$('div.main_cont04 button.btnSlide03').click(function() {
    $('div.main_cont04 div.slide_position').animate({
        left: '-200%'
    }, 400, 'linear');
});

const arrow = '<i class="fa-solid fa-arrow-right"></i>'
const minus = '<i class="fa-solid fa-minus"></i>'
$('div.main_cont05 ul.tabs > li').click(function() {
    $(this).addClass('on');
    $(this).children('i').remove();
    $(this).append(arrow);
    $(this).siblings().removeClass('on').children('i').remove();
    $(this).siblings().append(minus);
})