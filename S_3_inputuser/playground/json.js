// var obj = {
//     name: 'Marcin',
//     job: 'Programer'
// };

// var stringObj = JSON.stringify(obj);// zamienia obiekt obj na stringJSONa
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(obj);

// var personString = '{"name": "Marcin","age": 33}';
// //var personString.name - to nie istnieje bo to nie jest obiekt
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var original = {
    title: 'Some title',
    body: 'Some body'
};

var origlinalNoteString = JSON.stringify(original);
fs.writeFileSync('notes.json',origlinalNoteString);

var noteString =fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);