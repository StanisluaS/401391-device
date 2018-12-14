// файл backend.js
'use strict';

(function () {

  var feedbackForm = window.feedback.querySelector('.feedback-form');
  var name = feedbackForm.querySelector('[name=name]');
  var email = feedbackForm.querySelector('[name=email]');
  var message = feedbackForm.querySelector('[name=message]');

  feedbackForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!name.value || !email.value || !message.value) {
      evt.preventDefault();
      window.feedback.classList.add('modal-error');
    } else {
      localStorage.setItem("login", name.value);
    }
  })

})();
