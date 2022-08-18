const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0;

const increment = () => {
  counterValue += 1;

  document.querySelector("#value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.querySelector("#value").textContent = counterValue;
};

refs.incrementBtn.addEventListener("click", increment);
refs.decrementBtn.addEventListener("click", decrement);