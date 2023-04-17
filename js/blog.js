import { url } from "./api/url.js";

const postsContainer = document.querySelector(".blogs-container");
const viewMore = document.querySelector(".view-more");

async function renderPosts() {
  try {
    const response = await fetch(url);
    const postResults = await response.json();

    console.log(postResults);

    const firstPostResults = postResults.slice(0, 10);
    const secondPostResults = postResults.slice(-5);
    console.log(firstPostResults);
    console.log(secondPostResults);

    postsContainer.innerHTML = "";

    firstPostResults.forEach(function (post) {
      postsContainer.innerHTML += `<a href="blog-post.html?id=${post.id}" class="card content-width">
                                      <div class="featured-image">
                                      <img src= "${post.fimg_url}" />
                                      </div>
                                      <div>
                                      <h2>${post.title.rendered}</h2>
                                      <p>${post.excerpt.rendered}</p>
                                      </div>
                                      </a>`;
    });
    viewMore.addEventListener("click", () => {
      viewMore.style.display = "none";
      secondPostResults.forEach(function (post) {
        postsContainer.innerHTML += `<a href="blog-post.html?id=${post.id}" class="card content-width">
                                          <div class="featured-image">
                                          <img src= "${post.fimg_url}" />
                                          </div>
                                          <div>
                                          <h2>${post.title.rendered}</h2>
                                          <p>${post.excerpt.rendered}</p>
                                          </div>
                                          </a>`;
      });
    });
  } catch (error) {
    console.log(error);
  }
}

renderPosts();
