import { url } from "./api/url.js";

const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const mediumScreen = window.matchMedia("(min-width: 700px");
const largeScreen = window.matchMedia("(min-width: 1000px");

export async function renderSlider() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    slider.innerHTML = "";

    results.forEach(function (slide) {
      slider.innerHTML += `<li class="card-wrapper"> <a href="blog-post.html?id=${slide.id}" class="card-slide">
                                      <div class="slide-title">
                                      <h3>${slide.title.rendered}</h3>
                                      </div>
                                      <div class="card-image">
                                      <img src= "${slide.fimg_url}" />
                                      </div>
                                      </a>
                                      </li>`;
    });

    handleButtonOnClick();
  } catch (error) {
    console.log(error);
  }
}

renderSlider();

const handleButtonOnClick = () => {
  const cardSlide = document.querySelector(".card-wrapper");

  nextButton.addEventListener("click", () => {
    const slideWidth = cardSlide.clientWidth;
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
    const slideWidth = cardSlide.clientWidth;
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
