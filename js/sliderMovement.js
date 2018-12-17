// файл switchSlide.js
'use strict';

(function () {

 var FACTOR = 5000 / 110;
 var cost = document.querySelector('.min-max');
 var costWidth = cost.clientWidth;
 var min = cost.querySelector('.min');
 var max = cost.querySelector('.max');
 var lineGreen = cost.querySelector('.line-green');
 var inputMin = cost.querySelector('input[name="min"]');
 var inputMax = cost.querySelector('input[name="max"]');

 var setRangeValue = function (target, element, val) {
   target.style.left = val + 'px';
   lineGreen.style.width = (max.offsetLeft - min.offsetLeft) + 'px';
   switch (target.className) {
     case 'min':
       element.textContent = 'от ' + Math.round(val * FACTOR);
       inputMin.value = Math.round(val * FACTOR);
       lineGreen.style.marginLeft = val + 'px';
       break;
     case 'max':
       element.textContent = 'до ' + Math.round(val * FACTOR);
       inputMax.value = Math.round(val * FACTOR);
       break;
   }
 };

 var onMouseDownPinDrag = function (evt) {
  evt.preventDefault();
  var target = evt.target;
  var el = target.firstElementChild;  
  var result = null;
  var startCoords = evt.clientX;

  var onMouseMove = function (moveEvt) {
  moveEvt.preventDefault();

  var shift = startCoords - moveEvt.clientX;

  startCoords = moveEvt.clientX;

  result = target.offsetLeft - shift;

  switch (target.className) {
    case 'min':
    min.style.zIndex = 10;

    if (result < 0) {
      result = 0;
    } else if (result > max.offsetLeft) {
      result = max.offsetLeft;
    }
      setRangeValue(target, el, result);
      break;
    case 'max':
    min.style.zIndex = 0;

    if (result < min.offsetLeft) {
      result = min.offsetLeft;
    } else if (result > costWidth) {
      result = costWidth;
    }
      setRangeValue(target, el, result);
      break;
  }
};

var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};

min.addEventListener('mousedown', onMouseDownPinDrag);
max.addEventListener('mousedown', onMouseDownPinDrag);

})();
