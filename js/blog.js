import { url } from "./components/constants.js";

const postsContainer = document.querySelector(".blogs-container");

async function renderPosts() {
  try {
    const response = await fetch(url);
    const postResults = await response.json();

    console.log(postResults);

    postsContainer.innerHTML = "";

    postResults.forEach(function (post) {
      postsContainer.innerHTML += `<div class="card content-width"> 
                                    <a href="blog-post.html?id=${post.id}">
                                    <h2>${post.title.rendered}</h2>
                                    <p>${post.excerpt.rendered}</p></a>
                                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

renderPosts();
