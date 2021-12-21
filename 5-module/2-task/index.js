function toggleText() {
  // ваш код...
  let btn;
  let txt = document.getElementById("text");
  for (let elm of document.body.children) {
    if (elm.matches('button[class="toggle-text-button"]')) {
      btn = elm;
      break;
    }
  }
  btn.addEventListener("click", function() {
    if (txt.hidden === true) {
      txt.hidden = false;
    } else if (txt.hidden === false) {
      txt.hidden = true;
    }
  });
 
}
