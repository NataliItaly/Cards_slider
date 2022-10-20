const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function slidesPluggin(activeSlide) {
  slides[0].classList.add("active");

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

  prevBtn.addEventListener("click", function () {
    clearActiveClasses();
    console.log(activeIndex);
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = slides.length - 1;
    }
    console.log(activeIndex);
    slides[activeIndex].classList.add("active");
  });

  nextBtn.addEventListener("click", function () {
    clearActiveClasses();
    activeIndex++;
    console.log(activeIndex);
    if (activeIndex >= slides.length) {
      activeIndex = 0;
    }
    slides[activeIndex].classList.add("active");
    console.log(activeIndex);
  });
}

slidesPluggin(slides.length - 1);
