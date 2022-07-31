const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
