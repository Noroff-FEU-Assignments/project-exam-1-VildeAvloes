import { url } from "./components/constants.js";

const postsContainer = document.querySelector(".blogs-container");
const viewMore = document.querySelector(".view-more");

async function renderPosts() {
  try {
    const response = await fetch(url);
    const postResults = await response.json();

    console.log(postResults);

    const firstPostResults = postResults.slice(0, 10);
    const secondPostResults = postResults.slice(10, 15);
    console.log(firstPostResults);
    console.log(secondPostResults);

    postsContainer.innerHTML = "";

    firstPostResults.forEach(function (post) {
      postsContainer.innerHTML += `<div class="container">
                                    <div class="card content-width"> 
                                    <a href="blog-post.html?id=${post.id}">
                                    <h2>${post.title.rendered}</h2>
                                    <p>${post.excerpt.rendered}</p></a>
                                </div>
                                </div>`;

      viewMore.addEventListener("click", () =>
        secondPostResults.forEach(function (post) {
          postsContainer.innerHTML += `<div class="container">
                                        <div class="card content-width"> 
                                        <a href="blog-post.html?id=${post.id}">
                                        <h2>${post.title.rendered}</h2>
                                        <p>${post.excerpt.rendered}</p></a>
                                       </div>
                                       </div>`;
        })
      );
    });
  } catch (error) {
    console.log(error);
  }
}

renderPosts();

// if (postsContainer.innerHTML < 15) {
//   viewMore.style.display.none;
