"use strict";!function(){var a=5e3/110,b=document.querySelector(".min-max"),c=b.clientWidth,d=b.querySelector(".min"),e=b.querySelector(".max"),f=b.querySelector(".line-green"),g=b.querySelector('input[name="min"]'),h=b.querySelector('input[name="max"]'),i=function(b,c,i){switch(b.style.left=i+"px",f.style.width=e.offsetLeft-d.offsetLeft+"px",b.className){case"min":c.textContent="\u043e\u0442 "+Math.round(i*a),g.value=Math.round(i*a),f.style.marginLeft=i+"px";break;case"max":c.textContent="\u0434\u043e "+Math.round(i*a),h.value=Math.round(i*a)}},j=function(a){a.preventDefault();var b=a.target,f=b.firstElementChild,g=null,h=a.clientX,j=function(a){a.preventDefault();var j=h-a.clientX;switch(h=a.clientX,g=b.offsetLeft-j,b.className){case"min":d.style.zIndex=10,g<0?g=0:g>e.offsetLeft&&(g=e.offsetLeft),i(b,f,g);break;case"max":d.style.zIndex=0,g<d.offsetLeft?g=d.offsetLeft:g>c&&(g=c),i(b,f,g)}},k=function(a){a.preventDefault(),document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",j),document.addEventListener("mouseup",k)};d.addEventListener("mousedown",j),e.addEventListener("mousedown",j)}();