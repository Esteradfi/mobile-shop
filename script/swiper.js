document.addEventListener("DOMContentLoaded", function() {
  // Слайдер в detail
  const swiperDetail = new Swiper('.detail-page__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.detail-page__dots',
      type: 'fraction',
    },
  });
  
  const swiperDetailWindow = new Swiper('.detail-page__slider-window', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.detail-page__dots.detail-page__slide-dots',
      type: 'fraction',
    },
  });
  
  // Слайдер в попапе
  $('body').on('click', '.new', function() {
    $('.detail-page__dots.detail-page__slide-dots').css('display','block');
  });
  
  swiperDetailWindow.controller.control = swiperDetail;
  swiperDetail.controller.control = swiperDetailWindow;
  
  // Слайдер дополнительных фото
  
  const swiperDetailAdd = new Swiper('.detail-page__add-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.detail-page__dots-add',
      type: 'fraction',
    },
  });
  
  $('body').on('click', 'div.more', function() {
    let moreId = $(this).attr('data-num');  
    swiperDetailAdd.slideTo(moreId);
    $('.detail-page__dots-add').css('display','block');  
  });
  
  //Слайдер цветов в окне "В корзину"
  const swiperDetailColor = new Swiper('.add-basket__color-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.detail-page__dots-color',
      type: 'fraction',
    },
  });
  
  $('body').on('click', '.add-basket__color-zoom', function(){
    let num = $(this).parent().attr('data-id');
    swiperDetailColor.slideTo(num);
    $('.detail-page__dots-recall').css('display','block');
  });
  

//Слайдер в отзывах
const swiperRecall = new Swiper('.swiper-new', {    
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.detail-page__dots-recall',
    type: 'fraction',
  },
});

$('body').on('click', 'div.recall-page__img', function(){
    let num = $(this).attr('data-id');
    swiperRecall.slideTo(num);
    $('.detail-page__dots-recall').css('display','block');
  });
});