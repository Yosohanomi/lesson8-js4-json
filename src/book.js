import booksData from './data/book.json';
function validateBooksJSON() {
    const jsonString = JSON.stringify(booksData);
    
    try {
        const parsedData = JSON.parse(jsonString);
        console.log('JSON коректний:', parsedData);
        return true;
    } catch (error) {
        console.log('Помилка в JSON:', error);
        return false;
    }
}

validateBooksJSON();