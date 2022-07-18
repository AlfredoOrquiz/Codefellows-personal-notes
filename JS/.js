'use strict'

let dog = [
  'Rex',
  '3',
  'German Sheppard',
  true,
  false
];

let rex = {
  name: 'Rex',
  age: 3,
  breed: 'German Sheppard',
  vaccinated: {
    rabies: true,
    dewormer: true,
    
  },
  favToys: ['tug of war', 'squeeky toys', 'chew toys'],
  sprayNeuter: false,
  'favorite dog treat': 'Milk duds',
  log: function(word) {
    console.log(word)
  },
  about: function() {
    console.log(`My dog ${this.name} is ${this.age} years old.`)
  },
  
};

console.log(rex['favorite dog treat']);

// logging a value from an array
console.log(dog[2]);
// logging an object
console.log(rex);

// Bracket notation is for grabbing srom the object with brackets
console.log(rex['breed']);
// Dot notation is for grabbing from the object with a dot
console.log(rex.breed);
console.log(rex.age);

console.log(dog.length);

console.log(`My dog ${dog[0]} is ${dog[1]} years old.`);

console.log(`My dog ${rex.name} is ${rex.age} years old.`)

rex.hungry = true;
console.log(rex);

rex.hungry = prompt('Is Rex hungry?');
console.log(rex.hungry);

rex.speak = function() {
  console.log('Ruff');
}

rex.speak();

console.log()
console.log(console);
rex.log('I am Rex');
rex.about();