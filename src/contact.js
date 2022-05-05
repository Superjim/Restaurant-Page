function contactPage() {
  const contactContainer = document.createElement("div");
  contactContainer.id = "contactContainer";

  //phone
  const phoneContainer = document.createElement("div");

  const phone = document.createElement("a");
  phone.href = "tel:12345678901";
  phone.appendChild(document.createTextNode("1234:5678901"));

  const phoneIcon = document.createElement("i");
  phoneIcon.className = "fa-solid fa-phone";

  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phone);

  //address
  const addressContainer = document.createElement("div");

  const address = document.createElement("p");
  address.textContent = "Old Market Square, Nottingham, NG1 2BS";

  const addressIcon = document.createElement("i");
  addressIcon.className = "fa-solid fa-address-card";

  addressContainer.appendChild(addressIcon);
  addressContainer.appendChild(address);
  addressContainer.id = "addressContainer";

  //email
  const emailContainer = document.createElement("div");

  const email = document.createElement("a");
  email.href = "mailto:loremipsum@website.com";
  email.textContent = "loremipsum@website.com";

  const emailIcon = document.createElement("i");
  emailIcon.className = "fa-solid fa-at";

  emailContainer.appendChild(emailIcon);
  emailContainer.appendChild(email);
  emailContainer.id = "emailContainer";

  contactContainer.appendChild(phoneContainer);
  contactContainer.appendChild(addressContainer);
  contactContainer.appendChild(emailContainer);

  return contactContainer;
}

function buildContactPage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(contactPage());
}

export default buildContactPage;
