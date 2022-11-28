"use strict";function _createForOfIteratorHelper(e,t){var r,n,a,i,o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(o)return n=!(r=!0),{s:function(){o=o.call(e)},n:function(){var e=o.next();return r=e.done,e},e:function(e){n=!0,a=e},f:function(){try{r||null==o.return||o.return()}finally{if(n)throw a}}};if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return o&&(e=o),i=0,{s:t=function(){},n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function pageLock(e){var t=document.querySelector("body");t.classList.contains("_lock")?setTimeout(function(){t.classList.remove("_lock")},e):t.classList.add("_lock")}var _step,burgerMenu=document.querySelector("._burger-icon"),hideMenu=document.querySelector("._hide-menu"),validateEmail=(burgerMenu&&burgerMenu.addEventListener("click",function(e){burgerMenu.classList.toggle("_active"),hideMenu.classList.toggle("_active"),pageLock(500)}),function(e){return e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}),validate=function(){var e=emailInput.value;return emailInput.parentElement.classList.remove("_novalid"),emailInput.parentElement.classList.remove("_valid"),validateEmail(e)?emailInput.parentElement.classList.add("_valid"):emailInput.parentElement.classList.add("_novalid"),!1},formInputs=document.querySelectorAll("._input"),_iterator=_createForOfIteratorHelper(formInputs);try{var _loop=function(){var e=_step.value,t=e.getAttribute("data-placeholder");e.value=t,e.addEventListener("focus",function(e){this.value==t&&(this.value=""),this.classList.add("_focus"),this.parentElement.classList.add("_focus")}),e.addEventListener("blur",function(e){""==this.value?(this.value=t,this.classList.remove("_fill"),this.parentElement.classList.remove("_fill")):""!=this.value&&(this.classList.add("_fill"),this.parentElement.classList.add("_fill")),this.classList.remove("_focus"),this.parentElement.classList.remove("_focus")})};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}var emailInput=document.querySelector("._email"),sendForm=(emailInput.addEventListener("input",validate),emailInput.addEventListener("blur",function(e){""==emailInput.value&&emailInput.parentElement.classList.remove("_novalid")}),document.getElementById("send-form")),sendButton=sendForm.querySelector(".form__button");sendForm.addEventListener("submit",function(e){e.preventDefault();e=this.querySelector("span").getAttribute("m-success");sendButton.querySelector("span").innerHTML=e,sendButton.classList.add("_success")});