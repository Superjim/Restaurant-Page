var mains = [
  {
    name: "Aged beef fillet, brocolli, black garlic, Madeira and tarragon jus",
    price: "36",
  },
  {
    name: "Loin of Scottish venison, plum, parsnip, swede, venison jus",
    price: "34",
  },
  {
    name: "Packington chicken, roasted shallot, mushroom, sherry",
    price: "29",
  },
];

//create menu item - unused
function createMenuElement(object) {
  const item = document.createElement("div");

  const foodName = document.createElement("h3");
  foodName.textContent = object.name;

  const foodPrice = document.createElement("h3");
  foodPrice.textContent = "£" + object.price;

  item.appendChild(foodName);
  item.appendChild(foodPrice);

  return item;
}

//create menu
function createMenu(array) {
  const menu = document.createElement("div");



//build menu

  // for menu in menuStorage {
  //   create a new dom object
  //   get the menu name
  //   add the menu name as a button
  //   for item in subMenu {
  //     create a new dom object
  //     get the item name
  //     get the item price
  //     append the item name as a dom h3
  //     append the item price as a dom h3

  //   }
  // }

  const thirdHeading = document.createElement("h3");
  const thirdHeadingText = document.createTextNode(
    "Please browse our delicious menu and contact us to book a table."
  );
  thirdHeading.appendChild(thirdHeadingText);

for (menu[i] of menuStorage) {
  const menuButton = document.createElement("button");
  const name = menu[i].name;
    
}


var menuStorage = [
  {
    name: "Dinner",
    submenus: [
      {
        name: "Starters",
        items: [
          {
            name: "Crab, bergamot dressing, apple, potato",
            price: "16",
          },
          {
            name: "Nori cured salmon, smoked salmon mousse, cucumber, dill",
            price: "14",
          },
          {
            name: "Crisp veal sweetbread, smoked potato, bacon jam, alliums",
            price: "15",
          },
        ],
      },
      {
        name: "Mains",
        items: [
          {
            name: "Aged beef fillet, brocolli, black garlic, Madeira and tarragon jus",
            price: "36",
          },
          {
            name: "Loin of Scottish venison, plum, parsnip, swede, venison jus",
            price: "34",
          },
          {
            name: "Packington chicken, roasted shallot, mushroom, sherry",
            price: "29",
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Lavender & white chocolate mousse, blood orange, toasted rice ice cream, star anise shortbread",
            price: "12",
          },
          {
            name: "Dark chocolate cremeux, banana, miso, sesame, chocolate nitro",
            price: "13",
          },
          {
            name: "Poached rhubarb, vanilla ice cream, black pepper meringue, rhubarb & custard granita",
            price: "11",
          },
        ],
      },
    ],
  },
  {
    name: "Sunday Roast",
    submenus: [
      {
        name: "Starters",
        items: [],
      },
      {
        name: "Mains",
        items: [],
      },
      {
        name: "Desserts",
        items: [],
      },
    ],
  },
];

var mains = [
  {
    name: "Aged beef fillet, brocolli, black garlic, Madeira and tarragon jus",
    price: "36",
  },
  {
    name: "Loin of Scottish venison, plum, parsnip, swede, venison jus",
    price: "34",
  },
  {
    name: "Packington chicken, roasted shallot, mushroom, sherry",
    price: "29",
  },
];
