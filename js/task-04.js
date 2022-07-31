const count = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector("#value");

btnDecrement.addEventListener("click", function () {
  count.decrement();
  valueEl.textContent = count.counterValue;
});

btnIncrement.addEventListener("click", function () {
  count.increment();
  valueEl.textContent = count.counterValue;
});
