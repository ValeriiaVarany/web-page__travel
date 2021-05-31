$(function(){

  $('.slider__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider__text',
    prevArrow:'<button type="button" class="slick-prev"><img src="../IT/images/previous.svg" alt="photo" class="slick-prev-img"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="../IT/images/next.svg" alt="photo" class="slick-prev-img"></button>',
  });

  $('.slider__text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider__img',
    arrows: false,
    
    
  });              
});