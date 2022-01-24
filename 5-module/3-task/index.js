function initCarousel() {
  // ваш код...
  // get initial data for moving slides in the carousel block
  let totalSlides = document.getElementsByClassName("carousel__slide").length;
  let counterSlides = 1;
  
  let innerCarousel = document.querySelector(".carousel__inner");
  let currentCoordinates = 0; 
  let slideWidth = document.querySelector(".carousel__slide").offsetWidth;

  let rightArrow = document.querySelector(".carousel__arrow_right");
  let leftArrow = document.querySelector(".carousel__arrow_left");
 
  //checks the slide counter and sets display attribute as none or visible for arrows
  function disableArrows() {
    if (counterSlides === totalSlides) {
      rightArrow.style.display = `none`;
    } else if (counterSlides === 1) {
      leftArrow.style.display = `none`;
    }

    if (counterSlides > 1) {
      leftArrow.style.display = ``;
    } else if (counterSlides < totalSlides) {
      rightArrow.style.display = ``;
    }
  }
  disableArrows();
  // move to the left via addition of  currentCoordinates of x  and width of slide 
  function moveRight() {
    currentCoordinates = currentCoordinates + slideWidth;
    innerCarousel.style.transform = `translateX(-${currentCoordinates}px)`;
    ++counterSlides;
    disableArrows();
  }
    
  // move to the right via substraction of currentCoordinates of x  and width of slide 
  function moveLeft() {
    currentCoordinates = currentCoordinates - slideWidth;
    innerCarousel.style.transform = `translateX(-${currentCoordinates}px)`;
    --counterSlides;
    disableArrows();
  }
  rightArrow.addEventListener("click", moveRight);
  leftArrow.addEventListener("click", moveLeft);

  
}
