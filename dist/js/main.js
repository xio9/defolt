$(document).ready(function(){var e=$(".modal"),a=$("[data-toggle=modal]"),n=$(".modal__close");modalThanks=$(".modal__thanks"),modalThanksDialog=$(".modal__thanks__dialog"),closeBtnThanks=$(".modal__thanks__close"),a.on("click",function(){e.toggleClass("modal--visible")}),n.on("click",function(){e.toggleClass("modal--visible")});new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var i=$(".swiper-button-next"),l=$(".swiper-button-prev"),o=$(".swiper-pagination");i.css("left",l.width()+10+o.width()+10),o.css("left",l.width()+10),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(e){},scrollContainer:null,resetAnimation:!0}).init(),$(".modal__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",policyCheckbox:"required",userEmail:{required:!0,email:!0}},messages:{userName:{required:"Имя обязательно",minlength:"Имя должно быть не короче двух букв"},userPhone:"Телефон обязателен",policyCheckbox:"Поле обязательно для заполнения",userEmail:{required:"Обязательно укажите email",email:"Введите в формате: name@domain.com"}},submitHandler:function(a){$.ajax({type:"POST",url:"send.php",data:$(a).serialize(),success:function(n){$(a)[0].reset(),e.toggleClass("modal--visible"),modalThanks.toggleClass("modal__thanks--visible"),e.removeClass("modal__thanks--visible"),$(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")}})}}),closeBtnThanks.on("click",function(){modalThanks.toggleClass("modal__thanks--visible")}),modalThanks.on("click",function(e){modalThanksDialog.is(e.target)||0!==modalThanksDialog.has(e.target).length||modalThanks.toggleClass("modal__thanks--visible")}),$(".footer__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",userQuestion:"required",userEmail:{required:!0,email:!0}},messages:{userName:{required:"Имя обязательно",minlength:"Имя должно быть не короче двух букв"},userPhone:"Телефон обязателен",userQuestion:"Поле обязательно для заполнения",userEmail:{required:"Обязательно укажите email",email:"Введите в формате: name@domain.com"}},submitHandler:function(a){$.ajax({type:"POST",url:"send.php",data:$(a).serialize(),success:function(n){$(a)[0].reset(),modalThanks.toggleClass("modal__thanks--visible"),e.removeClass("modal__thanks--visible"),$(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")}})}}),closeBtnThanks.on("click",function(){modalThanks.toggleClass("modal__thanks--visible")}),modalThanks.on("click",function(e){modalThanksDialog.is(e.target)||0!==modalThanksDialog.has(e.target).length||modalThanks.toggleClass("modal__thanks--visible")}),$(".control__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",policyCheckbox:"required",userEmail:{required:!0,email:!0}},messages:{userName:{required:"Имя обязательно",minlength:"Имя должно быть не короче двух букв"},userPhone:"Телефон обязателен",policyCheckbox:"Поле обязательно для заполнения",userEmail:{required:"Обязательно укажите email",email:"Введите в формате: name@domain.com"}},submitHandler:function(a){$.ajax({type:"POST",url:"send.php",data:$(a).serialize(),success:function(n){$(a)[0].reset(),modalThanks.toggleClass("modal__thanks--visible"),e.removeClass("modal__thanks--visible"),$(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")}})}}),closeBtnThanks.on("click",function(){modalThanks.toggleClass("modal__thanks--visible")}),modalThanks.on("click",function(e){modalThanksDialog.is(e.target)||0!==modalThanksDialog.has(e.target).length||modalThanks.toggleClass("modal__thanks--visible")}),$("[type=tel]").mask("+7(000) 000-00-00",{placeholder:"+7(___) ___-__-__"})});var myMapTemp,myPlacemarkTemp,spinner=$(".ymap-container").children(".loader"),check_if_load=0;function init(){var e=new ymaps.Map("map-yandex",{center:[55.691866,37.348707],zoom:9,controls:["zoomControl","fullscreenControl"]}),a=new ymaps.Placemark([55.691866,37.348707],{balloonContent:"Здесь может быть ваш адрес"},{iconLayout:"default#imageWithContent",iconImageHref:"img/location.jpeg",iconImageSize:[32,32],iconImageOffset:[-25,-50]});e.geoObjects.add(a),waitForTilesLoad(e.layers.get(0).get(0)).then(function(){spinner.removeClass("is-active")})}function waitForTilesLoad(e){return new ymaps.vow.Promise(function(a,n){var i=getTileContainer(e),l=!0;i.tiles.each(function(e,a){e.isReady()||(l=!1)}),l?a():i.events.once("ready",function(){a()})})}function getTileContainer(e){for(var a in e)if(e.hasOwnProperty(a)&&(e[a]instanceof ymaps.layer.tileContainer.CanvasContainer||e[a]instanceof ymaps.layer.tileContainer.DomContainer))return e[a];return null}function loadScript(e,a){var n=document.createElement("script");n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,a())}:n.onload=function(){a()},n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}var ymap=function(){$(".ymap-container").mouseenter(function(){0==check_if_load&&(check_if_load=1,spinner.addClass("is-active"),loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1",function(){ymaps.load(init)}))})};$(function(){ymap()});