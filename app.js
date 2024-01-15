require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

// Handlebars
hbs.registerPartials(__dirname + '/views/partials', err => {});

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public/roadtrip'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'José Luis',
    titulo: 'Curso de React'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'José Luis',
    titulo: 'Curso de React'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'José Luis',
    titulo: 'Curso de React'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname +   '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
