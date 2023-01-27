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
  
  // Слайдер в попапе
  const swiperDetailWindow = new Swiper('.detail-page__slider-window', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.detail-page__dots.detail-page__slide-dots',
      type: 'fraction',
    },
  });
  
  // Слайдер дополнительных фото
  const swiperDetailAdd = new Swiper('.detail-page__add-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.detail-page__dots-add',
      type: 'fraction',
    },
    nested: true,
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
    nested: true,
  });
  
  const swiperRecall = new Swiper('.recall-page__img-window-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.detail-page__dots-recall',
      type: 'fraction',
    },
    nested: true,
  });