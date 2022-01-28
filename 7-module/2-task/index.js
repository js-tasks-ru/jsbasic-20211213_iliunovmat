import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() { 
    this.modalWindow = createElement(
      ` <!--Корневой элемент Modal-->
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
    
        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
    
            <h3 class="modal__title">
            </h3>
          </div>
    
          <div class="modal__body">
           
          </div>
        </div>
    
      </div>
      `
    );
    this.modalWindow.querySelector(".modal__close").addEventListener("click", this.close);
    document.addEventListener('keydown', function(event) {
      if (event.code == 'Escape') {
        if (document.body.querySelector(".modal") !== null) {
          document.body.classList.remove(`is-modal-open`);
          document.body.querySelector(".modal").remove();
        }
        
      }
    });
  }

  open () {
    document.body.classList.add(`is-modal-open`);
    document.body.appendChild(this.modalWindow);

  }

  close () {
    document.body.classList.remove(`is-modal-open`);
    document.body.querySelector(".modal").remove();
  }

  setTitle (modalTitle) {
    let header = this.modalWindow.querySelector(".modal__header");
    header.querySelector(".modal__title").innerHTML = modalTitle;
    
  }

  setBody (node) {
    let body = this.modalWindow.querySelector(".modal__body");
    body.appendChild(node);
  }
}
