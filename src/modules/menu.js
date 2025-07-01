import "../styles.css";
import Restaurant from "../images/restaurant.jpg";

export default function renderMenu() {
  const content = document.getElementById("content");
  content.innerHTML = null;

  const restaurantImageElement = document.createElement("img");
  restaurantImageElement.src = Restaurant;
  restaurantImageElement.className = "restaurant-image";

  const titleElement = document.createElement("h1");
  titleElement.textContent = "Our Menu:";

  const aboutElement = document.createElement("div");
  aboutElement.className = "section";
  const about1ELement = document.createElement("h2");
  about1ELement.textContent =
    "Sugestao do chef - Prato misterioso, todos os dias diferente 15$";
  const about2ELement = document.createElement("p");
  about2ELement.innerHTML =
    "Sugestao do chef - Prato vegetariano 13$<br><br>Sugestao do chef - Prato peixe 23$<br><br>Sugestao do chef - Prato carne 19$<br>";
  aboutElement.append(about1ELement, about2ELement);
  content.append(restaurantImageElement, titleElement, aboutElement);
}
