import { baseUrl } from "./api/url.js";
import { createModal } from "./modal.js";

const titleContainer = document.querySelector("title");
const postDetails = document.querySelector(".post-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postUrl = baseUrl + id;

console.log(postUrl);

async function getPostDetails() {
  try {
    const response = await fetch(postUrl);
    const details = await response.json();

    console.log(details);
    postDetails.innerHTML = "";

    titleContainer.innerHTML += `Hey Girl | ${details.title.rendered}`;
    postDetails.innerHTML = `<div class="container content-width">
                                <h1>${details.title.rendered}</h1>
                                <div class="content-width-m">
                                <p>${details.content.rendered}</p>
                                </div>
                            </div>`;

    const images = document.querySelectorAll(".wp-block-image");
    images.forEach((img) => {
      img.classList.add("modal-image");
      window.onclick = (e) => createModal();
    });
  } catch (error) {
    console.log(error);
  }
}

getPostDetails();
