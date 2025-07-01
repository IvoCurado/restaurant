import renderHome from "./modules/home.js";
import renderMenu from "./modules/menu.js";
import renderAbout from "./modules/about.js";
import renderContacts from "./modules/contacts.js";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const contactsButton = document.getElementById("contacts");

function main() {
  renderHome();
  homeButton.addEventListener("click", (event) => renderHome());
  menuButton.addEventListener("click", (event) => renderMenu());
  aboutButton.addEventListener("click", (event) => renderAbout());
  contactsButton.addEventListener("click", (event) => renderContacts());
}

main();
