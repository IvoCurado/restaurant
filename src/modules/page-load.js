import "../styles.css";
import Restaurant from "../images/restaurant.jpg";

const content = document.getElementById("content");

const restaurantImageElement = document.createElement("img");
restaurantImageElement.src = Restaurant;
restaurantImageElement.className = "restaurant-image";

const titleElement = document.createElement("h1");
titleElement.textContent = "TheRakus - The restaurant where you need to eat!!!";

const aboutElement = document.createElement("div");
aboutElement.className = "section";
const about1ELement = document.createElement("h2");
about1ELement.textContent =
  "\"The type of food I want to eat on my birthday is a good way to describe TheRakus food.\"";
const about2ELement = document.createElement("p");
about2ELement.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

aboutElement.append(about1ELement, about2ELement);
content.append(restaurantImageElement, titleElement, aboutElement);
