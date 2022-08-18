function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => {
  createBoxes(refs.inputEl.value);
});
refs.destroyBtn.addEventListener("click", destroyBoxes);

const INITIAL_BOX_SIZE = 30;
const BOX_SIZE_STEP = 10;
let basicSize = INITIAL_BOX_SIZE;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    let div = `<div style= "width: ${basicSize}px; height: ${basicSize}px; background-color: ${getRandomHexColor()}"> </div>`;
    refs.boxesEl.insertAdjacentHTML("beforeend", div);
    basicSize += BOX_SIZE_STEP;
  }
}

function destroyBoxes() {
  basicSize = INITIAL_BOX_SIZE;
  document.querySelector("#boxes").innerHTML = "";
}