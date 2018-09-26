const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    //res.send('<h1>Hello Expres</h1>');
    // res.send({
    //     name: 'Marcin',
    //     likes: [
    //         'Biking',
    //         'Cities'
    //     ]
    // });
    res.render('home.hbs',{
        welcomeMessage:'Hello Martin',
        pageTitle: 'About page KK' // jeśli nie podamy properties która jest w pliku .hbs , nie będzie ona 
    });                               // wyświetlana ale też nie będzie błędu
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About page MM',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'IT WORKS'
    });
});
app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'Unable to connect'
    })
});

app.listen(3000,()=>{
    console.log('Server is up on 3000 port');
});