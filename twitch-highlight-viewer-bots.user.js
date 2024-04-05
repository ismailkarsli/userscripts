// ==UserScript==
// @name Twitch Highlight Viewer Bots
// @description Highlight bots in viewers list in Twitch (bot data from twitchinsights.net)
// @license MIT
// @author İsmail Karslı <cszn@pm.me> (https://ismail.karsli.net)
// @namespace https://github.com/ismailkarsli
// @homepageURL https://github.com/ismailkarsli/userscripts
// @supportURL https://github.com/ismailkarsli/userscripts/issues
// @updateURL https://raw.githubusercontent.com/ismailkarsli/userscripts/main/twitch-highlight-viewer-bots.user.js
// @version 1.0.0
// @match https://www.twitch.tv/*
// @grant none
// ==/UserScript==

const bots = new Set();
const MutationObserver =
	window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
const observer = new MutationObserver((e) => {
	let chatters = document.querySelectorAll(".chatter-list-item");
	chatters.forEach((chatter) => {
		const username = chatter.querySelector("button.tw-link")?.innerText;
		const isBot = bots.has(username);
		if (isBot) {
			chatter.style.backgroundColor = "red";
		}
	});
});

fetch("https://api.twitchinsights.net/v1/bots/online")
	.then((res) => res.json())
	.then((data) => {
		data?.bots?.forEach((bot) => bot?.[0] && bots.add(bot[0]));
		if (bots.size) {
			observer.observe(document.body, {
				childList: true,
				subtree: true,
			});
		}
	})
	.catch((error) => console.warn("Twitch Highlight Viewer Bots", "Bot list couldn't fetched", error));
