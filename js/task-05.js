const refs = {
  input: document.querySelector("#name-input"),
  nameLable: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  if (!(refs.nameLable.textContent = event.currentTarget.value)) {
    refs.nameLable.textContent = "Anonymous";
  }
}