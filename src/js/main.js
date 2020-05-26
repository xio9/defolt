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

    // Яндекс карта
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [55.693662, 37.349749],
              zoom: 9
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/location.png',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          }),
  
          myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
              hintContent: 'Собственный значок метки с контентом',
              balloonContent: 'А эта — новогодняя',
              iconContent: '12'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'images/ball.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });
  
      myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
  });
    });