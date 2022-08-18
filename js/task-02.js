const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsEl = document.querySelector("#ingredients");

const containerEl = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;

  return itemEl;
});

ingredientsEl.append(...containerEl);