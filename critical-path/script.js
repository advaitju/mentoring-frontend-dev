'use strict';

// Constants
const VALUE_NUMBER = 5;

// Variables
let value;
let bg = '#aaa';

// Functions / Classes
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Initialisations
let me = new Person('AJ', 100);

// Code
document.querySelector('h1').addEventListener('click', () => {
  if (bg === '#aaa') {
    bg = '#333';
    document.querySelector('body').style.backgroundColor = bg;
  } else {
    bg = '#aaa';
    document.querySelector('body').style.backgroundColor = bg;
  }
});