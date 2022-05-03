//create menu item
function createMenuElement(name, price) {
  const item = document.createElement("div");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodPrice = document.createElement("p");
  foodPrice.textContent = "£" + name;

  item.appendChild(foodName);
  item.appendChild(foodPrice);

  return item;

}

//create menu

//build menu
