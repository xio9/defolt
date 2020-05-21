$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    
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
        policyCheckbox: "Необходимо нажать",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате: name@domain.com"
        }
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
        policyCheckbox: "Необходимо нажать",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате: name@domain.com"
        }
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
        policyCheckbox: "Необходимо нажать",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате: name@domain.com"
        }
      }
     });


     //Маска для телефона
      $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7(___) ___-__-__"});

    // Яндекс карта
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }
    });