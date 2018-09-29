console.log('Starting app.js');

// third part z nodejs
const fs = require('fs'); // ładowanie modułu , fs moduł służący do ładaowania plików
const os = require('os');
const notes = require('./notes.js')// dołączenie i uruchomienie pliku note.js

// npm module package
const _ = require('lodash');
var filtered = _.uniq(['Mart','Andrew',0,4,true,true])

console.log(filtered)
//console.log(_.isString(true));
//console.log(_.isString("MArt"));
//console.log(_.isString(243));




