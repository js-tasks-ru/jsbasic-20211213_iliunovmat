
function hideSelf() {
  // ваш код...
  for (let elm of document.body.children) {
    if (elm.matches('button[class="hide-self-button"]')) {
      if (elm != undefined) {
        if (!elm.hidden) {
          elm.hidden = true;
        }
      }
    }
  }
}

