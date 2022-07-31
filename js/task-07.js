const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  span.style.fontSize = `${event.currentTarget.value}px`;
}
