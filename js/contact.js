import { checkLength, validateEmail } from "./components/validation.js";
import { displayMessage } from "./components/message.js";

const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const successMessage = document.querySelector(".success-message");

export function validateForm(e) {
  e.preventDefault();
  let success = true;

  if (checkLength(name.value, 4) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    success = false;
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    success = false;
  }
  if (checkLength(subject.value, 14) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    success = false;
  }
  if (checkLength(message.value, 24) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    success = false;
  }
  if (success) {
    successMessage.innerHTML =
      displayMessage("success", "The form was successfully submitted!") +
      `<div class="cta-wrapper">
    <a href="index.html" class="cta">Back to home</a>
  </div> `;
  }
}

form.addEventListener("submit", validateForm);
