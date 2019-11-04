/* Аккордеон */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Меню */
var btn = document.querySelector(".main-nav__btn");
var nav = document.querySelector(".main-nav");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("main-nav--opened");
})

/* Модальное окно заказ*/
var order_btn = document.querySelectorAll(".card-btn");
var modal_close_btn = document.querySelector(".modal__close-btn");
var order_modal = document.querySelector(".modal-wrapper");

// link.addEventListener("click", function(event) {
//   event.preventDefault();
//   modal.classList.add("modal--show");
// })

for (index = 0; index < order_btn.length; index++) {
    button = order_btn[index];
    button.addEventListener('click', function (event) {
       
        event.preventDefault();
        order_modal.classList.toggle("modal--show");
    });
}

// order_btn.addEventListener("click", function(event) {
//   event.preventDefault();
//   order_modal.classList.toggle("modal--show");
// })

modal_close_btn.addEventListener("click", function(event) {
  event.preventDefault();
  order_modal.classList.toggle("modal--show");
})

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (order_modal.classList.contains("modal--show")) {
      order_modal.classList.remove("modal--show");
    }
  }
});

/* Прокрутка */
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

/* Заказать звонок */
btnlink = document.getElementById('callback');
modal = document.getElementById('callback-modal');

btnlink.addEventListener('click', function(event) {
	event.preventDefault();
        modal.classList.toggle('header-callback--show')
    });

    //Вызов карусели

        // Карусель 1
          $(document).ready(function(){
            $('.owl-carousel').owlCarousel(
              {
                items: 1,
                // margin: 200,
                loop: true,
                // touchDrag: false,
                //
                // прокрутка сразу нескольких
                // pullDrag: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 4000,

                nav: true,
                pagination: true,
              }
            );
            $('.owl-carousel-2').owlCarousel(
              {
                items: 1,
                // margin: 200,
                loop: true,
                // touchDrag: false,
                //
                // прокрутка сразу нескольких
                // pullDrag: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 4000,
              }
            );

            $('.owl-carousel-inhabitants').owlCarousel(
              {
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                items: 1,
                // margin: 200,
                loop: true,
                // touchDrag: false,
                //
                // прокрутка сразу нескольких
                // pullDrag: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 4000,
                nav: true,
                pagination: true,

              }
            );

            $('.owl-carousel--feedback').owlCarousel(
              {
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                items: 1,
                // margin: 200,
                loop: true,
                // touchDrag: false,
                //
                // прокрутка сразу нескольких
                // pullDrag: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 4000,
                nav: false,
                pagination: false,

              }
            );

                  var owl = $('.owl-carousel');
          owl.owlCarousel();
          // Go to the next item
          $('.card__arrow--left').click(function(event) {
              //убираем с ссылки стандартное действие
              event.preventDefault()
              owl.trigger('next.owl.carousel');
          })
          // Go to the previous item
          $('.card__arrow--right').click(function(event) {
              //убираем с ссылки стандартное действие
              event.preventDefault()
              // With optional speed parameter
              // Parameters has to be in square bracket '[]'
              owl.trigger('prev.owl.carousel', [300]);
          })
          });


// Скролл

  $(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
      // переместиться в верхнюю часть страницы
      $("html, body").animate({
        scrollTop:0
      },1000);
    })
  })
  // при прокрутке окна (window)
  $(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>200) {
      // то сделать кнопку scrollup видимой
      $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.scrollup').fadeOut();
    }
  });


//  <!-- Отправка сообщения с окна заказа превью карточки -->

        $(document).ready(function(){
              /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
              $('#order__btn').click(function(event){
                  event.preventDefault();
                  // собираем данные с формы
                  var order_farm    = $('#order-farm').val();
                  var order_user_name    = $('#order-field-name').val();
                  var order_user_email   = $('#order-field-email').val();
                  var order_user_phone = $('#order-field-phone').val();
                  var order_user_msg = $('#order-field-msg').val();
                  // отправляем данные
                  $.ajax({
                      url: "order-send.php", // куда отправляем
                      type: "post", // метод передачи
                      data: { // что отправляем
                          "order-farm":          order_farm,
                          "order-field-name":    order_user_name,
                          "order-field-email":   order_user_email,
                          "order-field-phone":   order_user_phone,
                          "order-field-msg":     order_user_msg
                      },
                      error:function(){$("#order-error-block").html("Произошла ошибка!");},
                      /* если произойдет ошибка в элементе с id erconts выведится сообщение*/
                      beforeSend: function() {
                          $("#order-error-block").html("Отправляем данные...");
                      },
                      success: function(result){
                        // var order_user_name    = $('#order-field-name').val("");
                        // var order_user_email   = $('#order-field-email').val("");
                        // var user_phone = $('#field-phone').val("");
                        // var text_comment = $('#field-msg').val("");
                          /* В случае удачной обработки и отправки выполнится следующий код*/
                          $('#order-error-block').html(result);
                          console.log("ntcn");
                      }
                  });
              });
          });

//  <!-- Отправка сообщения с формы обратной связи -->

    $(document).ready(function(){
          /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
          $('#question-form-btn').click(function(event){
              event.preventDefault();
              // собираем данные с формы
              var question_user_name    = $('#question-field-name').val();
              var question_user_email   = $('#question-field-email').val();
              var question_user_phone = $('#question-field-phone').val();
              var question_text_comment = $('#question-field-msg').val();
              // отправляем данные
              $.ajax({
                  url: "send.php", // куда отправляем
                  type: "post", // метод передачи
                  data: { // что отправляем
                      "question-field-name":    question_user_name,
                      "question-field-email":   question_user_email,
                      "question-field-phone":   question_user_phone,
                      "question-field-msg":     question_text_comment
                  },
                  error:function(){$("#question-error-block").html("Произошла ошибка!");},
                  /* если произойдет ошибка в элементе с id erconts выведится сообщение*/
                  beforeSend: function() {
                      $("#question-error-block").html("Отправляем данные...");
                  },
                  success: function(result){
                    var question_user_name    = $('#question-field-name').val("");
                    var question_user_email   = $('#question-field-email').val("");
                    // var user_phone = $('#field-phone').val("");
                    // var text_comment = $('#field-msg').val("");
                      /* В случае удачной обработки и отправки выполнится следующий код*/
                      $('#question-error-block').html(result);
                      console.log("ntcn");
                  }
              });
          });
      });


//  <!-- Отправка сообщения с запроса звонка -->

      $(document).ready(function(){
            /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
            $('#callback-btn').click(function(event){
                event.preventDefault();
                // собираем данные с формы
                var callback_user_name    = $('#callback-name').val();
                var callback_user_phone = $('#callback-phone').val();

                // отправляем данные
                $.ajax({
                    url: "sendcallback.php", // куда отправляем
                    type: "post", // метод передачи
                    data: { // что отправляем
                        "callback-name":    callback_user_name,
                        "callback-phone":   callback_user_phone
                    },
                    error:function(){$("#callback-error-block").html("Произошла ошибка!");},
                    /* если произойдет ошибка в элементе с id erconts выведится сообщение*/
                    beforeSend: function() {
                        $("#callback-error-block").html("Отправляем данные...");
                    },
                    success: function(result){
                      var callback_user_name    = $('#callback-name').val("");
                      var callback_user_email   = $('#callback-email').val("");
                      // var user_phone = $('#field-phone').val("");
                      // var text_comment = $('#field-msg').val("");
                        /* В случае удачной обработки и отправки выполнится следующий код*/
                        $('#callback-error-block').html(result);
                        console.log("ntcn");
                    }
                });
            });
        });
