const input = document.querySelector("input#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", onInputEnter);

function onInputEnter(event) {
  input.classList.add("invalid");

  if (event.currentTarget.value.length == inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
