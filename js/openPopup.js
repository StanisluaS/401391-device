'use strict';

(function () {

  var contacts = document.querySelector('.contacts');
  var feedback = document.querySelector('.feedback');
  var feedbackForm = feedback.querySelector('.feedback-form');
  var name = feedbackForm.querySelector('[name=name]');
  var email = feedbackForm.querySelector('[name=email]');
  var message = feedbackForm.querySelector('[name=message]');
  var map = contacts.querySelector('.small-map');
  var btnContacts = contacts.querySelector('.btn-contacts');
  var btnCloseFeedback = feedback.querySelector('.feedback-close');
  var name = feedback.querySelector('[name=name]');
  var bigMap = document.querySelector('.big-map');
  var btnCloseMap = bigMap.querySelector('.btn-big-map');
  var controlList = document.querySelector('.control-list');
  var sliderList = document.querySelector('.slider-list');
  var btnSlider = controlList.querySelectorAll('.btn-slider-control');
  var sliderItem = sliderList.querySelectorAll('.slider-item');
  var serviceSwitch = document.querySelector('.service-switch');
  var serviceDescription = document.querySelector('.service-description');
  var switchs = serviceSwitch.querySelectorAll('.btn-switch');
  var descriptionItem = serviceDescription.querySelectorAll('.description-item');

  // переключение слайдов

  var switchSlide = function (evt) {
    evt.preventDefault();
    if (evt.target.parentElement.classList.contains('slider-control-active') || evt.target.parentElement.classList.contains('switch-active')) {
      return;
    } else if (evt.target.classList.contains('btn-slider-control')) {
      var btnNumber = +evt.target.firstElementChild.innerText.replace('Слайд ','');
      for (var i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('slider-active');
        btnSlider[i].parentElement.classList.remove('slider-control-active');
      };
      sliderItem[btnNumber - 1].classList.add('slider-active');
      btnSlider[btnNumber - 1].parentElement.classList.add('slider-control-active');
    } else if (evt.target.classList.contains('btn-switch')) {
      var btnNumber = +evt.target.firstElementChild.innerText.replace('Слайд ','');
      for (var i = 0; i < descriptionItem.length; i++) {
        descriptionItem[i].classList.remove('description-active');
        switchs[i].parentElement.classList.remove('switch-active');
      };
      descriptionItem[btnNumber - 1].classList.add('description-active');
      switchs[btnNumber - 1].parentElement.classList.add('switch-active');
    }
  };

  // проверка на валидность формы

  var makeCheck = function (evt) {
	  evt.preventDefault();
    if (!name.value || !email.value || !message.value) {
	  var widthFeedback = feedback.offsetWidth;
      evt.preventDefault();
	    feedback.classList.remove('modal-error');
	    widthFeedback = feedback.offsetWidth;
      feedback.classList.add('modal-error');
    } else {
      localStorage.setItem("login", name.value);
    }
  };

// открытие и закрытие попапов

  var openPopup = function (evt) {
    var target = evt.target;
    if(evt.keyCode === 13) {
      evt.preventDefault();
      switch (target) {
        case btnContacts:
          openMap(evt);
          break;
        case map:
          openFeedback(evt);
          break;
        case btnCloseFeedback:
          closeFeedback();
          break;
        case btnCloseMap:
          closeMap();
          break;
      }
    }
  };

  var closePopup = function (evt) {
    var target = evt.target;
    if(evt.keyCode === 27) {
      evt.preventDefault();
      closeMap();
      closeFeedback();
      }
  };



  var openMap = function (evt) {
    evt.preventDefault();
    bigMap.classList.add('open-popup');
    btnCloseMap.addEventListener('click', closeMap);
    controlList.removeEventListener('click', switchSlide);
    serviceSwitch.removeEventListener('click', switchSlide);
    map.removeEventListener('click', openMap);
    map.removeEventListener('keydown', openPopup);
    window.addEventListener('keydown', closePopup);
  };

  var closeMap = function () {
    bigMap.classList.remove('open-popup');
    map.addEventListener('click', openMap);
    controlList.addEventListener('click', switchSlide);
    serviceSwitch.addEventListener('click', switchSlide);
    btnCloseMap.removeEventListener('click', closeMap);
    window.removeEventListener('keydown', closePopup);
  };

  var openFeedback = function (evt) {
    evt.preventDefault();
    feedback.classList.add('open-popup');
    name.focus();
    btnCloseFeedback.addEventListener('click', closeFeedback);
	  feedbackForm.addEventListener('submit', makeCheck);
    controlList.removeEventListener('click', switchSlide);
    serviceSwitch.removeEventListener('click', switchSlide);
    btnContacts.removeEventListener('click', openFeedback);
    btnContacts.removeEventListener('keydown', openPopup);
    window.addEventListener('keydown', closePopup);
  };

  var closeFeedback = function () {
    feedback.classList.remove('open-popup');
	  feedback.classList.remove('modal-error');
    btnContacts.addEventListener('click', openFeedback);
    controlList.addEventListener('click', switchSlide);
    serviceSwitch.addEventListener('click', switchSlide);
    btnCloseFeedback.removeEventListener('click', closeFeedback);
	  feedbackForm.removeEventListener('submit', makeCheck);
    window.removeEventListener('keydown', closePopup);
  };

  map.addEventListener('click', openMap);
  map.addEventListener('keydown', openPopup);
  btnContacts.addEventListener('click', openFeedback);
  btnContacts.addEventListener('keydown', openPopup);
  controlList.addEventListener('click', switchSlide);
  serviceSwitch.addEventListener('click', switchSlide);

})();
