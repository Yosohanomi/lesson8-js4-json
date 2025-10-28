const age = 18;
const films = ["Josephine la comedie", "Kingdom of Heaven", "Napoleon", "Danton"];

// Запаковуємо данні у рядок (stringify)
const archiveAge = JSON.stringify(age);
console.log(archiveAge, typeof(archiveAge));
const archiveFilms = JSON.stringify(films);
console.log(archiveFilms);

// Розпаковуємо данні із рядка (parse)
const parsedAge = JSON.parse(archiveAge);
console.log(parsedAge, typeof(parsedAge));
const parsedFilms = JSON.parse(archiveFilms);
console.log(parsedFilms, typeof(parsedFilms));