jQuery.validator.setDefaults({
  errorClass: 'invalid',
    successClass: 'valid',
    focusInvalid: false,
    errorElement: 'span',
    errorPlacement: function (error, element) {
    if ( element.parent().hasClass('jq-checkbox') ||  element.parent().hasClass('jq-radio')) {
      element.closest('label').after(error);
      
    } else if (element.parent().hasClass('jq-selectbox')) {
      element.closest('.jq-selectbox').after(error);
    } else {
      error.insertAfter(element);
    }
  },
  highlight: function(element, errorClass, validClass) {
    if ( $(element).parent().hasClass('jq-checkbox') ||  $(element).parent().hasClass('jq-radio') || $(element).parent().hasClass('jq-selectbox')) {
        $(element).parent().addClass(errorClass).removeClass(validClass);
    } else {
        $(element).addClass(errorClass).removeClass(validClass);
    }
  },
  unhighlight: function(element, errorClass, validClass) {
    if ( $(element).parent().hasClass('jq-checkbox') ||  $(element).parent().hasClass('jq-radio') || $(element).parent().hasClass('jq-selectbox')) {
        $(element).parent().removeClass(errorClass).addClass(validClass);
    } else {
        $(element).removeClass(errorClass).addClass(validClass);
    }
  }
});
//дефолтные сообщения, предупреждения
jQuery.extend(jQuery.validator.messages, {
  required: "Обязательное поле",
  email: "Некорректный email адрес",
  url: "Некорректный URL",
  number: "Некорректный номер",
  digits: "Это поле поддерживает только числа",
  equalTo: "Поля не совпадают",
  maxlength: jQuery.validator.format('Максимальная длина поля {0} символа(ов)'),
  minlength: jQuery.validator.format('Минимальная длина поля {0} символа(ов)'),
  require_from_group: jQuery.validator.format('Отметьте миниммум {0} из этих полей')
});
//кастомные методы валидатора
jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-zA-ZА-Яа-я]+$/i.test(value);
}, "Только буквы");

jQuery.validator.addMethod("telephone", function(value, element) {
  return this.optional(element) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/i.test(value);
}, "Некорректный формат");

document.addEventListener('DOMContentLoaded',function(){

    $('.clientts-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<img src="images/icons/arrow-left.svg" class="prev">',
        nextArrow: '<img src="images/icons/arrow-right.svg" class="next">',
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
    });

    $('.banner-slider').slick({
        dots: true,
        // infinite: true,
        // speed: 300,
        // slidesToShow: 1,
        prevArrow: '<img src="images/icons/arrow-left.svg" class="prevArrow">',
        nextArrow: '<img src="images/icons/arrow-right.svg" class="nextArrow">'
    });

    $('.main-slider__about').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<img src="images/icons/arrow-left.svg" class="prev-about">',
        nextArrow: '<img src="images/icons/arrow-right.svg" class="next-about">'
    });


    $('.mask-phone').mask('+375 (99) 999-99-99')


    $('#feedback_form').validate({
        rules: {
            phone: {
                telephone: true
            },
            email: {
                email: true
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            $('.submit-text-ok').addClass('show');
        }
    });

});

const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.navigation');

burgerMenu.addEventListener('click', (e) => {
  e = e || window.event;
  e.preventDefault();
  burgerMenu.classList.toggle('opened');
  navList.classList.toggle('opened');
}, false);


// const burgerMenu = document.querySelector('.burger-menu');
// const navList = document.querySelector('.navigation')
// const closeMenu = document.querySelector('.close-menu');
// const headerLogo = document.querySelector('.header-logo');
// const headerNav = document.querySelector('.header-nav ');
// const account = document.querySelector('.account');

// burgerMenu.addEventListener('click', openBurgerMenu);

// function openBurgerMenu() {
//   navList.classList.toggle('d-flex');
//   burgerMenu.classList.toggle('d-none');
//   closeMenu.classList.toggle('d-none');
//   headerLogo.classList.toggle('d-none');
//   headerNav.style.background = 'rgb(240, 240, 240)';
//   account.classList.toggle('d-none');
// }

// closeMenu.addEventListener('click',closeBurgerMenu);

// function closeBurgerMenu() {
//   navList.classList.toggle('d-flex');
//   closeMenu.classList.toggle('d-none');
//   burgerMenu.classList.toggle('d-none');
//   headerLogo.classList.toggle('d-none');
//   headerNav.style.background = '#fff';
//   account.classList.toggle('d-none');
// }