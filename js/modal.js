const modal = document.getElementById("modalWindow");
const close = document.getElementsByClassName("close")[0];
var image = document.querySelector(".modal-image");
var modalImage = document.querySelectorAll(".modal-image img");
var modalImg = document.querySelector(".modal-content");
var captionText = document.querySelector(".caption");
var imgSrc;
var caption;

//fetch imagesrc
modalImage.forEach((img) => {
  img.addEventListener("click", (e) => {
    var imgSrc = e.target.src;
    var caption = e.target.alt;

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = caption;
  });
});

//close by click on x
close.onclick = () => {
  modal.style.display = "none";
};

//close by escape
modal.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
  if (e.key === "Tab") {
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
