const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemsCount = item.querySelectorAll("ul li").length;
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
