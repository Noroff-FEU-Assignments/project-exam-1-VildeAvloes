import { url } from "./constants/url.js";

const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const mediumScreen = window.matchMedia("(min-width: 700px");
const largeScreen = window.matchMedia("(min-width: 1000px");

renderSlider();
async function renderSlider() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    slider.innerHTML = "";

    handleDisabledButton();
    results.forEach(function (slide) {
      slider.innerHTML += `<li class="card-wrapper">
                              <a href="blog-post.html?id=${slide.id}" class="card-slide">
                                <div class="slide-title">
                                  <h3>${slide.title.rendered}</h3>
                                  </div>
                                  <div class="card-image">
                                  <img src= "${slide.fimg_url}" alt=""/>
                                </div>
                              </a>
                            </li>`;
    });

    handleButtonOnClick();
  } catch (error) {
    console.log(error);
  }
}

const handleButtonOnClick = () => {
  const cardSlide = document.querySelector(".card-wrapper");
  const slideWidth = cardSlide.clientWidth;

  nextButton.addEventListener("click", () => {
    if (mediumScreen.matches) {
      slider.scrollLeft += slideWidth * 2;
    }
    if (largeScreen.matches) {
      slider.scrollLeft += slideWidth * 3;
    } else {
      slider.scrollLeft += slideWidth;
    }
  });
  prevButton.addEventListener("click", () => {
    if (mediumScreen.matches) {
      slider.scrollLeft -= slideWidth * 2;
    }
    if (largeScreen.matches) {
      slider.scrollLeft -= slideWidth * 3;
    } else {
      slider.scrollLeft -= slideWidth;
    }
  });
};

const handleDisabledButton = () => {
  slider.addEventListener("scroll", () => {
    if (slider.scrollLeft <= "10") {
      prevButton.classList.add("disabled");
      prevButton.disabled = true;
    }
    if (slider.scrollLeft >= "10") {
      prevButton.classList.remove("disabled");
      prevButton.disabled = false;
    }
    if (slider.scrollLeft >= "3500") {
      nextButton.classList.add("disabled");
      nextButton.disabled = true;
    }
    if (slider.scrollLeft <= "3500") {
      nextButton.classList.remove("disabled");
      nextButton.disabled = false;
    }
    if (mediumScreen.matches) {
      if (slider.scrollLeft >= "3250") {
        nextButton.classList.add("disabled");
        nextButton.disabled = true;
      }
      if (slider.scrollLeft <= "3250") {
        nextButton.classList.remove("disabled");
        nextButton.disabled = false;
      }
    }
    if (largeScreen.matches) {
      if (slider.scrollLeft >= "3000") {
        nextButton.classList.add("disabled");
        nextButton.disabled = true;
      }
      if (slider.scrollLeft <= "3000") {
        nextButton.classList.remove("disabled");
        nextButton.disabled = false;
      }
    }
  });
};
