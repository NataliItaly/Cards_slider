const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const body = document.querySelector("body");

function slidesPluggin(activeSlide) {
  slides[activeSlide].classList.add("active");

  let activeIndex = activeSlide;

  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("click", () => {
      clearActiveClasses();
      slides[i].classList.add("active");
      activeIndex = i;
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => slide.classList.remove("active"));
  }

  function prevSlide() {
    clearActiveClasses();
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = slides.length - 1;
    }
    slides[activeIndex].classList.add("active");
  }

  function nextSlide() {
    clearActiveClasses();
    activeIndex++;
    if (activeIndex >= slides.length) {
      activeIndex = 0;
    }
    slides[activeIndex].classList.add("active");
  }

  prevBtn.addEventListener("click", prevSlide);

  nextBtn.addEventListener("click", nextSlide);

  document.addEventListener("keydown", function (event) {
    if (body.offsetWidth > 440) {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    } else if (body.offsetWidth <= 440) {
      if (event.key === "ArrowDown") {
        nextSlide();
      } else if (event.key === "ArrowUp") {
        prevSlide();
      }
    }
  });
}

slidesPluggin(0);
