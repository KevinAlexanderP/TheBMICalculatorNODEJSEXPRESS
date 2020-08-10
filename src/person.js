// const express = require('express');
// const fs = require('fs');
// const uuid = require('uuid');

// const router = express.Router();
// const json_persons = fs.readFileSync('src/persons.json', 'utf-8');

// class Person {
//     constructor(_nombre, _edad, _sexo, _altura, _peso) {
//       this.nombre = _nombre;
//       this.edad = _edad;
//       this.sexo = _sexo;
//       this.altura = _altura;
//       this.peso = _peso;
//     }
//     getBMI() {
//       return this.altura * this.peso;
//     }
  
//     esMayordeEdad() {
//       if (this.edad >= 18) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     charSexo() {
//       if (this.sexo === "Hombre") {
//      console.log("Es Hombre ");
//       } else if (this.sexo === "Mujer") {
//         return "Es mujer";
//       }
//     }
//   }

//   console.log(new Person("alex",22,"Hombre",22,40))
//   console.log(new Person("alex",22,"Hombre",22,40).charSexo())

//   module.exports= Person 