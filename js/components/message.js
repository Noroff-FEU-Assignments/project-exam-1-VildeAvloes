//error message
export function displayMessage(type = "success", message = "No message") {
  return `<div class="message" ${type}">${message}</div>`;
}
