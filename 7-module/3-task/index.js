export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
    this.setValue(value);
    
    
    this.elem.addEventListener("click", this.getCoordinates);
  }
  getCoordinates = (e) => {
    
    let left = e.clientX - document.body.querySelector(".slider").getBoundingClientRect().left; 
    let leftRelative = left / document.body.querySelector(".slider").offsetWidth;
    let approximateValue = leftRelative * this.segments;
    let value = Math.round(approximateValue);
    this.setValue(value);
    let valuePercents = value / this.segments * 100;
    this.moveThumb(valuePercents);
    this.setActive();
    let customEv = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
      detail: this.value, // значение 0, 1, 2, 3, 4
      bubbles: true // событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(customEv);

  }
  setActive() {
    if (this.elem.querySelector(".slider__step-active")) {
      this.elem.querySelector(".slider__step-active")
        .classList.remove("slider__step-active");
    } else {
      this.elem.querySelector(".slider__steps")
        .children[this.value].classList.add("slider__step-active");
    }
  }
  moveThumb(percentage) {
    this.elem.querySelector(".slider__thumb").style.left = percentage + "%";
    this.elem.querySelector(".slider__progress").style.width = percentage + "%";
  }
  setValue(value) {
    this.value = value;
    this.elem.querySelector(".slider__value").innerHTML = value;
    this.setActive();
  }
  
  render () {
    this.elem = document.createElement("div");
    this.elem.classList.add("slider");
    let sliThumb = document.createElement("div");
    sliThumb.classList.add("slider__thumb");
    

    let slidValue = document.createElement("span");
    slidValue.classList.add("slider__value");
    
    sliThumb.appendChild(slidValue);
    this.elem.appendChild(sliThumb);

    let slidProgr = document.createElement("div");
    slidProgr.classList.add("slider__progress");
    slidProgr.style.width = `0%`;
    
    this.elem.appendChild(slidProgr);

    let slidSteps = document.createElement("div");
    slidSteps.classList.add("slider__steps");
    for (let i = 0; i < this.steps; i++) {
      let step = document.createElement("span");
      // if (i === 0) {
      //   step.classList.add("slider__step-active");
      // }
      slidSteps.appendChild(step);
    }
    this.elem.appendChild(slidSteps);

  
  }
  

}
