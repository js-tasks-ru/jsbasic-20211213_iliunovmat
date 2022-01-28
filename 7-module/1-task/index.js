import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.ribbonMenu = createElement(
      ` <!--Корневой элемент RibbonMenu-->
      <div class="ribbon">
        <!--Кнопка прокрутки влево-->
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
    
        <!--Ссылки на категории-->
        <nav class="ribbon__inner">
        </nav>
    
        <!--Кнопка прокрутки вправо-->
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>`
    );
    //create chips of menu
    for (let i = 0; i < this.categories.length; i++) {
      this.menuChip = createElement(
        `<a href="#" class="ribbon__item" data-id="${this.categories[i].id}">${this.categories[i].name}</a>`
      );
      this.ribbonMenu.querySelector(".ribbon__inner").appendChild(this.menuChip);
    }
    //check default position of slide and put left arrow as not visible
    if (this.ribbonMenu.querySelector(".ribbon__arrow_left").scrollLeft == 0) {
      this.ribbonMenu.querySelector(".ribbon__arrow_left").classList.remove("ribbon__arrow_visible");
    } else if (this.ribbonMenu.querySelector(".ribbon__arrow_left").scrollLeft > 0) {
      this.ribbonMenu.querySelector(".ribbon__arrow_left").classList.add("ribbon__arrow_visible");
    } 
    //click to right or to the left
    this.ribbonMenu.querySelector(".ribbon__arrow_right").addEventListener("click", this.moveRight);
    this.ribbonMenu.querySelector(".ribbon__arrow_left").addEventListener("click", this.moveLeft);
    
    let nav = this.ribbonMenu.querySelector(".ribbon__inner"); 
    //add listeners for each menu chip
    nav.querySelectorAll(".ribbon__item").forEach(item => {
      item.addEventListener("click", function(e) {
        //remove attr from all elements
        nav.querySelectorAll(".ribbon__item").forEach(item1 => {
          item1.classList.remove("ribbon__item_active");
        });
        //add active attr to the current element
        e.target.classList.add("ribbon__item_active");

        let custEvent = new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
          detail: e.target.dataset.id, // уникальный идентификатора категории из её объекта
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        
        e.preventDefault();
        e.target.dispatchEvent(custEvent);
      });
    });
  }
  moveRight() {
    let ribbonInner = document.querySelector(".ribbon__inner");
    ribbonInner.scrollBy(350, 0);
    
    let scrollWidth = ribbonInner.scrollWidth;
    let scrollLeft = ribbonInner.scrollLeft;
    let clientWidth = ribbonInner.clientWidth;

    let scrollRight = scrollWidth - scrollLeft - clientWidth; 
    //set or remove attr visible from arrows 
    if (scrollRight < 1) {
      document.querySelector(".ribbon__arrow_right").classList.remove("ribbon__arrow_visible");
    } else if (scrollRight > 1) {
      document.querySelector(".ribbon__arrow_right").classList.add("ribbon__arrow_visible");
    }
  }

  moveLeft() {
    document.querySelector(".ribbon__inner").scrollBy(-350, 0);
    let scrollLeft = document.querySelector(".ribbon__inner").scrollLeft;
    
    if (scrollLeft < 1) {
      document.querySelector(".ribbon__arrow_left").classList.remove("ribbon__arrow_visible");
    } else if (scrollLeft > 1) {
      document.querySelector(".ribbon__arrow_left").classList.add("ribbon__arrow_visible");
    }
  }
  get elem() {
    return this.ribbonMenu;
  }
}
