// ==UserScript==
// @name i.imgur.com gifv to mp4
// @description Redirect i.imgur.com gifv links to mp4 videos with controls
// @license MIT
// @author İsmail Karslı <cszn@pm.me> (https://ismail.karsli.net)
// @namespace https://github.com/ismailkarsli
// @homepageURL https://github.com/ismailkarsli/userscripts
// @supportURL https://github.com/ismailkarsli/userscripts/issues
// @updateURL https://raw.githubusercontent.com/ismailkarsli/userscripts/main/i.imgur.com-gifv-to-mp4.user.js
// @version 1.0.1
// @match https://i.imgur.com/*.gifv
// @grant none
// @run-at document-start
// ==/UserScript==

window.location.replace(window.location.href.replace("gifv", "mp4"));
