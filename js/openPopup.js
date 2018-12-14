// файл backend.js
'use strict';

(function () {

  var contacts = document.querySelector('.contacts');
  var map = contacts.querySelector('.small-map');
  var btnContacts = contacts.querySelector('.btn-contacts');
  window.feedback = document.querySelector('.feedback');
  var btnCloseFeedback = window.feedback.querySelector('.feedback-close');
  var name = window.feedback.querySelector('[name=name]');
  var bigMap = document.querySelector('.big-map');
  var btnCloseMap = bigMap.querySelector('.btn-big-map');

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
  }

  var closeMap = function () {
    bigMap.classList.remove('open-popup');
    map.addEventListener('click', openMap);
    btnCloseMap.removeEventListener('click', closeMap);
    window.removeEventListener('keydown', closePopup);
  }

  var openFeedback = function (evt) {
    evt.preventDefault();
    feedback.classList.add('open-popup');
    name.focus();
    btnCloseFeedback.addEventListener('click', closeFeedback);
    btnContacts.removeEventListener('click', openFeedback);
    btnContacts.removeEventListener('keydown', openPopup);
    window.addEventListener('keydown', closePopup);
  }

  var closeFeedback = function () {
    feedback.classList.remove('open-popup');
    btnContacts.addEventListener('click', openFeedback);
    btnCloseFeedback.removeEventListener('click', closeFeedback);
    window.removeEventListener('keydown', closePopup);
  }

  map.addEventListener('click', openMap);
  map.addEventListener('keydown', openPopup);
  btnContacts.addEventListener('click', openFeedback);
  btnContacts.addEventListener('keydown', openPopup);

})();
