import { url } from "./api/url.js";

const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

async function renderSlider() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    slider.innerHTML = "";

    results.forEach(function (slide) {
      slider.innerHTML += `<li> <a href="blog-post.html?id=${slide.id}" class="card-slide">
                                      <div class="slide-title">
                                      <h3>${slide.title.rendered}</h3>
                                      </div>
                                      <div class="slide-image">
                                      <img src= "${slide.fimg_url}" />
                                      </div>
                                      </a>
                                      </li>`;
    });

    const slide = document.querySelectorAll(".slide");
  } catch (error) {
    console.log(error);
  }
}

renderSlider();

// results.forEach(function (slide) {
//     slider.innerHTML += `<li> <a href="blog-post.html?id=${slide.id}" class="slide">
//                                     <div>
//                                     <h3>${slide.title.rendered}</h3>
//                                     </div>
//                                     <div class="featured-image">
//                                     <img src= "${slide.fimg_url}" />
//                                     </div>
//                                     </a>
//                                     </li>`;
//   });
