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