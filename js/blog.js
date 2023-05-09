import { url } from "./api/url.js";

const postsContainer = document.querySelector(".blogs-container");
const viewMore = document.querySelector(".view-more");
const sortButton = document.querySelector(".sort-button");

export async function renderPosts() {
  try {
    const response = await fetch(url);
    const postResults = await response.json();

    const firstPostResults = postResults.slice(0, 10);
    const secondPostResults = postResults.slice(-5);

    console.log(postResults);

    postsContainer.innerHTML = "";

    sortButton.addEventListener("click", () => {
      const sortedResults = postResults.sort(sortByTitle);
      console.log(sortedResults);
    });

    firstPostResults.forEach(function (post) {
      postsContainer.innerHTML += `<a href="blog-post.html?id=${post.id}" class="card">
                                      <div class="card-image">
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
        postsContainer.innerHTML += `<a href="blog-post.html?id=${post.id}" class="card">
                                          <div class="card-image">
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

function sortByTitle(a, b) {
  if (a.title.rendered > b.title.rendered) {
    return 1;
  } else if (b.title.rendered > a.title.rendered) {
    return -1;
  } else {
    return 0;
  }
}

// const handleSortingButtonOnClick = () => {
//   sortButton.addEventListener("click", () => {
//     const sortedResults = postResults.sort(sortByTitle);
//     console.log(sortedResults);
//   });
// };
