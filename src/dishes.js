import dishesData from './data/dishes.json';

function loadDishesData() {
    try {
        const jsonString = JSON.stringify(dishesData);
        const parsedData = JSON.parse(jsonString);
        console.log('JSON коректний:', parsedData);
        return parsedData;
    } catch (error) {
        console.log('Помилка в JSON:', error);
        return null;
    }
}

const dishes = loadDishesData();