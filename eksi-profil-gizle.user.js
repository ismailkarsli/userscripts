// ==UserScript==
// @name eksi profil gizle
// @description eksi profil fotograflarini gizle
// @license MIT
// @author İsmail Karslı <cszn@pm.me> (https://ismail.karsli.net)
// @namespace https://github.com/ismailkarsli
// @homepageURL https://github.com/ismailkarsli/userscripts
// @supportURL https://github.com/ismailkarsli/userscripts/issues
// @updateURL https://raw.githubusercontent.com/ismailkarsli/userscripts/main/eksi-profil-gizle.user.js
// @version 1.0.0
// @match https://eksisozluk*.com/*
// @grant GM_addStyle
// @run-at document-start
// ==/UserScript==

GM_addStyle(`
  .avatar-container, .entry-share { display: none !important }
	.feedback-container { width: inherit !important; }
	.entry-footer-bottom .footer-info { display: flex; flex-direction: row-reverse; }
	ul#entry-item-list > li { padding-bottom: 40px !important }
	#subscriber-badge-entry { display: none !important }
`);
