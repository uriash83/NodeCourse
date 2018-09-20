console.log('Starting app.js');

const fs = require('fs'); // ładowanie modułu , fs moduł służący do ładaowania plików
const os = require('os');
const notes = require('./notes.js')// dołączenie i uruchomienie pliku note.js

//var user = os.userInfo();
//var res = notes.addNote();

//console.log(`Hello MM ${user.username}! ${notes.age} ${res}`);
//fs.appendFileSync('greet.txt',`Hello MM ${user.username}!`);
console.log(notes.add(8,9));