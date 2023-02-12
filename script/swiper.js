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
  $('body').on('click', '.new', function() {
    let detailId = $(this).find('div.swiper-slide-active').attr('data-num');
  
    $('.detail-page__dots.detail-page__slide-dots').css('display','none');
    setTimeout(function() {
      $('.detail-page__dots.detail-page__slide-dots').css('display','block');
    }, 500);

    const swiperDetailWindow = new Swiper('.detail-page__slider-window', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      initialSlide: detailId,
    
      pagination: {
        el: '.detail-page__dots.detail-page__slide-dots',
        type: 'fraction',
      },
    })
  });
  
  // Слайдер дополнительных фото
  $('body').on('click', 'div.more', function() {
    let moreId = $(this).attr('data-num');
    $('.detail-page__dots-add').css('display','none');
    setTimeout(function() {
      $('.detail-page__dots-add').css('display','block');
    }, 500);
  
      const swiperDetailAdd = new Swiper('.detail-page__add-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        initialSlide: moreId,
        pagination: {
          el: '.detail-page__dots-add',
          type: 'fraction',
        },
        nested: true,
      });
  
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

  //Слайдер в отзывах
  $('body').on('click', 'div.recall-page__img', function(){
    let num = $(this).attr('data-id');
      $('.detail-page__dots-recall').css('display','none');
      setTimeout(function() {
        $('.detail-page__dots-recall').css('display','block');
      }, 500);
    
    const swiperRecall = new Swiper('.swiper-new', {
    
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      initialSlide: num,
      pagination: {
        el: '.detail-page__dots-recall',
        type: 'fraction',
      },
      nested: true,
    });
    });
