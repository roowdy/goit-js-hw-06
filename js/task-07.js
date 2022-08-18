const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", onFontSize);

function onFontSize() {
  const spanEl = document.querySelector("#text");

  spanEl.style.fontSize = inputEl.value + "px";
}