$(document).ready(function(){var l=$(".modal"),e=$("[data-toggle=modal]"),a=$(".modal__close");modalThanks=$(".modal__thanks"),modalThanksDialog=$(".modal__thanks__dialog"),closeBtnThanks=$(".modal__thanks__close"),e.on("click",function(){l.toggleClass("modal--visible")}),a.on("click",function(){l.toggleClass("modal--visible")});new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var n=$(".swiper-button-next"),s=$(".swiper-button-prev"),o=$(".swiper-pagination");n.css("left",s.width()+10+o.width()+10),o.css("left",s.width()+10),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(e){},scrollContainer:null,resetAnimation:!0}).init(),$(".modal__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",policyCheckbox:"required",userEmail:{required:!0,email:!0}},messages:{userName:{required:"Имя обязательно",minlength:"Имя должно быть не короче двух букв"},userPhone:"Телефон обязателен",policyCheckbox:"Поле обязательно для заполнения",userEmail:{required:"Обязательно укажите email",email:"Введите в формате: name@domain.com"}},submitHandler:function(a){$.ajax({type:"POST",url:"send.php",data:$(a).serialize(),success:function(e){$(a)[0].reset(),l.toggleClass("modal--visible"),modalThanks.toggleClass("modal__thanks--visible"),l.removeClass("modal__thanks--visible"),$(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")}})}}),closeBtnThanks.on("click",function(){modalThanks.toggleClass("modal__thanks--visible")}),modalThanks.on("click",function(e){modalThanksDialog.is(e.target)||0!==modalThanksDialog.has(e.target).length||modalThanks.toggleClass("modal__thanks--visible")}),$(".footer__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",userQuestion:"required",userEmail:{required:!0,email:!0}},messages:{userName:{required:"Имя обязательно",minlength:"Имя должно быть не короче двух букв"},userPhone:"Телефон обязателен",userQuestion:"Поле обязательно для заполнения",userEmail:{required:"Обязательно укажите email",email:"Введите в формате: name@domain.com"}},submitHandler:function(a){$.ajax({type:"POST",url:"send.php",data:$(a).serialize(),success:function(e){$(a)[0].reset(),modalThanks.toggleClass("modal__thanks--visible"),l.removeClass("modal__thanks--visible"),$(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")}})}}),closeBtnThanks.on("click",function(){modalThanks.toggleClass("modal__thanks--visible")}),modalThanks.on("click",function(e){modalThanksDialog.is(e.target)||0!==modalThanksDialog.has(e.target).length||modalThanks.toggleClass("modal__thanks--visible")}),$(".control__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",policyCheckbox:"required",userEmail:{required:!0,email:!0}},messages:{userName:{required:"Имя обязательно",minlength:"Имя должно быть не короче двух букв"},userPhone:"Телефон обязателен",policyCheckbox:"Поле обязательно для заполнения",userEmail:{required:"Обязательно укажите email",email:"Введите в формате: name@domain.com"}},submitHandler:function(a){$.ajax({type:"POST",url:"send.php",data:$(a).serialize(),success:function(e){$(a)[0].reset(),modalThanks.toggleClass("modal__thanks--visible"),l.removeClass("modal__thanks--visible"),$(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")}})}}),closeBtnThanks.on("click",function(){modalThanks.toggleClass("modal__thanks--visible")}),modalThanks.on("click",function(e){modalThanksDialog.is(e.target)||0!==modalThanksDialog.has(e.target).length||modalThanks.toggleClass("modal__thanks--visible")}),$("[type=tel]").mask("+7(000) 000-00-00",{placeholder:"+7(___) ___-__-__"}),ymaps.ready(function(){var e=new ymaps.Map("map",{center:[55.693662,37.349749],zoom:9},{searchControlProvider:"yandex#search"}),a=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),l=new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Это красивая метка"},{iconLayout:"default#image",iconImageHref:"img/location.png",iconImageSize:[32,32],iconImageOffset:[-5,-38]}),n=new ymaps.Placemark([55.661574,37.573856],{hintContent:"Собственный значок метки с контентом",balloonContent:"А эта — новогодняя",iconContent:"12"},{iconLayout:"default#imageWithContent",iconImageHref:"images/ball.png",iconImageSize:[48,48],iconImageOffset:[-24,-24],iconContentOffset:[15,15],iconContentLayout:a});e.geoObjects.add(l).add(n)})});