import colors from './data/colorPicker.json';
import cardsTemplate from "./templates/cards.hbs"
const palleteContainer = document.querySelector(".js-palette");

const layout = cardsTemplate(colors);
palleteContainer.innerHTML = layout;

palleteContainer.addEventListener('click', onColorClick);

function onColorClick(event) {
    if (!event.target.classList.contains('color-swatch')) {
        return;
    }
    const hexColor = event.target.dataset.hex;
    const rgbColor = event.target.dataset.rgb;
    document.body.style.backgroundColor = hexColor;
}