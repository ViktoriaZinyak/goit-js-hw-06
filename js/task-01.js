const listOfCategories = document.querySelector("ul#categories");
const itemsOfCategories = listOfCategories.children;
console.log(`Number of categories: ${itemsOfCategories.length}`);

for (const item of itemsOfCategories) {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
}
