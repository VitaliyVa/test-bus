$(document).ready(function() {
  // $('.form__element_calendar').datepicker({
  //     minDate: new Date(),
  //     dateFormat: 'DD, dd.mm.yyyy',
  // })
  // jQuery('.datepicker_icon').on('click' , function() {
  //   if ($(this).parents(".input-tickets__grops-disabled").length) {
  //     return false;
  //
  //   }else{
  //     $('.form__element_calendar').datepicker().trigger('focus');
  //   }
  //
  // });

  function change_pluse(){
    $('.input__pl-min_minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.input__pl-min_plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  }

  $('.tickets__seat_help').on('click', function() {
    $('.tickets__description').toggleClass('tickets__description-active');
    $('.tickets__disabled_seat').toggleClass('tickets__disabled_seat-description-active');
    $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".tickets__description"); // тут указываем класс элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.tickets__description').removeClass('tickets__description-active');
        $('.tickets__disabled_seat').removeClass('tickets__disabled_seat-description-active');
    }
  });

  })
  $('.tickets__description-close').on('click', function() {
    $('.tickets__description').removeClass('tickets__description-active');
    $('.tickets__disabled_seat').removeClass('tickets__disabled_seat-description-active');
  })

  $(".card").mouseover(function(e) {
    $(this).addClass("cart-hover");
  });
  $(".card").mouseout(function(e) {
    $(this).removeClass("cart-hover");
  });

  $(".js-hamburger").on('click', function(e) {
    $('.js-hamburger').toggleClass('is-active');
    $('.fix-box__main ').toggleClass('fix-box__main-active');
  });

  $('.nav__menu_item-drop').on('click', function(e) {
    e.preventDefault();
    $('.nav__menu_sub').toggleClass('main-menu__sub-active');
  });

  function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }

  function doSomething() {
    if ($(this).parents(".input-tickets__grops-disabled").length) {
      return false;
    } else {
      $(".input-tickets__grops").removeClass('input-tickets__grops-error');
      let select__wrap = $(this).parent('.select').find(".select__wrap");
      let field = $(this).parent('.select').find(".field");

      if (hasClass(select__wrap[0], 'select__wrap-active')) {
        $(select__wrap).toggleClass('select__wrap-active');
        $(field).toggleClass('field-active');
      } else {
        $('.select__wrap').removeClass('select__wrap-active');
        $('.field').removeClass('field-active');
        $(select__wrap).addClass('select__wrap-active');
        $(field).addClass('field-active');
      }
    }
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(this).parent('.select').find(".select__wrap"); // тут указываем класс элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
	  &&
	  div.has(e.target).length === 0) { // и не по его дочерним элементам
  	  $('.select__wrap').removeClass('select__wrap-active');
  	  $('.field').removeClass('field-active');
  	}
	});
  }

  $('.select__intup').on('click', doSomething);

  select__wrap_item();

  $(".our-servise__wrap").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1055,
        settings: {
          slidesToShow: 3,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 692,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 465,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          dots: true,
        }
      }
    ]
  });

  $(".customer-reviews__wrap").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.customer-reviews_next',
    prevArrow: '.customer-reviews_prew',
    responsive: [{
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
  });

  // forEach method, could be shipped as part of an Object Literal/Module start
  var forEach = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };


  // select tiskey style hover
  var tisket_select = document.querySelectorAll('.input-tickets__grops:not(.input-tickets__grops-disabled) .input-tickets__main .select-tickets .select__intup ');

  function hover_field(tisket_select){
    if (tisket_select) {
      forEach(tisket_select, function(index, value) {
        value.onmouseleave = function(event) {
          value.classList.remove('select-tickets-active');
        }
        value.onmouseenter = function(event) {
          value.classList.add('select-tickets-active');
        };
      });
    }
  }
  hover_field(tisket_select);
  hover_field(document.querySelectorAll('.input-tickets__main'));

  // tabs contant
  function tabevent(box, item) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(box);
    tablinks = document.getElementsByClassName(item);
    forEach(tablinks, function(index, value) {
      value.onclick = function(event) {
// console.log(event);

        forEach(tablinks, function(index, value) {
          value.classList.remove(item + '-active');
        });

        forEach(tabcontent, function(index, value) {
          value.classList.remove(box + '-active');

        });

        var active_element= $(this);
        value.classList.add(item + '-active');
        element = document.querySelector('[data-tab="' + event.target.id + '"]');
        element.classList.add(box + '-active');


        if (event.target.id=='trip4') {
          $('.tickets__section_bus').addClass('tickets__section_bus-hover');
          $('.tickets__section_img-bus').removeClass('tickets__section_img-bus-hover');
          $('.tickets__section_img-evrop').addClass('tickets__section_img-evrop-hover');

        }else if(event.target.id=='trip3'){
          $('.tickets__section_bus').addClass('tickets__section_bus-hover');
          $('.tickets__section_img-evrop').removeClass('tickets__section_img-evrop-hover');
          $('.tickets__section_img-bus').addClass('tickets__section_img-bus-hover');

        }else{
            $('.tickets__section_img-evrop').addClass('tickets__section_img-evrop-hover');
            $('.tickets__section_img-bus').addClass('tickets__section_img-evrop-hover');
            $('.tickets__section_bus').removeClass('tickets__section_bus-hover');

        }


        if(element.querySelectorAll('.input-tickets__box-sites .input-tickets__grops ').length>0){
          reservation_seat(element);
          forEach(element.querySelectorAll('.input-tickets__box-sites .input-tickets__grops '), function(index, value) {
            value.classList.remove('input-tickets__grops-disabled');
          });
        }
      }
    });
    change_pluse();
  }

  tabevent('tab__box', 'tab__item');

//*******************//
// Додавання неактивного класу інпут
// Заберання класу в елементів звязаних з вибором міста
//*******************//
$('.input-tickets__box .input-tickets__grops').addClass('input-tickets__grops-disabled');


forEach($('.tab__box-active').find('.input-tickets__box-sites .input-tickets__grops'), function(index, value) {
  value.classList.remove('input-tickets__grops-disabled');
});

/*кінець*/
//**************************//



//**********************************
// вибор мест в микроавтобусе
//****************start********
reservation_seat();
function reservation_seat(box = document.getElementsByClassName('tab__box-active')[0]){
  var wrap__box = box;
  var sity__select__item = wrap__box.querySelectorAll('.input-tickets__box-sites .select__wrap_item');
  var sity__select__input = wrap__box.querySelectorAll('.input-tickets__box-sites input');

  var datapicer = box.querySelector('.form__element_calendar');
  var datapicer_box = box.querySelector('.data_flights');
  var journey_time = box.querySelector('.flights__time');
  var payment_met = box.querySelector('.payment__method');
  var journey_time__wrap = journey_time.querySelector('.select__wrap');

  forEach(sity__select__item, function(index, value) {
    $(value).on('click', function() {

        var sity_json_value = $(sity__select__input).serializeArray();

          if (sity_json_value[0].value && sity_json_value[1].value) {
            console.log(sity_json_value);
            var test_masiv = {
              "data_flights": ['2019-10-11', '2019-10-16', '2019-10-14', '2019-10-18', '2019-10-29']
            }

            // *****************ajax date in datapicer ****************

            $(datapicer).datepicker({
              minDate: new Date(),
              dateFormat: 'DD, dd.mm.yyyy',
              autoClose: true,
              onRenderCell: function(date, cellType) {
                if (cellType == 'day') {
                  if ($.inArray(formatDate(date), test_masiv.data_flights) < 0) {
                    return {
                      disabled: true
                    }
                  }
                  return {
                    disabled: false
                  }
                }
              },onHide: function(dp, animationCompleted) {
                if (animationCompleted) {

                  // ********************************
                  //ajax data_flights start
                  //*********************
                  var test_masiv_flights = {
                    "flights": {
                      "flights_1": {
                        "name": 'Рейс на 10:00',
                        "id": 'flights_test_1',
                      },
                      "flights_2": {
                        "name": 'Рейс на 12:00',
                        "id": 'flights_test_2',
                      },
                      "flights_3": {
                        "name": 'Рейс на 14:00',
                        "id": 'flights_test_3',
                      },
                      "flights_4": {
                        "name": 'Рейс на 16:00',
                        "id": 'flights_test_4',
                      },
                      "flights_5": {
                        "name": 'Рейс на 16:00',
                        "id": 'flights_test_4',
                      }
                    }
                  }

                  let fragment = document.createDocumentFragment();

                  for (var key in test_masiv_flights.flights) {
                    let select__item = document.createElement('div');
                      select__item.classList.add('select__wrap_item');
                      select__item.dataset.id = test_masiv_flights.flights[key].id;
                      select__item.innerHTML = test_masiv_flights.flights[key].name;
                      fragment.appendChild(select__item);
                  }

                  while ($(journey_time__wrap)[0].firstChild) {
                    $(journey_time__wrap)[0].removeChild($(journey_time__wrap)[0].firstChild);
                  }

                  $(journey_time__wrap)[0].appendChild(fragment);

                  journey_time.classList.remove('input-tickets__grops-disabled');

                //************* Привязка кода до  створеного списку рейсів

                  $('.select__wrap_item').on('click', function() {
                    let text = $(this).text();
                    let id = $(this).data('id');
                    let field = $(this).parents('.select').find(".field_text ");
                    let input_select = $(this).parents('.select').find("input");
                    $(field).text(text);
                    $(input_select).val(id);
                    $('.select__wrap').removeClass('select__wrap-active');
                    $('.field').removeClass('field-active');
                    active_bus();
                  })
                }
              }

            });
            datapicer_box.classList.remove('input-tickets__grops-disabled');
          }
    });
  });
}

function active_bus(){
  // ********************************
  //ajax Для знаходження мість у бусі
  //*********************
  var test_seats = {
    "seats": {
      "1": {
        "value": '1',
        "flag": 'true',
        'key_ssesions':''

      },
      "2": {
        "value": '2',
        "flag": 'true',
      },
      "3": {
        "value": '2',
        "flag": 'false',
      },
      "4": {
        "value": '2',
        "flag": 'false',
      },
      "5": {
        "value": '2',
        "flag": 'false',
      },
      "6": {
        "value": '2',
        "flag": 'false',
      },
      "7": {
        "value": '2',
        "flag": 'false',
      },
      "8": {
        "value": '1',
        "flag": 'false',

      },
      "9": {
        "value": '2',
        "flag": 'true',
      },
      "10": {
        "value": '2',
        "flag": 'true',
      },
      "11": {
        "value": '2',
        "flag": 'true',
      },
      "12": {
        "value": '2',
        "flag": 'true',
      },
      "13": {
        "value": '2',
        "flag": 'true',
      },
      "14": {
        "value": '2',
        "flag": 'true',
      },
      "15": {
        "value": '1',
        "flag": 'true',

      },
      "16": {
        "value": '2',
        "flag": 'true',
      },
      "17": {
        "value": '2',
        "flag": 'true',
      },
      "18": {
        "value": '2',
        "flag": 'true',
      },
      "19": {
        "value": '2',
        "flag": 'true',
          'key_ssesions':''
      },
      "20": {
        "value": '2',
        "flag": 'true',
      },
      "21": {
        "value": '2',
        "flag": 'true',
      }

    }
  }

  var booked_places = document.querySelector('.booked_places');
  var bus_item_name;
  var tickets__disabled_seat = document.querySelectorAll('.tickets__disabled_seat')
  var seat_group = document.querySelectorAll('.seat-group');
  var payment_met = document.querySelector('.payment__method');

  for (var bus_seat in test_seats.seats) {
    var bus_item = document.querySelectorAll('[data-id="seat'+bus_seat+'"]');

    forEach(bus_item, function(index, value) {
      value.dataset.item = bus_seat;
      value.classList.add('bus-seat');
    });

    if (bus_seat < 10) {
      bus_item_name = '0' + bus_seat
    } else {
      bus_item_name = bus_seat;
    };

    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttributeNS(null, 'x', 0.5);
    rect.setAttributeNS(null, 'y', 0.5);
    rect.setAttributeNS(null, 'rx', 4.5);
    rect.setAttributeNS(null, 'height', '69');
    rect.setAttributeNS(null, 'width', '69');
    rect.setAttributeNS(null, 'fill', '#20BF55');
    rect.setAttributeNS(null, 'stroke', 'none');

    forEach(bus_item, function(index, value) {
      value.appendChild(rect.cloneNode(true));
    });

    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttributeNS(null, 'transform', 'translate(43 46)   rotate(-90)');
    text.innerHTML = bus_item_name;

    forEach(bus_item, function(index, value) {
      value.appendChild(text.cloneNode(true));
    });

    var delete_use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      delete_use.setAttributeNS(null, 'href', '#Ellipse_13');
      delete_use.setAttributeNS(null, 'viewBox', '0 0 70 70');
      delete_use.setAttributeNS(null, 'x', 0);
      delete_use.setAttributeNS(null, 'y', 0);

    forEach(bus_item, function(index, value) {
      value.appendChild(delete_use.cloneNode(true));
    });

    if (typeof test_seats.seats[bus_seat].key_ssesions === "undefined") {

    } else if (typeof test_seats.seats[bus_seat].key_ssesions !== "undefined" && bus_seat < 3) {
      forEach(bus_item, function(index, value) {
        value.classList.add('bus-seat__disabled');
      });
    } else {
      forEach(bus_item, function(index, value) {
        value.classList.add('bus-seat__active');
      });
    }
  }

  booked_places.classList.remove('input-tickets__grops-disabled');

  forEach(tickets__disabled_seat, function(index, value) {
    value.classList.add('tickets__disabled_seat-active');
  });
  forEach(seat_group, function(index, value) {
    value.classList.remove('input-tickets__grops-disabled');
  });

  payment_met.classList.remove('input-tickets__grops-disabled');

}

  $('.bus-seat').on('click', function() {
    var bus_seat_item = $(this).data('item');
    var box_input_seat = document.querySelectorAll('.input-tickets__main-seat');
    var seat_all__box = document.querySelectorAll('.seat-all__box');

    if ($(this).hasClass('bus-seat__disabled')) {
      return false;
    } else if ($(this).hasClass('bus-seat__active')) {
      $(this).removeClass('bus-seat__active');
      var box_input_seat = $('.seat-all__box');
      namber_item = $(this).data('item');

      forEach(document.querySelectorAll('[data-item_s="'+namber_item+'"]'), function(index, value) {
        value.remove();
      });

      forEach(document.getElementsByClassName('seat-all_count'), function(index, value) {
        value.innerText = box_input_seat[0].childElementCount;
      });

      if(box_input_seat[0].childElementCount<7){
        forEach(seat_all__box, function(index, value) {
          value.classList.remove('seat-all__box-small');
        });
      }
    } else {

      $(this).addClass('bus-seat__active');
      var seat_bus = document.createElement('div');
      seat_bus.classList.add('seat');
      seat_bus.dataset.item_s = bus_seat_item;
        var seat_item_texy = document.createElement('div');
        seat_item_texy.classList.add('seat-text');
        seat_item_texy.innerText='Место';

        var seat_item_count = document.createElement('div');
        seat_item_count.classList.add('seat-count');
        seat_item_count.innerText=bus_seat_item;

        var delelete_seat_bus = document.createElement('div');
        delelete_seat_bus.classList.add('seat_close');

        seat_bus.appendChild(seat_item_texy);
        seat_bus.appendChild(seat_item_count);
        seat_bus.appendChild(delelete_seat_bus);

      forEach(seat_all__box, function(index, value) {
        value.append(seat_bus.cloneNode(true));
      });

      forEach( document.querySelectorAll('.seat-all_count'), function(index, value) {
        value.innerText = box_input_seat[0].children[0].childElementCount;
      });

      if(box_input_seat[0].children[0].childElementCount>6){
        forEach(seat_all__box, function(index, value) {
          value.classList.add('seat-all__box-small');
        });
      }
      delete_seat_item();
    }
  });


function delete_seat_item(){
  $('.seat_close').on('click', function(e){
    if (e.target !== this)
   return;
    var box_input_seat = $('.seat-all__box');
    var imen_sear = $(this).parent().data('item_s');
    var seat_all__box = document.querySelectorAll('.seat-all__box');
    // $(this).parent().remove();
    forEach(document.querySelectorAll('[data-item_s="'+imen_sear+'"]'), function(index, value) {
      value.remove();
    });
    forEach(document.getElementsByClassName('seat-all_count'), function(index, value) {
      value.innerText = box_input_seat[0].childElementCount;
    });

    forEach(document.querySelectorAll('[data-id="seat'+imen_sear+'"]'), function(index, value) {
       value.classList.remove('bus-seat__active');
    });

    if(box_input_seat[0].childElementCount<7){
      forEach(seat_all__box, function(index, value) {
        value.classList.remove('seat-all__box-small');
      });
    }


  });
}

  hover_class('seat-all', 'seat-all__wrap-active');
  function hover_class(element, addClass) {
    element = document.getElementsByClassName(element);
    if (element) {
      forEach(element, function(index, value) {
        value.onmouseleave = function(event) {
          value.classList.remove(addClass);
        }
        value.onmouseenter = function(event) {
          value.classList.add(addClass);
        };
      });
    }
  }

  function select__wrap_item() {
    $('.select__wrap_item').on('click', function() {
      let text = $(this).text();
      let id = $(this).data('id');
      let field = $(this).parents('.select').find(".field_text ");
      let input_select = $(this).parents('.select').find("input");
      $(field).text(text);
      $(input_select).val(id);
      $('.select__wrap').removeClass('select__wrap-active');
      $('.field').removeClass('field-active');
    })
  }

  $(".tickets__control_step-next").on('click', function() {
    var inputs = $('.tickets__box_seat').find('input');
    var flag_error = 0;

    forEach(inputs, function(index, value) {
      if ($(value).val()) {
      } else {
        flag_error++;
        $(value).parents('.input-tickets__grops').addClass('input-tickets__grops-error')
      }

    })

    if (flag_error===0) {
      $('.tickets__box_seat').removeClass('tickets__box_seat-active');
      $('.tickets__box_contact').addClass('tickets__box_contact-active');
    }
  });

  $(".tickets__control_step-prev").on('click', function() {
      $('.tickets__box_seat').addClass('tickets__box_seat-active');
      $('.tickets__box_contact').removeClass('tickets__box_contact-active');

  });

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;

    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }
});


if (document.documentElement.clientWidth < 781) {
  var steps = $("  .input-tickets__box");
  var count = steps.length;
  steps.each(function(i) {
    var page_step = i + 1;
    $(this).wrap("<div class='fieldset__box' id='step" + i + "'></div>");
    if (i == 0) {
      createNextButton(i); // to do
    } else  {
      $("#step" + i).hide();
      createPrevButton(i); // to do
      createNextButton(i); // to do
    }
  })
}

function createPrevButton(i) {
  var stepName = "step" + i;
  if (i>0) {
    $("#" + stepName + ' .input-tickets__box_contros').append("<a href='#' id='" + stepName + "Prev' class='prev_tite prev_step btn btn-greyy'><i class='fas fa-angle-left'></i> </a>");
  }
}

function createNextButton(i) {
  var stepName = "step" + i;
  if (i == 0) {
    $("#" + stepName + ' .input-tickets__box_contros').append("<a href='#' id='" + stepName + "Next' class='next_tite btn btn-blue'>Выбрать дату и рейс  </a>");
  } else if (i == 1) {
    $("#" + stepName + ' .input-tickets__box_contros').append("<a href='#' id='" + stepName + "Next' class='next_tite btn btn-blue'>Выбрать место  </a>");
  } else if (i == 2) {
    $("#" + stepName + ' .input-tickets__box_contros').append("<a href='#' id='" + stepName + "Next' class='next_tite btn btn-blue'>Оформить билет </a>");

  } else if (i == 3) {
    $("#" + stepName + ' .input-tickets__box_contros').append("<a href='#' id='" + stepName + "Next' class='next_tite btn btn-blue'>Перейти к оплате </a>");
  }


  $("#" + stepName + "Next").bind("click", function(e) {

    var flag = true;

    $.each($("#" + stepName + ' input'), function(index, input) {
      if ($(input).val().trim() === "") {
        flag = false;
        $(input).parents('.input-tickets__grops').addClass('input-tickets__grops-error')
      }
    })

    if (flag !== false) {
      $("#" + stepName).hide();
      $("#step" + (i + 1)).show();
    }
  });
}
