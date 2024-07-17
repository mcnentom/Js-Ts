//Objects are a combination of variables,functions and data structures.

//creating and object
//Object literal syntax
 let car = {
    Model: "Toyota",
    torque: 2000
 }

 //Object constructor

 var mycar = new Object();
  //since object() is a built in method "new" keyword is not required
   let mycar = Object()

//object create method
 // the method is useful when creating new objects based on existing object prototype

 let person = {
     name: "John",
     age: 30,
     city: "New York"
 }
 let greatPerson = {
     greet: function() {
         console.log("Hello, my name is " + this.name);
     }
 }

 var myPerson = Object.create(person, greatPerson)