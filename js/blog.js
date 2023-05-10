import { url } from "./api/url.js";

const postsContainer = document.querySelector(".blogs-container");
const viewMore = document.querySelector(".view-more");
const sortButton = document.querySelector(".sort-button");

fetchPosts();
export async function fetchPosts() {
  try {
    const response = await fetch(url);
    const postResults = await response.json();
    let offset = 10;

    viewMore.addEventListener("click", () => {
      viewMore.style.display = "none";
      postResults.slice(offset, offset + 5).forEach(function (post) {
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
      offset += 5;
    });

    sortButton.addEventListener("click", () => {
      sortButton.classList.add("disabled");
      sortButton.disabled = true;
      const sortedResults = postResults.sort(sortByTitle).slice(0, offset);
      updatePosts(sortedResults);
    });

    clearPosts();

    updatePosts(postResults.slice(0, offset));
  } catch (error) {
    console.log(error);
  }
}

function sortByTitle(a, b) {
  if (a.title.rendered > b.title.rendered) {
    return 1;
  } else if (b.title.rendered > a.title.rendered) {
    return -1;
  } else {
    return 0;
  }
}

const updatePosts = (postResults) => {
  clearPosts();
  postResults.forEach(function (post) {
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
};

const clearPosts = () => {
  postsContainer.innerHTML = "";
};
