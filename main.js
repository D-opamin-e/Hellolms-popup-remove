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
let popupNotices = document.querySelectorAll('[class^="popup_notice"]');
for(let i = 0; i < popupNotices.length; i++){
popupNotices[i].style.display = "none";
}
})();