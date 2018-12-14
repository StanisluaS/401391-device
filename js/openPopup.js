// файл openPopup.js
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

  var openPopup = function (evt) {
    var target = evt.target;
    if(evt.keyCode === 13) {
      // evt.preventDefault();
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
    map.removeEventListener('click', openMap);
    map.removeEventListener('keydown', openPopup);
    window.addEventListener('keydown', closePopup);
  };

  var closeMap = function () {
    bigMap.classList.remove('open-popup');
    map.addEventListener('click', openMap);
    btnCloseMap.removeEventListener('click', closeMap);
    window.removeEventListener('keydown', closePopup);
  };

  var openFeedback = function (evt) {
    evt.preventDefault();
    feedback.classList.add('open-popup');
    name.focus();
    btnCloseFeedback.addEventListener('click', closeFeedback);
	feedbackForm.addEventListener('submit', makeCheck);
    btnContacts.removeEventListener('click', openFeedback);
    btnContacts.removeEventListener('keydown', openPopup);
    window.addEventListener('keydown', closePopup);
  };

  var closeFeedback = function () {
    feedback.classList.remove('open-popup');
	feedback.classList.remove('modal-error');	
    btnContacts.addEventListener('click', openFeedback);
    btnCloseFeedback.removeEventListener('click', closeFeedback);
	feedbackForm.removeEventListener('submit', makeCheck);
    window.removeEventListener('keydown', closePopup);
  };

  map.addEventListener('click', openMap);
  map.addEventListener('keydown', openPopup);
  btnContacts.addEventListener('click', openFeedback);
  btnContacts.addEventListener('keydown', openPopup);

})();
