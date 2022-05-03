function initHomePage() {
  const home = document.createElement("div");

  const mainHeading = document.createElement("h1");
  const mainHeadingText = document.createTextNode(
    "elevated dining at lorem ipsum"
  );
  mainHeading.appendChild(mainHeadingText);

  const secondHeading = document.createElement("h3");
  const secondHeadingText = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
  secondHeading.appendChild(secondHeadingText);

  const thirdHeading = document.createElement("h3");
  const thirdHeadingText = document.createTextNode("Please browse our delicious menu and contact us to book a table.");
  thirdHeading.appendChild(thirdHeadingText);

  home.appendChild(mainHeading);
  home.appendChild(secondHeading);
  home.appendChild(thirdHeading);

  return home;
}

function buildHomePage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(initHomePage());
}

export default buildHomePage;
