// ==UserScript==
// @name        Hide Amazon ads
// @description Fuck Prime, fuck Jeff Bezos
// @include https://www.amazon.com/*
// ==/UserScript==

setInterval(() => {
  document.querySelectorAll('#ape_Detail_dp-ads-center-promo_Desktop_placement').forEach((elem) => {
    elem.style['display'] = 'none';
  })
  document.querySelectorAll('#ape_Detail_desktop-detail-ilm_desktop_placement').forEach((elem) => {
    elem.style['display'] = 'none';
  })
}, 100);
