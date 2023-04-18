//fetch imagesrc
export function createModal() {
  const modal = document.querySelector(".modal");
  const modalId = document.getElementById("#modal");
  const close = document.getElementsByClassName("close")[0];
  // let image = document.querySelector(".modal-image");
  let modalImage = document.querySelectorAll(".modal-image img");
  let modalContent = document.querySelector(".modal-content");
  // let imgSrc;
  // let imgAlt;

  modalImage.forEach((img) => {
    img.addEventListener("click", (e) => {
      let imgSrc = e.target.src;
      let imgAlt = e.target.alt;

      modal.style.display = "block";
      modalContent.src = imgSrc;
      modalContent.alt = imgAlt;
    });
    close.onclick = () => {
      modal.style.display = "none";
    };
    document.onclick = (e) => {
      if (e.target.id === modalId) modal.style.display = "none";
      console.log(e.target);
    };
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
  });
}
createModal();
