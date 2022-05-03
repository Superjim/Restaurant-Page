import buildHomePage from "./home";

//header, contains navbar
function buildHeader() {
  const header = document.createElement("header");
  const name = document.createElement("h1");
  const logo = document.createElement("img");
  name.textContent = "lorem ipsum restaurant";
  logo.src = "images/logo.svg";
  logo.alt = "logo";

  header.appendChild(logo);
  header.appendChild(name);
  header.appendChild(buildNavBar());

  return header;
}

//nav bar, creates a 3 button nav bar
function buildNavBar() {
  const navBar = document.createElement("navBar");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    buildHomePage();
  });

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    console.log("menu");
  });

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact Us";
  contactBtn.addEventListener("click", (e) => {
    console.log("contact");
  });

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);

  return navBar;
}
//main content
function buildMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  return main;
}

//footer
function buildFooter() {
  const footer = document.createElement("footer");

  const author = document.createElement("p");
  author.textContent = "Created by Jim Jenkinson ";

  const ghIcon = document.createElement("i");
  ghIcon.className = "fa-brands fa-github";

  const ghLink = document.createElement("a");
  ghLink.href = "https://superjim.github.io/";

  author.appendChild(ghIcon);
  ghLink.appendChild(author);
  footer.appendChild(ghLink);

  return footer;
}

//build website

function buildWebsite() {
  const content = document.getElementById("content");

  content.appendChild(buildHeader());
  content.appendChild(buildMain());
  content.appendChild(buildFooter());
}

export default buildWebsite;
