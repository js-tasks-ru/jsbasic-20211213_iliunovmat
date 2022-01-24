import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this._product = product;
    this._productCard = createElement(
      `<div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this._product.image}" class="card__image" alt="product">
          <span class="card__price">€${this._product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this._product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
  </div>`);
    let eventCustom = new CustomEvent("product-add", { 
      detail: this._product.id, 
      bubbles: true 
    });
    this.elem.addEventListener("click", function() {
      this.dispatchEvent(eventCustom);
    });
  }
  get elem() {
    return this._productCard;
  }
  
 
}
