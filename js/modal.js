const modal = document.querySelector(".modal");
const close = document.getElementsByClassName("close")[0];
let image = document.querySelector(".modal-image");
let modalImage = document.querySelectorAll(".modal-image img");
let modalImg = document.querySelector(".modal-content");
let imgSrc;
let imgAlt;

//fetch imagesrc
modalImage.forEach((img) => {
  img.addEventListener("click", (e) => {
    let imgSrc = e.target.src;
    let imgAlt = e.target.alt;

    modal.style.display = "block";
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
  });
});

//close by click on x
close.onclick = () => {
  modal.style.display = "none";
};

//Keyboard navigation

//close by escape
modal.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("esc");
    modal.style.display = "none";
  }
  if (e.key === "Tab") {
    console.log("tab");
    if (document.activeElement) {
      console.log("tab");
      close.focus();
      e.preventDefault();
    }
  }
});

//close by clicking on modal
modal.onclick = () => {
  modal.style.display = "none";
};
