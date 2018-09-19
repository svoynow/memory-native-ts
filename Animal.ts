import { Animal } from './Types';

 // static image path strings for compile time checking.
 export const requireImage = (animal) => {
  let source = require('./images/Bee.png');
  switch (animal) {
  case Animal.Badger:
    source = require('./images/Badger.png');
    break;
  case Animal.Bee:
    source = require('./images/Bee.png');
    break;
  case Animal.Bird:
    source = require('./images/Bird.png');
    break;
  case Animal.Butterfly:
    source = require('./images/Butterfly.png');
    break;
  case Animal.Cat:
    source = require('./images/Cat.png');
    break;
  case Animal.Chicken:
    source = require('./images/Chicken.png');
    break;
  case Animal.Cow:
    source = require('./images/Cow.png');
    break;
  case Animal.Crab:
    source = require('./images/Crab.png');
    break;
  case Animal.Deer:
    source = require('./images/Deer.png');
    break;
  case Animal.Dinosaur:
    source = require('./images/Dinosaur.png');
    break;
  case Animal.Dog:
    source = require('./images/Dog.png');
    break;
  case Animal.Dolphin:
    source = require('./images/Dolphin.png');
    break;
  case Animal.Elephant:
    source = require('./images/Elephant.png');
    break;
  case Animal.Duck:
    source = require('./images/Duck.png');
    break;
  case Animal.Frog:
    source = require('./images/Frog.png');
    break;
  case Animal.Gorilla:
    source = require('./images/Gorilla.png');
    break;
  case Animal.Horse:
    source = require('./images/Horse.png');
    break;
  case Animal.Kangaroo:
    source = require('./images/Kangaroo.png');
    break;
  case Animal.Leopard:
    source = require('./images/Leopard.png');
    break;
  case Animal.Lion:
    source = require('./images/Lion.png');
    break;
  case Animal.Llama:
    source = require('./images/Llama.png');
    break;
  case Animal.Octopus:
    source = require('./images/Octopus.png');
    break;
  case Animal.Rhinoceros:
    source = require('./images/Rhinoceros.png');
    break;
  case Animal.Shark:
    source = require('./images/Shark.png');
    break;
  case Animal.Sheep:
    source = require('./images/Sheep.png');
    break;
  case Animal.Snail:
    source = require('./images/Snail.png');
    break;
  case Animal.Turtle:
    source = require('./images/Turtle.png');
    break;
  case Animal.Whale:
    source = require('./images/Whale.png');
    break;
  case Animal.Wolf:
    source = require('./images/Wolf.png');
    break;
  default:
    source = require('./images/Shark.png');
  }
  return source;
}; 

export const all = [
  Animal.Badger,
  Animal.Bee,
  Animal.Bird,
  Animal.Butterfly,
  Animal.Cat,
  Animal.Chicken,
  Animal.Cow,
  Animal.Crab,
  Animal.Deer,
  Animal.Dinosaur,
  Animal.Dog,
  Animal.Dolphin,
  Animal.Elephant,
  Animal.Duck,
  Animal.Frog,
  Animal.Gorilla,
  Animal.Horse,
  Animal.Kangaroo,
  Animal.Leopard,
  Animal.Lion,
  Animal.Llama,
  Animal.Octopus,
  Animal.Rhinoceros,
  Animal.Shark,
  Animal.Sheep,
  Animal.Snail,
  Animal.Turtle,
  Animal.Whale,
  Animal.Wolf,
];

export default Animal;