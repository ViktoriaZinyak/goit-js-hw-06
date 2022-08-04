const input = document.querySelector("input#name-input");
const name = document.querySelector("span#name-output");

console.log(name);

input.addEventListener("input", onInputEnter);

function onInputEnter(event) {
  if (event.currentTarget.value !== "") {
    name.textContent = event.currentTarget.value;
  }
}
