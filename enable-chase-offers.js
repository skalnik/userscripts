// ==UserScript==
// @name        Enable All Chase Offers
// @description With one click, enable every offer available for your Chase credit card
// @match       https://secure.chase.com/web/auth/dashboard*
// ==/UserScript==

var button = document.createElement('button');
button.innerText = "Click All";
button.setAttribute("style", "width:300px; height:50px; background: #111; color: #ddd; position:fixed; top:110px; z-index:420; left:100px;");
button.addEventListener("click", clickAllOffers)

document.body.appendChild(button);

function clickAllOffers() {
  document.querySelectorAll('div[data-testid=commerce-tile]').forEach(offer => {
    if(offer.querySelector('div[data-testid=offer-tile-alert-container-success]')) {
      return
    } else {
      offer.click()
    }
  })
}
