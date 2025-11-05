// ==UserScript==
// @name        Hide reddit ads
// @description Hide 'em!! They're videos now!
// @include https://www.reddit.com/*
// ==/UserScript==

setInterval(() => {
  document.querySelectorAll('shreddit-ad-post').forEach((elem) => {
    elem.style['display'] = 'none';
  })
}, 100);
