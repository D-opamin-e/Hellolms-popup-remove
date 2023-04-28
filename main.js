// ==UserScript==
// @name Popup remover
// @namespace yourNamespace
// @version 1.0
// @description Remove popup elements from Kyungnam Cyber University website
// @match https://cyber.kyungnam.ac.kr/*
// @grant none
// ==/UserScript==

(function() {
'use strict';
let popupNotices = document.querySelectorAll('[class^="popup_notice"]'); //클래스 이름에 popup_notice가 들어가고 
for(let i = 0; i < popupNotices.length; i++){ //뒤에 숫자가 붙어있는 popup_notice까지 차단 대상
popupNotices[i].style.display = "none";
}
})();
