const refs = {
  input: document.querySelector("#name-input"),
  nameLable: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  refs.nameLable.textContent = refs.input.value === '' ? "Anonymous" : event.currentTarget.value;

}