import { checkLength, validateEmail } from "./components/globals.js";

const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const successMessage = document.querySelector(".success-message");

function validateForm(event) {
  event.preventDefault();
  let success = true;

  if (checkLength(name.value, 0) === true) {
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
  if (checkLength(subject.value, 19) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    success = false;
  }
  if (success) {
    successMessage.innerHTML = displayMessage(
      "success",
      "The form was successfully submitted. We'll be in touch as soon as possible. Have a nice day!"
    );
  }
}

form.addEventListener("submit", validateForm);
