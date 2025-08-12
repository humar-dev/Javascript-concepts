// ...existing code...

// --- New Concept: Classes and Inheritance ---

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks. Breed: ${this.breed}`);
  }
}

const genericAnimal = new Animal("Creature");
genericAnimal.speak(); 

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); 

// ...existing code...

// --- New Concept: Set and Map Data Structures ---

// Set: stores unique values
const numbersSet = new Set([1, 2, 3, 2, 1]);
numbersSet.add(4);
console.log(numbersSet); // Set { 1, 2, 3, 4 }
console.log(numbersSet.has(3)); // true

// Map: stores key-value pairs
const capitals = new Map();
capitals.set("France", "Paris");
capitals.set("India", "Delhi");
capitals.set("Japan", "Tokyo");

console.log(capitals.get("India")); // Delhi
console.log(capitals.size); // 3

// Iterating over Map
for (const [country, city] of capitals) {
  console.log(`${country}: ${city}`);
}