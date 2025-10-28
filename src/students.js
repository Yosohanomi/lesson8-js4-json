import studentsData from './data/students.json';

function loadStudentsData() {
    try {
        const jsonString = JSON.stringify(studentsData);
        const parsedData = JSON.parse(jsonString);
        console.log('JSON коректний:', parsedData);
        return parsedData;
    } catch (error) {
        console.log('Помилка в JSON:', error);
        return null;
    }
}

const students = loadStudentsData();