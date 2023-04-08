import { blogUrl } from "./components/constants.js";

const titleContainer = document.querySelector("title");
const postHeader = document.querySelector("h1");
const postDetails = document.querySelector(".post-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postUrl = blogUrl + id;

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
                                <p>${details.content.rendered}</p>
                            </div>`;
  } catch (error) {
    console.log(error);
  }
}

getPostDetails();
