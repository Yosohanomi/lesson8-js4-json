import filmsData from './data/films.json';
function validateFilmsJSON() {
    const jsonString = JSON.stringify(filmsData);
    
    try {
        const parsedData = JSON.parse(jsonString);
        console.log('JSON коректний:', parsedData);
        return true;
    } catch (error) {
        console.log('Помилка в JSON:', error);
        return false;
    }
}

validateFilmsJSON();