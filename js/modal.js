//fetch imagesrc
export function createModal() {
  const modal = document.querySelector(".modal");
  let modalImage = document.querySelectorAll(".modal-image img");
  let modalContent = document.querySelector(".modal-content");

  modalImage.forEach((img) => {
    img.addEventListener("click", (e) => {
      let imgSrc = e.target.src;
      let imgAlt = e.target.alt;

      modal.style.display = "block";
      modalContent.src = imgSrc;
      modalContent.alt = imgAlt;
    });
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });
  });
}
createModal();
