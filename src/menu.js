//menu storage array,
//containing menu arrays (lunch, dinner, sunday dinner ect),
//containing submenu arrays (starter, main, dessert ect),
//containing items + prices

var menuStorage = [
  {
    name: "Lunch",
    submenus: [
      // {
      //   name: "Starters",
      //   items: [
      //     {
      //       name: "Lunch Starter 1",
      //       price: "5",
      //     },
      //   ],
      // },
      {
        name: "Mains",
        items: [
          {
            name: "Torched mackerel, potato salad, apple, crème fraiche",
            price: "15",
          },
          {
            name: "Chicken liver pate, cherry, tarragon, toasted brioche",
            price: "16",
          },
          {
            name: "Marinated heritage beetroot, herb ricotta, blackberry, garden cress",
            price: "13",
          },
          {
            name: "Roasted cauliflower velouté, black garlic ketchup, pickled raisin",
            price: "10",
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Lemon curd, raspberry, black pepper meringue, elderflower",
            price: "5",
          },
          {
            name: "Yoghurt & butterscotch parfait, Medjool date, caramel corn",
            price: "5",
          },
          {
            name: "Selection of three British cheeses, fruit chutney, lavosh cracker",
            price: "3",
          },
        ],
      },
    ],
  },
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
        items: [
          {
            name: "Salmon, pickled cucumber, dill emulsion",
            price: "12",
          },
          {
            name: "Chicken liver pate, cherry, tarragon",
            price: "8",
          },
          {
            name: "Torched mackerel, potato salad, apple, crème fraiche",
            price: "10",
          },
        ],
      },
      {
        name: "Mains",
        items: [
          {
            name: "Roast beef rump cap, horseradish gel and Yorkshire pudding",
            price: "25",
          },
          {
            name: "Roast pork belly, burnt apple and Yorkshire pudding",
            price: "25",
          },
          {
            name: "Packington chicken breast, bread sauce, truffle & tarragon and Yorkshire pudding",
            price: "25",
          },
          {
            name: "Pan-fried cod, cavolo nero, dulse butter sauce",
            price: "25",
          },
          {
            name: "Roasted celeriac risotto, toasted hazelnuts, parsley emulsion, Old Winchester",
            price: "15",
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Selection of British cheese",
            price: "5",
          },
          {
            name: "Yoghurt & butterscotch parfait, medjool date, caramel corn",
            price: "5",
          },
          {
            name: "Poached rhubarb, vanilla ice cream, black pepper meringue, rhubarb & custard granita",
            price: "5",
          },
        ],
      },
    ],
  },
];

function buildMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";

  const buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";

  //for each menu in menuStorage
  menuStorage.forEach((menu, i) => {
    //create button object, add name of menu to it
    const menuButton = document.createElement("button");
    const name = menuStorage[i].name;
    menuButton.textContent = name;
    buttonContainer.appendChild(menuButton);

    //event listener for each menu button
    //will create dom object, append submenu titles to it and display items + price
    //first check if dom object already exists, if so remove it
    menuButton.addEventListener("click", (e) => {
      if (document.contains(document.getElementById("submenuContainer"))) {
        document.getElementById("submenuContainer").remove();
      }
      //create submenu container div to be returned, id = submenuContainer
      const submenuContainer = document.createElement("div");
      submenuContainer.textContent = "";
      submenuContainer.id = "submenuContainer";

      //for each submenu title (starters mains deserts ect)
      //add it to the dom as H3
      menuStorage[i].submenus.forEach((submenu, x) => {
        const submenuHeading = document.createElement("h3");
        submenuHeading.textContent = submenu.name;
        submenuContainer.appendChild(submenuHeading);

        //for each item in the submenu, add name and price
        menuStorage[i].submenus[x].items.forEach((item, i) => {
          //create item container, id = itemContainer
          const itemContainer = document.createElement("div");
          itemContainer.id = "itemContainer";

          //name and price, appended to submenuContainer
          const name = document.createElement("h4");
          const price = document.createElement("p");
          name.textContent = item.name;
          price.textContent = "£" + item.price;

          itemContainer.appendChild(name);
          itemContainer.appendChild(price);

          submenuContainer.appendChild(itemContainer);
        });
      });
      menuContainer.appendChild(submenuContainer);
    });
    menuContainer.appendChild(buttonContainer);
  });
  return menuContainer;
}

function buildMenuPage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(buildMenu());
}

export default buildMenuPage;

//build menu plan

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
