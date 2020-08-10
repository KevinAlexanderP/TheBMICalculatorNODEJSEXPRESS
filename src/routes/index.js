const express = require('express');
const fs = require('fs');
const uuid = require('uuid');




const router = express.Router();


let persons = []
// let personswithOverweight= JSON.parse(json_persons);

router.get('/', (req, res) => {
  res.render('index', { persons });
});

router.get('/new-entry', (req, res) => {
  res.render('new-entry');
});

// POST OBJECTS
router.post('/new-entry', (req, res) => {
//ENTRADAS
  const { nombre, edad , sexo, altura , peso } = req.body;
//  persons.push(req.body)
 console.log(req.body)

 const express = require('express');
// CLASS PERSONA
class Personclase {
  //CONSTRUCTOR
    constructor(nombre, edad, sexo, altura, peso) {
      //PARAMETROS POR BINDING
      this.nombre = req.body.nombre;
      this.edad = req.body.edad;
      this.sexo = req.body.sexo;
      this.altura = req.body.altura;
      this.peso = req.body.peso;
    }
    //METODOS
    getBMI() {
      let bmi=  this.peso / this.altura **2;
      return bmi
    
    }
    esMayordeEdad() {
      if (this.edad >= 18) {
        return "Es mayor de edad ✅";
      } else {
        return "Es menor de edad ➖1️⃣8️⃣";
      }
    }
    charSexo() {
      if (this.sexo === "Hombre") {
     console.log("Es Hombre ");
      } else if (this.sexo === "Mujer") {
        return "Es mujer";
      }
     
    }
    toString(){
      return `Personclase: (${this.nombre} ${this.edad} ${this.sexo} ${this.altura} ${this.peso})`
    }
    generaNSS(length){
      var result= '';
   var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength= characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
    }
    pesoIdealHombres (){if(this.sexo === "Hombre" && bmi > 20 && bmi < 25){
      return "Normal en Hombres🙋‍♂️" 
    }else if(this.sexo === "Hombre" && bmi < 20) {
      return "Falta de Peso en Hombres 🦴 "
    }else if(this.sexo === "Hombre" && bmi > 25){
      return "Sobrepeso en hombre en Hombres 🤷‍♂️"
    }else if(this.sexo === "Mujer" && bmi > 20 && bmi < 24) {
      return "Normal en Mujeres 🧏🧏"
    }else if(this.sexo === "Mujer" && bmi < 20){
      return "Falta de Peso en Mujeres🦴🙎‍♀️🙎‍♀️"
    }else if(this.sexo === "Mujer" && bmi > 24){
      return "Sobrepeso en mujeres 👩‍⚕️👩‍⚕️"
    }
  
  } 

  }
  let objetopersona = new Personclase()
  let indiceDeMasa =  new Personclase().getBMI()
  let mayordeedad = new Personclase().esMayordeEdad()
  let sexoDe = new Personclase().charSexo()
  let NSS = new  Personclase().generaNSS(8)
  let bmi = new Personclase().getBMI()
  let pesoidealhombres =new  Personclase().pesoIdealHombres()
  console.log(new  Personclase().toString())
  console.log(new Personclase().esMayordeEdad())
  //Prototipo
  var newPerson = {
    id: uuid.v4(),
    nombre,
    edad,
    sexo,
    altura,
    peso,
    objetopersona,
    indiceDeMasa,
    sexoDe,
    NSS,
    mayordeedad,
    pesoidealhombres

  };
  // add a new book to the array
  persons.push(newPerson);

  // saving the array in a file
  const json_persons = JSON.stringify(persons);
  fs.writeFileSync('src/persons.json', json_persons, 'utf-8');
console.log(json_persons)
  res.redirect('/');
});

// router.get('/delete/:id', (req, res) => {
//   console.log({persons})
//   persons = persons.filter(person => person.id != req.params.id);

//   // saving data
//   const json_persons = JSON.stringify(persons);
//   fs.writeFileSync('src/persons.json', json_persons);

//   res.redirect('/')
// });



module.exports = router;