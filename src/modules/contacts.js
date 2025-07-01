import "../styles.css";
import Restaurant from "../images/restaurant.jpg";

export default function renderContacts() {
  const content = document.getElementById("content");
  content.innerHTML = null;

  const restaurantImageElement = document.createElement("img");
  restaurantImageElement.src = Restaurant;
  restaurantImageElement.className = "restaurant-image";

  const titleElement = document.createElement("h1");
  titleElement.textContent = "Contacts:";

  const aboutElement = document.createElement("div");
  aboutElement.className = "section";
  const about1ELement = document.createElement("h2");
  about1ELement.textContent =
    "Main contact point: Smarthphone number: 238 432 5674";
  const about2ELement = document.createElement("p");
  about2ELement.textContent =
    "If you prefer you can also reach us sending us an email to theOnlyFood@email.top.";
  aboutElement.append(about1ELement, about2ELement);
  content.append(restaurantImageElement, titleElement, aboutElement);
}
