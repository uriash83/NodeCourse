const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
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

app.use((req,res,next)=>{
    var now =new Date().toString();
    var log = `${now} : ${req.method} ${req.url}`
    console.log(log);
    fs.appendFile('server.log',log+'\n',(err)=>{
        if(err){
            console.log('Unable co write to file');
        }
    });
    next();
});
// użycie tego poniżej , przekierwuje każdą stroną na maintenance.hbs. 
// ale niedotyczy to np. help.html której ścieżka jest statyczna 
// żeby to zablokować należy: app.use(express.static(__dirname + '/public')); 
// umieścić za poniższym middlware 
app.use((req,res,next)=>{
    res.render('maintenance.hbs');
});

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

app.listen(port,()=>{
    console.log(`Server is up on${port}`);
});