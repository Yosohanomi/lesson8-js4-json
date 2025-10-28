import colors from './data/colorPicker.json';
import cardsTemplate from "./templates/cards.hbs"
const palleteContainer = document.querySelector(".js-palette");

const layout = cardsTemplate(colors);
palleteContainer.innerHTML = layout;