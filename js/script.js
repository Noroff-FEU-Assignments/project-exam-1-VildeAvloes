const hamburger = document.querySelector(".hamburger");
let navMenu = document.getElementsByName(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
