const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", onBtnCreate);
btnDestroy.addEventListener("click", onBtnDestroy);

function onBtnCreate() {
  for (let i = 1; i <= input.value; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.width = `${20 + i * 10}px`;
    newEl.style.height = `${20 + i * 10}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    boxes.append(newEl);
  }
}
function onBtnDestroy() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.lastChild);
    input.value = "";
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
