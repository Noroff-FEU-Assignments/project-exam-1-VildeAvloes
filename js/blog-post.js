import { baseUrl } from "./constants/api.js";
import { createModal } from "./modal.js";

const titleContainer = document.querySelector("title");
const postDetails = document.querySelector(".post-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const postUrl = baseUrl + id;

getPostDetails();

async function getPostDetails() {
  try {
    const response = await fetch(postUrl);
    const details = await response.json();

    postDetails.innerHTML = "";

    titleContainer.innerHTML += `Hey Girl | ${details.title.rendered}`;
    postDetails.innerHTML = `<div class="container ">
                                <h1 class="blog-post">${details.title.rendered}</h1>
                                <div>
                                <p>${details.content.rendered}</p>
                                </div>
                            </div>`;

    handleModalImages();
  } catch (error) {
    console.log(error);
  }
}

const handleModalImages = () => {
  const images = document.querySelectorAll(".wp-block-image");

  images.forEach((img) => {
    img.classList.add("modal-image");
    window.onclick = () => createModal();
  });

  const innerImg = document.querySelectorAll(".wp-block-image img");

  innerImg.forEach((img) => {
    img.setAttribute("tabindex", "0");
    window.onkeydown = () => createModal();
  });
};
