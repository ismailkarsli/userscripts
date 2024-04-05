// ==UserScript==
// @name Twitch Highlight Bots
// @description Highlight bots in Twitch (bot data from twitchinsights.net)
// @license MIT
// @author İsmail Karslı <cszn@pm.me> (https://ismail.karsli.net)
// @namespace https://github.com/ismailkarsli
// @homepageURL https://github.com/ismailkarsli/userscripts
// @supportURL https://github.com/ismailkarsli/userscripts/issues
// @updateURL https://raw.githubusercontent.com/ismailkarsli/userscripts/main/twitch-highlight-bots.user.js
// @version 1.0.1
// @match https://www.twitch.tv/*
// @grant none
// ==/UserScript==

const bots = new Set();
const MutationObserver =
    window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
const observer = new MutationObserver((mutations, observer) => {
    for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
            if (!addedNode?.classList?.contains("chat-line__message") && !addedNode?.classList?.contains("seventv-message")) continue;
            const username = (addedNode.querySelector(".chat-author__display-name") || addedNode.querySelector(".seventv-chat-user-username"))?.innerText;
            if (!username) continue;
            const isBot = bots.has(username.toLowerCase());
            if (isBot) {
                addedNode.style.backgroundColor = "#df272752"
            }

        }
    }
});

fetch("https://api.twitchinsights.net/v1/bots/all")
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
    .catch((error) => console.warn("Twitch Highlight Bots", "Bot list couldn't fetched", error));
