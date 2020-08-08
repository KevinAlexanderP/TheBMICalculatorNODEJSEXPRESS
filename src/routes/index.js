const express = require('express');
const fs = require('fs');
const uuid = require('uuid');

const router = express.Router();

const json_persons = fs.readFileSync('src/persons.json', 'utf-8');
let persons = JSON.parse(json_persons);

router.get('/', (req, res) => {
  res.render('index', { persons });
});

router.get('/new-entry', (req, res) => {
  res.render('new-entry');
});

router.post('/new-entry', (req, res) => {

  const { nombre, edad , sexo, altura } = req.body;

  if (!nombre || !edad || !sexo || !altura) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var newPerson = {
    id: uuid.v4(),
    nombre,
    edad,
    sexo,
    altura
  };

  // add a new book to the array
  persons.push(newPerson);

  // saving the array in a file
  const json_persons = JSON.stringify(persons);
  fs.writeFileSync('src/persons.json', json_persons, 'utf-8');
console.log(json_persons)
  res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
  console.log({persons})
  persons = persons.filter(person => person.id != req.params.id);

  // saving data
  const json_persons = JSON.stringify(persons);
  fs.writeFileSync('src/persons.json', json_persons);

  res.redirect('/')
});

module.exports = router;