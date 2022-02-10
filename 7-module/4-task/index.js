export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
    this.addEventListeners();

    
    this.setValue(value);
    
  }
  addEventListeners () {
    this.elem.addEventListener("click", this.getCoordinates);
  }
  render () {
    this.elem = document.createElement("div");
    this.elem.classList.add("slider");
    let sliThumb = document.createElement("div");
    sliThumb.classList.add("slider__thumb");
    sliThumb.setAttribute('id', 'slideThumb');

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
      slidSteps.appendChild(step);
    }
    this.elem.appendChild(slidSteps);

  
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
  
  
}
// this.elem.querySelector('.slider__thumb').onpointerdown = function(event) {
      
//   this.elem.querySelector(".slider__thumb").classList.remove("slider");
//   this.elem.classList.add("slider_dragging");
//   let shiftX = event.clientX - this.elem.querySelector(".slider__thumb").getBoundingClientRect().left;
//   let shiftY = event.clientY - this.elem.querySelector(".slider__thumb").getBoundingClientRect().top;
//   this.elem.querySelector(".slider__thumb").style.position = 'absolute';
//   this.elem.querySelector(".slider__thumb").style.zIndex = 1000;
//   document.body.append(ball);

//   moveAt(event.pageX, event.pageY);

//   // переносит мяч на координаты (pageX, pageY),
//   // дополнительно учитывая изначальный сдвиг относительно указателя мыши
//   function moveAt(pageX, pageY) {
//     this.elem.querySelector(".slider__thumb").style.left = pageX - shiftX + 'px';
//     this.elem.querySelector(".slider__thumb").style.top = pageY - shiftY + 'px';
    
//   }

//   function 	onpointermove(event) {
//     moveAt(event.pageX, event.pageY);
//     this.elem.querySelector(".slider__thumb").hidden = true;
//     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//     this.elem.querySelector(".slider__thumb").hidden = false;

//     // событие mousemove может произойти и когда указатель за пределами окна
//     // (мяч перетащили за пределы экрана)

//     // если clientX/clientY за пределами окна, elementFromPoint вернёт null
//     if (!elemBelow) {return;}

//     // потенциальные цели переноса помечены классом droppable (может быть и другая логика)
//     let droppableBelow = elemBelow.closest('.droppable');

//     if (currentDroppable != droppableBelow) {
//       // мы либо залетаем на цель, либо улетаем из неё
//       // внимание: оба значения могут быть null
//       //   currentDroppable=null,
//       //     если мы были не над droppable до этого события (например, над пустым пространством)
//       //   droppableBelow=null,
//       //     если мы не над droppable именно сейчас, во время этого события

//       if (currentDroppable) {
//         // логика обработки процесса "вылета" из droppable (удаляем подсветку)
//         leaveDroppable(currentDroppable);
//       }
//       currentDroppable = droppableBelow;
//       if (currentDroppable) {
//         // логика обработки процесса, когда мы "влетаем" в элемент droppable
//         enterDroppable(currentDroppable);
//       }
//     }
//   }

//   // передвигаем мяч при событии mousemove
//   document.addEventListener('pointermove', onpointermove);

//   // отпустить мяч, удалить ненужные обработчики
//   this.elem.querySelector(".slider__thumb").onpointerup = function() {
//     document.removeEventListener('onpointermove', onpointermove);
//     this.elem.querySelector(".slider__thumb").onpointerup = null;
//   };

// };

// this.elem.querySelector('.slider__thumb').ondragstart = function() {
  
//   return false;
// };