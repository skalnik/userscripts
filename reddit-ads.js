// ==UserScript==
// @name        Hide reddit ads
// @description Hide 'em!! They're videos now!
// @include https://www.reddit.com/*
// ==/UserScript==

setInterval(() => {
  const selectors = [
    'shreddit-comment-tree-ad',
    'shreddit-dynamic-ad-link',
    'shreddit-sidebar-ad'
  ]

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((elem) => {
      elem.style['display'] = 'none';
    })
  })
}, 100);
