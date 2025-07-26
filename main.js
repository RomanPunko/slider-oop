class Slider {
  constructor({ btnPreviousClass, btnNextClass, dotsClass, imgClass }) {
    this.index = 0;

    this.btnPrevious = document.querySelector(btnPreviousClass);
    this.btnNext = document.querySelector(btnNextClass);
    this.image = document.querySelectorAll(imgClass);
    this.dots = document.querySelectorAll(dotsClass);

    this.slide();
    this.initListeners();
    this.switchingInterval();
  }

  nextSlide() {
    this.hideSlide();

    this.index++;

    if (this.index >= this.image.length) {
      this.index = 0;
    }

    this.slide();
  }

  previousSlide() {
    this.hideSlide();

    this.index--;

    if (this.index < 0) {
      this.index = this.image.length - 1;
    }

    this.slide();
  }

  slide() {
    this.image[this.index].classList.add("img-visible");
    this.dots[this.index].classList.add("active-input");
  }

  hideSlide() {
    this.image[this.index].classList.remove("img-visible");
    this.dots[this.index].classList.remove("active-input");
  }

  initListeners() {
    this.btnNext.addEventListener("click", this.nextSlide.bind(this));
    this.btnPrevious.addEventListener("click", this.previousSlide.bind(this));

    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        this.hideSlide();
        this.index = dot.getAttribute("data-index");
        this.slide();
      });
    });
  }

  switchingInterval() {
    this.interval = setInterval(() => this.nextSlide(), 5000);
  }
}

let slider = new Slider({
  btnPreviousClass: ".btn-left",
  btnNextClass: ".btn-right",
  dotsClass: ".dot",
  imgClass: ".img",
});
