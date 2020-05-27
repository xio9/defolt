$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
        modalThanks = $('.modal__thanks'),
        modalThanksDialog = $('.modal__thanks__dialog'),
        closeBtnThanks = $('.modal__thanks__close');;
    
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation : {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');



    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();

    // Валидация формы
    $('.modal__form').validate({
      errorClass: "invalid",
      rules: {
        // строчное правило
         userName: {
          required : true,
          minlength: 2
          },
         userPhone: "required",
         policyCheckbox: "required",
          // правило-объект 
         userEmail: {
         required: true,
         email: true
       }
      }, // Сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя должно быть не короче двух букв"
      },
        userPhone: "Телефон обязателен",
        policyCheckbox: "Поле обязательно для заполнения",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(), 
          success: function (response) {
            $(form)[0].reset();
            modal.toggleClass('modal--visible');
            modalThanks.toggleClass('modal__thanks--visible');
            modal.removeClass('modal__thanks--visible');
            $('.modal__thanks-title').text('Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.');
          },
        });
      }
     });
     closeBtnThanks.on('click', function() {
      modalThanks.toggleClass('modal__thanks--visible');
    });
    modalThanks.on('click', function(e) {
      if(!modalThanksDialog.is(e.target) && modalThanksDialog.has(e.target).length === 0) {
        modalThanks.toggleClass('modal__thanks--visible');
      }
    });

     // Валидация формы
    $('.footer__form').validate({
      errorClass: "invalid",
      rules: {
         userName: {
          required : true,
          minlength: 2
          },
         userPhone: "required",
         userQuestion: "required",
          // правило-объект 
         userEmail: {
         required: true,
         email: true
       }
      }, // Сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя должно быть не короче двух букв"
      },
        userPhone: "Телефон обязателен",
        userQuestion: "Поле обязательно для заполнения",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(), 
          success: function (response) {
            $(form)[0].reset();
            modalThanks.toggleClass('modal__thanks--visible');
            modal.removeClass('modal__thanks--visible');
            $('.modal__thanks-title').text('Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.');
          },
        });
      }
     });
     closeBtnThanks.on('click', function() {
      modalThanks.toggleClass('modal__thanks--visible');
    });
    modalThanks.on('click', function(e) {
      if(!modalThanksDialog.is(e.target) && modalThanksDialog.has(e.target).length === 0) {
        modalThanks.toggleClass('modal__thanks--visible');
      }
    });

     // Валидация формы
    $('.control__form').validate({
      errorClass: "invalid",
      rules: {
        // строчное правило
         userName: {
          required : true,
          minlength: 2
          },
         userPhone: "required",
         policyCheckbox: "required",
          // правило-объект 
         userEmail: {
         required: true,
         email: true
       }
      }, // Сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя должно быть не короче двух букв"
      },
        userPhone: "Телефон обязателен",
        policyCheckbox: "Поле обязательно для заполнения",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(), 
          success: function (response) {
            $(form)[0].reset();
            modalThanks.toggleClass('modal__thanks--visible');
            modal.removeClass('modal__thanks--visible');
            $('.modal__thanks-title').text('Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.');
          },
        });
      }
     });
     closeBtnThanks.on('click', function() {
      modalThanks.toggleClass('modal__thanks--visible');
    });
    modalThanks.on('click', function(e) {
      if(!modalThanksDialog.is(e.target) && modalThanksDialog.has(e.target).length === 0) {
        modalThanks.toggleClass('modal__thanks--visible');
      }
    });


     //Маска для телефона
      $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7(___) ___-__-__"});

    });
//Ymap start
var spinner = $('.ymap-container').children('.loader');
var check_if_load = 0;
var myMapTemp, myPlacemarkTemp;


function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.691866, 37.348707],
    zoom: 9,
    controls: ['zoomControl', 'fullscreenControl']
  });

  var myPlacemarkTemp = new ymaps.Placemark([55.691866, 37.348707], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/location.jpeg',
      // Размеры метки.
      iconImageSize: [32, 32],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  
  myMapTemp.geoObjects.add(myPlacemarkTemp);

  //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);

  //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
  waitForTilesLoad(layer).then(function() {
    //Скрываем
    spinner.removeClass('is-active');
  });
}

function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

function loadScript(url, callback){

  var script = document.createElement("script");

  if (script.readyState){  //IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Другие браузеры
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (check_if_load == 0) {
        check_if_load = 1;

        spinner.addClass('is-active');

        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           ymaps.load(init);
        });         
       
      }
    }
  );  
}

$(function() {

  //Map Yandex
  ymap();
});

