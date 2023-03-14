$(document).ready(function () {
  // слайдер цветов в попапе
  /*$(".add-basket__color-slider").on(`init reInit`, function (event, slick) {
    $(".detail-page__dots-color").text(1 + " / " + slick.slideCount);
  });
  $(".add-basket__color-slider").on(
    `afterChange`,
    function (event, slick, currentSlide, nextSlide) {
      $(".detail-page__dots-color").text(currentSlide + 1 + " / " + slick.slideCount);
    }
  );
  $(".add-basket__color-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: ".detail-page__dots-color",
  }); */

  //слайдер дополнительных фото
  /*$(".detail-page__add-slider").on(`init reInit`, function (event, slick) {
    $(".detail-page__dots-add").text(1 + " / " + slick.slideCount);
  });
  $(".detail-page__add-slider").on(
    `afterChange`,
    function (event, slick, currentSlide, nextSlide) {
      $(".detail-page__dots-add").text(currentSlide + 1 + " / " + slick.slideCount);
    }
  );
  $(".detail-page__add-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: ".detail-page__dots-add",
  });*/

  // слайдер на детальной странице
  /*$(".detail-page__slider").on(`init reInit`, function (event, slick) {
    $(".detail-page__dots").text(1 + " / " + slick.slideCount);
  });
  $(".detail-page__slider").on(
    `afterChange`,
    function (event, slick, currentSlide, nextSlide) {
      $(".detail-page__dots").text(currentSlide + 1 + " / " + slick.slideCount);
    }
  );
  $(".detail-page__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: ".detail-page__dots",
  });*/

  // переключение меню
  $(".header-bottom__link").click(function (e) {
    $(".header-bottom__link").removeClass("active");
    $(this).toggleClass("active");
    $(".main__content").removeClass("active");
    $(".main__content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  // переключение кнопок в подвале
  $(".footer__link").click(function () {
    $(".footer__link").removeClass("active");
    $(this).toggleClass("active");
  });

  // кнопки плюс минус
  $(document).on("click", ".minus", function () {
    var parent = $(this).closest(".add-basket__count-el");
    var item = parent.find(".add-basket__count-number");
    if (item.val() >= 1) {
      item.val(parseInt(item.val()) - 1);
    }
  });

  $(document).on("click", ".plus", function () {
    var parent = $(this).closest(".add-basket__count-el");
    var item = parent.find(".add-basket__count-number");
    item.val(parseInt(item.val()) + 1);
  });

  // Переключение контента на subcategories и index страницах
  $(".toggle-button").click(function () {
    $(".toggle-button").removeClass("active");
    $(this).toggleClass("active");

    $(".toggle-content").removeClass("active");
    $(".toggle-content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  //Выпадающее меню
  let = isSortShow = false;
  $("#sort").click(function() {
    if (isSortShow) {
      $("body").css("overflow", "auto");
      $(".subcategories-page__panel-sort").removeClass('rotate');
      $('.subcategories-page__panel-hide').removeClass('subcategories-page__hide-open');
      $("#shadow-sort").fadeOut();
      isSortShow = false;
    } else {
      $("#shadow-sort").fadeIn(function () {
        $("body").css("overflow", "hidden");
        $(".subcategories-page__panel-sort").addClass('rotate');
        $('.subcategories-page__panel-hide').addClass('subcategories-page__hide-open');
        isSortShow = true;
    })
    }
  });

  $("#shadow-sort, #filter, .subcategories-page__hide-open, .subcategories-page__nav, .page-header__form-input, .subcategories-page__header, .subcategories-page__hide-item")
  .click(function () {
    $("body").css("overflow", "auto");
    $(".subcategories-page__panel-sort").removeClass('rotate');
    $('.subcategories-page__panel-hide').removeClass('subcategories-page__hide-open');
    isSortShow = false;
    $("#shadow-sort").fadeOut();
  });

  //Смена вида сортировки
  $('#sort-text-1').click(function() {
    document.getElementById('sort-text').innerHTML = `Сортировка <img src="./img/arrow-down.svg" id="sort-icon" alt="sort" class="subcategories-page__panel-sort">`;
    $('#sort-text-1').addClass('active');
    $('#sort-text-2, #sort-text-3, #sort-text-4').removeClass('active');
  });
  $('#sort-text-2').click(function() {
    document.getElementById('sort-text').innerHTML = `По новизне <img src="./img/arrow-down.svg" id="sort-icon" alt="sort" class="subcategories-page__panel-sort">`;
    $('#sort-text-2').addClass('active');
    $('#sort-text-1, #sort-text-3, #sort-text-4').removeClass('active');
  });
  $('#sort-text-3').click(function() {
    document.getElementById('sort-text').innerHTML = `По возрастанию <span>цены <img src="./img/arrow-down.svg" id="sort-icon" alt="sort" class="subcategories-page__panel-sort"></span>`;
    $('#sort-text-3').addClass('active');
    $('#sort-text-2, #sort-text-1, #sort-text-4').removeClass('active');
  });
  $('#sort-text-4').click(function() {
    document.getElementById('sort-text').innerHTML = `По убыванию <span>цены <img src="./img/arrow-down.svg" id="sort-icon" alt="sort" class="subcategories-page__panel-sort"></span>`;
    $('#sort-text-4').addClass('active');
    $('#sort-text-2, #sort-text-3, #sort-text-1').removeClass('active');
  });

  //Переключение вида колонки продуктов
  $('.subcategories-page__panel-shake').click(function() {
    $('.subcategories-page__panel-shake').toggleClass('rotate');
    $('.page-products').toggleClass('container');
    $('.subcategories-page__products-wrapper').toggleClass('subcategories-page__products-wrapper-toggle');
    $('.page-products__col').toggleClass('page-products__col-toggle');
    $('.page-products__col-item').toggleClass('page-products__col-item-toggle');
    $('.products-col__item-img').toggleClass('products-col__item-img-toggle');
    $('.products-col__item-info').toggleClass('products-col__item-info-toggle');
    $('.products-col__info-text').toggleClass('products-col__info-text-toggle');
    $('body').toggleClass('body-white-toggle');
  });

  //Вызов модального окна фильтра
  $("#filter").click(function (event) {
    event.preventDefault();
    $("#shadow-filter").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
        $("#filter-window")
            .css("display", "block")
            .animate({ opacity: 1 }, 198);
    });
  });

  $("#filter-close, #shadow-filter, #filter-apply").click(function () {
      $("#filter-window").animate({ opacity: 0 }, 198, function () {
        $("body").css("overflow", "auto");
          $(this).css("display", "none");
          $("#shadow-filter").fadeOut(297);
      });
  });

  //Показ и скрытие дополнительных цветов
  $('#more-colors').click(function() {
    $('.second-colors').removeClass('toggle-colors');
    $('#more-colors').addClass('toggle-colors');
  });

  $('#more-colors-close').click(function() {
    $('.second-colors').addClass('toggle-colors');
    $('#more-colors').removeClass('toggle-colors');
  });

  //Подставление значений цены min max
  $('#price-low-block').click(function() {
    $('#min-price').val('0');
    $('#max-price').val('2990');
  });

  $('#price-medium-block').click(function() {
    $('#min-price').val('3000');
    $('#max-price').val('8990');
  });

  $('#price-high-block').click(function() {
    $('#min-price').val('9000');
    $('#max-price').val('14990');
  });

  //Нажатие на кнопку Применить и на кнопку Сбросить
  let filterIcon = document.querySelector('#filter-icon');
  $("#filter-apply").click(function () {
    $(".subcategories-page__panel-filter").addClass('active');
    filterIcon.setAttribute('src', './img/filter-orange.svg');
  });

  $("#filter-reset").click(function () {
    $(".subcategories-page__panel-filter").removeClass('active');
    filterIcon.setAttribute('src', './img/filter.svg');
  });

  // вызов модального окна добавления в корзину
  $("button.popup-basket").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $('#add-basket').addClass('add-basket-open');
        $("#add-basket")
            .css("display", "block")
            .animate({ opacity: 1 }, 198);
    });
  });

  $("#add-basket__close, #btn-to-basket, #shadow").click(function () {
      $("body").css("overflow", "auto");
      $('#add-basket').removeClass('add-basket-open');
      $("#add-basket").animate({ opacity: 0 }, 198, function () {
          $(this).css("display", "none");
          $("#shadow").fadeOut(297);
      });
  });



  /* $(".add-basket__popup").click(function () {
    $(".add-basket").css("bottom", "-100%");
  }); */

  $("input[name='size']").change(function () {
    $(".add-basket__tab-content").removeClass("active");
    $(".add-basket__tab-content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  $(".header-bottom-recall__item").click(function () {
    $(".header-bottom-recall__item").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".auth__else").click(function () {
    $(".auth-fade__popup").addClass("show");
  });

  $(".auth__popup").click(function () {
    $(".auth-fade__popup").removeClass("show");
  });

  $("#all").click(function () {
    if ($(this).is(":checked")) {
      $(".basket-page__card input:checkbox").prop("checked", true);
    } else {
      $(".basket-page__card input:checkbox").prop("checked", false);
    }
  });
  $("#footer-check").click(function () {
    if ($(this).is(":checked")) {
      $(".basket-page__card input:checkbox").prop("checked", true);
    } else {
      $(".basket-page__card input:checkbox").prop("checked", false);
    }
  });

  //Всплывающее окно Доставка / Возврат
  $("a.to-delivery-popup").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $('#detail-page__params-window').addClass('add-params-open');
        $("#detail-page__params-window")
            .css("display", "block")
            .animate({ opacity: 1 }, 198);
    });
  });

  $("#detail-page__params-close, #shadow").click(function () {
        $('#detail-page__params-window').removeClass('add-params-open');
      $("#detail-page__params-window").animate({ opacity: 0 }, 198, function () {
        $("body").css("overflow", "auto");
          $(this).css("display", "none");
          $("#shadow").fadeOut(297);
      });
  });

  //Всплывающее окно Подробнее
  $("a.detail-page__info-link").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $('#detail-page__info-window').addClass('add-info-open');
        $("#detail-page__info-window")
            .css("display", "block")
            .animate({ opacity: 1 }, 198);
    });
  });

  $("#detail-page__info-close, #shadow").click(function () {
    $("body").css("overflow", "auto");
    $('#detail-page__info-window').removeClass('add-info-open');
      $("#detail-page__info-window").animate({ opacity: 0 }, 198, function () {
          $(this).css("display", "none");
          $("#shadow").fadeOut(297);
      });
  });

  //Увеличение дополнительных картинок
  $(".detail-page__info-img").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-4").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
        $("#detail-page__info-img-window")
            .css("visibility", "visible")
            .animate({ opacity: 1 }, 198);
    });
  });

  $("#detail-page__info-img-close, #shadow-dark-4").click(function () {
      $("#detail-page__info-img-window").animate({ opacity: 0 }, 198, function () {
        $("body").css("overflow", "auto");
          $(this).css("visibility", "hidden");
          $("#shadow-dark-4").fadeOut(297);
      });
  });

  //Попап с слайдером
  $("div.slide-item").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-3").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
        $("#detail-page__slide-window")
            .css("visibility", "visible")
            .animate({ opacity: 1 }, 198);
    });
  });
  
  $("#detail-page__slide-close, #shadow-dark-3").click(function () {
    $(".detail-page__slide-window-menu .detail-page__dots").css("display", "none");
      $("#detail-page__slide-window").animate({ opacity: 0 }, 198, function () {        
        $("body").css("overflow", "auto");
          $(this).css("visibility", "hidden");
          $("#shadow-dark-3").fadeOut(297);
      });
  });

  //Увеличение картинок в отзывах

  $("div.recall-page__img").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-5").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
        $("#recall-page__img-window")
            .css("display", "block")
            .animate({ opacity: 1 }, 198);
        $("div.container")
            .css("margin", "0");
    });
  });
  $("#recall-page__img-close, #shadow-dark-5").click(function (e) {
    if ($(e.target).closest(".swiper-slide-active").length) {
      return;
    }
      $("#recall-page__img-window").animate({ opacity: 0 }, 198, function () {
        $("body").css("overflow", "auto");
          $(this).css("display", "none");
          $("#shadow-dark-5").fadeOut(297);
        $("div.container")
          .css("margin", "0 8px");
      });
  });

  //Всплывающее окно Больше информации
  $("#burger").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $('#burger-window').addClass('burger-open');
        $("#burger-window")
            .css("display", "block")
            .animate({ opacity: 1 }, 198);
        $("div.container")
            .css("margin", "0");
    });
  });

  $("#burger-close, #shadow").click(function () {
    $('#burger-window').removeClass('burger-open');
      $("#burger-window").animate({ opacity: 0 }, 198, function () {
        $("body").css("overflow", "auto");
          $(this).css("display", "none");
          $("#shadow").fadeOut(297);
        $("div.container")
          .css("margin", "0 8px");
      });
  });

  //Счётчик корзины
  let countBasket = 0;

  $("#btn-to-basket").click(function (event) {
    event.preventDefault();
    $(".counter").text(++countBasket);
    $(".basket-counter").css("display", "block");
  });

  //Увеличение картинок в addbasket
  $("img.add-basket__color-zoom").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-2").fadeIn(297, function () {
        $("#add-basket__color-window")
            .css("visibility", "visible")
            .animate({ opacity: 1 }, 198);
        $("div.container")
            .css("margin", "0");
    });
  });

  $("#add-basket__color-close, #shadow-dark-2").click(function () {
      $("#add-basket__color-window").animate({ opacity: 0 }, 198, function () {
          $(this).css("visibility", "hidden");
          $("#shadow-dark-2").fadeOut(297);
        $("div.container")
          .css("margin", "0 8px");
      });
  });

  //Всплывающее окно, информирующее о добавлении в корзину или в избранное
  $("#btn-to-basket").click(function () {
    setTimeout(() => {
      $('#done').css("display", "flex");
    }, 100)
    setTimeout(() => {
      $('#done').css("display", "none");
    }, 2000)
  });

  let isFavorites = false;
  $("#favorites").click(function () {
    if (isFavorites) {
      document.querySelector('#favorites-img').setAttribute('src', './img/like.svg');
      isFavorites = false;
    } else {
      document.querySelector('#favorites-img').setAttribute('src', './img/like-active.svg');
      setTimeout(() => {
        $('#done-favorites').css("display", "flex");
      }, 0)
      setTimeout(() => {
        $('#done-favorites').css("display", "none");
      }, 2000)
      isFavorites = true;
    }
  });

  //Окно изменения данных в профиле
  $("#mydata").click(function (event) {
    event.preventDefault();
    $("body").css("overflow", "hidden");
      $("#mydata-window")
          .css("display", "block")
          .animate({ opacity: 1 }, 198);
  });

  $("#mydata-close, #mydata-user-exit").click(function () {
      $("#mydata-window").animate({ opacity: 0 }, 198, function () {
        $("body").css("overflow", "auto");
          $(this).css("display", "none");
      });
  });

  //Окно купонов в профиле
  $("#coupons").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
        $("#coupons-window")
            .css("display", "block")
            .animate({ opacity: 1 }, 198);
    });
  });

  $("#coupons-close, #coupon-accept, #shadow").click(function () {
      $("#coupons-window").animate({ opacity: 0 }, 198, function () {
        $("body").css("overflow", "auto");
          $(this).css("display", "none");
          $("#shadow").fadeOut(297);
      });
  });

  //Вход и выход в профиле
  let userIsAuth = true;

  if(userIsAuth) {
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item, .profile-page__services-item").css("pointer-events", "auto");
  } else {
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item, .profile-page__services-item").css("pointer-events", "none");
  }

  $("#mydata-user-exit").click(function () {
    userIsAuth = false;
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item, .profile-page__services-item").css("pointer-events", "none");
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item, .profile-page__services-item").addClass("user-not-auth");
    $("#user-name").css("display", "none");
    $("#to-user-auth").css("display", "block");
  });

  $("#auth-button").click(function () {
    userIsAuth = true;
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item, .profile-page__services-item").css("pointer-events", "auto");
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item, .profile-page__services-item").removeClass("user-not-auth");
    $("#user-name").css("display", "block");
    $("#to-user-auth").css("display", "none");
  });

  $("#to-user-auth, .user-not-auth").click(function (event) {
    event.preventDefault();
    $("body").css("overflow", "hidden");
      $("#auth-window")
          .css("display", "block")
          .animate({ opacity: 1 }, 198);
    });


  $("#auth-close, #auth-button").click(function () {
    $("#auth-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
        $(this).css("display", "none");
    });
  });
    
  //Загрузка фото
  $('#my-file-label').on('click', function() {
    $('#my-file').trigger('click');
  });

  let maxFileSize = 10 * 1024 * 1024; // (байт) Максимальный размер файла (10мб)
  let queue = {};

  let imagesList = $('#uploadImagesList');
  // 'detach' подобно 'clone + remove'
  let itemPreviewTemplate = imagesList.find('.send-page__images-item').detach();

  // Вычисление лимита
  function limitUpload() {
    return 5 - imagesList.children().length;
  }
  // Отображение лимита
  function limitDisplay() {
    let sTxt;
    switch (limitUpload()) {
      case 5:
        sTxt = '(0/5)';
        break;
      case 0:
        sTxt = '(5/5)';
        $('#my-file-label, #my-file').css("display", "none");
        $('#uploadImagesList').css("max-width", "100%");
        break;
      default:
        sTxt = '(' + (5 - +limitUpload()) + '/5)';
        $('#my-file-label, #my-file').css("display", "block");
        $('#uploadImagesList').css("max-width", "80%");
    }
    if (limitUpload() == 0) {
      $('#my-file-label, #my-file').css(("display", "none"));
    } else {
      $('#my-file-label, #my-file').css(("display", "block"));
    }
    $('.add_photo-item').html(sTxt);
  }

  $('#my-file').on('change', function() {
    let files = this.files;
    // Перебор файлов до лимита
    for (var i = 0; i < limitUpload(); i++) {

      let file = files[i];
      if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
        continue;
      }
      if (file.size > maxFileSize) {
        alert('Размер фотографии не должен превышать 10 Мб');
        continue;
      }
      preview(files[i]);
    }
    this.value = '';
  });
  function preview(file) {
    let reader = new FileReader();
    reader.addEventListener('load', function(event) {
      let img = document.createElement('img');
      let itemPreview = itemPreviewTemplate.clone();
      itemPreview.find('.img-wrap img').attr('src', event.target.result);
      itemPreview.data('id', file.name);
      imagesList.append(itemPreview);
      // Обработчик удаления
      itemPreview.on('click', function() {
        delete queue[file.name];
        $(this).remove();
        limitDisplay();
      });

      queue[file.name] = file;
      // Отображение лимита при добавлении
      limitDisplay();
    });
    reader.readAsDataURL(file);
  }
  // Отображение лимита при запуске
  limitDisplay();

});

//Промотка страницы вверх
jQuery(document).ready(function() {
  var btn = $('#button-to-top');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 800) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
});


/* Скорость поялвения элемента */
var speedOpacity = 295;
var speedOpacityForSVG = speedOpacity/250;

/* Изменение шапки */
jQuery(document).ready(function() {
  $(window).scroll(function(){
    var offsetFromScreenTop = $(window).scrollTop();
    $(".header-top .page-header__form").css("opacity", offsetFromScreenTop/speedOpacity);
    $(".header-top").css("background-color", "rgba(242, 242, 242, " + offsetFromScreenTop/speedOpacity + ")");
    $(".header-top .page-header__button").css("background-color", "rgba(0, 0, 0, " + (0.7 - offsetFromScreenTop/(speedOpacity/3.5)) + ")");
    $(".header-top .page-header__button:nth-child(1) svg").css("fill", "rgb(" + (255 - offsetFromScreenTop/speedOpacityForSVG) +", " + (255 - offsetFromScreenTop/speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop/speedOpacityForSVG) + ")");
    $(".header-top .page-header__button:nth-child(4) svg").css("fill", "rgb(" + (255 - offsetFromScreenTop/speedOpacityForSVG) +", " + (255 - offsetFromScreenTop/speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop/speedOpacityForSVG) + ")");
    $(".header-top .page-header__button:nth-child(3) svg path").css("stroke", "rgb(" + (255 - offsetFromScreenTop/speedOpacityForSVG) +", " + (255 - offsetFromScreenTop/speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop/speedOpacityForSVG) + ")");
  });
});