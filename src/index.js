import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContacts } from "./contacts.js";

createHome();

function buttonListener(e) {
  const buttonId = e.target.id;
  if (buttonId) clearDivContent();

  switch (buttonId) {
    case "home":
      createHome();
      break;
    case "menu":
      createMenu();
      break;
    case "contacts":
      createContacts();
  }
}

const button = document.querySelector("nav");
button.addEventListener("click", buttonListener);

function clearDivContent() {
  const divContent = document.querySelector("div#content");
  divContent.remove();
}
