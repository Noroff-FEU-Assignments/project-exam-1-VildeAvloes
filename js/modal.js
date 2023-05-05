//fetch imagesrc
export function createModal() {
  const modal = document.querySelector(".modal");
  const closeButton = document.getElementById("close-button");
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
    // img.addEventListener("keydown", (e) => {
    //   if (e.key === "Enter") {
    //     e.preventDefault();
    //     let imgSrc = e.target.src;
    //     let imgAlt = e.target.alt;

    //     modal.style.display = "block";
    //     modalContent.src = imgSrc;
    //     modalContent.alt = imgAlt;
    //     console.log("enter");
    //   }
    // });
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.style.display = "none";
      }
    });
    closeButton.onclick = () => {
      modal.style.display = "none";
    };
  });
}
createModal();
