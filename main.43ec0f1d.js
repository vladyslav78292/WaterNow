parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".slider"),t=document.querySelector(".trail").querySelectorAll("div"),n=0,c=0,o=4002220,r=function e(t){clearInterval(f),"increase"===t?i():a(),s(n,c),l(),f=setInterval(function(){return e("increase")},o)},i=function(){t.forEach(function(e){return e.classList.remove("active")}),80===n?n=0:n+=20,d()},a=function(){t.forEach(function(e){return e.classList.remove("active")}),0===n?n=80:n-=20,d()},s=function(n,c){e.style.transform="translateX(-".concat(n,"%)"),t[c].classList.add("active")},u=gsap.timeline({defaults:{duration:.6,ease:"power2.inOut"}});u.from(".bg",{x:"-100%",opacity:0}).from(".details",{opacity:0},"-=0.3").from("button",{opacity:0,y:"-40px"},"-=0.8");var l=function(){return u.restart()},d=function(){c=0===n?0:20===n?1:40===n?2:60===n?3:4},f=setInterval(function(){return r("increase")},o);document.querySelectorAll("svg").forEach(function(e){e.addEventListener("click",function(){return e.classList.contains("next")?r("increase"):r("decrease")})});var v=function(e){clearInterval(f),t.forEach(function(e){return e.classList.remove("active")});var i=e.target;i.classList.add("active"),n=i.classList.contains("box1")?0:i.classList.contains("box2")?20:i.classList.contains("box3")?40:i.classList.contains("box4")?60:80,d(),s(n,c),l(),f=setInterval(function(){return r("increase")},o)};t.forEach(function(e){return e.addEventListener("click",function(e){return v(e)})});var p=function(){var n,c,o,i;e.addEventListener("touchstart",function(c){n=c.touches[0].clientX,i=e.clientWidth/t.length}),e.addEventListener("touchmove",function(e){e.preventDefault(),c=e.touches[0].clientX,o=n-c});e.addEventListener("touchend",function(e){o>i/4&&r("increase"),-1*o>i/4&&r("decrease"),n=0,c=0,o=0,i=0})}(),m=document.querySelector(".feedback__slider"),h=300;function y(e){if(!e)return!1;m.style.height="".concat(e+h,"px")}if(m){y(m.querySelector(".feedback__item").offsetHeight);var L=new Swiper(m,{direction:"vertical",slidesPerView:"auto",autoHeight:!0,centeredSlides:!0,spaceBetween:30,grabCursor:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});L.on("slideChange",function(){setTimeout(function(){y(L.slides[L.activeIndex].offsetHeight)},300)})}var b=window.scrollY,g=document.querySelector("header"),E=g.offsetHeight,w=function(){return g.classList.add("header__background")},x=function(){return g.classList.remove("header__background")};window.addEventListener("scroll",function(){(b=window.scrollY)>=E?w():x()});var S=document.querySelectorAll(".cookie-popup__button"),k=document.getElementById("cookie-popup");S.forEach(function(e){e.addEventListener("click",function(){k.style="bottom: -220px"})}),setTimeout(function(){document.querySelector("#cookie-popup").style="bottom: 30px; opacity: 1;"},1e3);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.43ec0f1d.js.map