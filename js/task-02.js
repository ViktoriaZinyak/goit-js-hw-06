const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");

// for (const ingredient of ingredients) {
//   const ingredientsItem = document.createElement("li");
//   ingredientsItem.textContent = ingredient;
//   ingredientsItem.classList.add("item");
//
// }

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  return ingredientsItem;
});

ingredientsList.append(...ingredientsItems);
console.log(ingredientsList);
