// // // ...existing code...

// // // --- New Concept: Classes and Inheritance ---

// // class Animal {
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   speak() {
// //     console.log(`${this.name} makes a sound.`);
// //   }
// // }

// // class Dog extends Animal {
// //   constructor(name, breed) {
// //     super(name);
// //     this.breed = breed;
// //   }
// //   speak() {
// //     console.log(`${this.name} barks. Breed: ${this.breed}`);
// //   }
// // }

// // const genericAnimal = new Animal("Creature");
// // genericAnimal.speak(); 

// // const myDog = new Dog("Buddy", "Golden Retriever");
// // myDog.speak(); 

// // // ...existing code...

// // // --- New Concept: Set and Map Data Structures ---

// // // Set: stores unique values
// // const numbersSet = new Set([1, 2, 3, 2, 1]);
// // numbersSet.add(4);
// // console.log(numbersSet); // Set { 1, 2, 3, 4 }
// // console.log(numbersSet.has(3)); // true

// // // Map: stores key-value pairs
// // const capitals = new Map();
// // capitals.set("France", "Paris");
// // capitals.set("India", "Delhi");
// // capitals.set("Japan", "Tokyo");

// // console.log(capitals.get("India")); // Delhi
// // console.log(capitals.size); // 3

// // // Iterating over Map
// // for (const [country, city] of capitals) {
// //   console.log(`${country}: ${city}`);
// // }


// // ...existing code...

// // --- New Concept: Error Handling with try...catch and Custom Errors ---

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 2)); // 5
//   console.log(divide(5, 0));  // Throws error
// } catch (err) {
//   console.error("Error occurred:", err.message);
// }

// // Custom error class
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function validateAge(age) {
//   if (age < 0) {
//     throw new ValidationError("Age cannot be negative");
//   }
//   return true;
// }

// try {
//   validateAge(-1);
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.error("Validation error:", err.message);
//   } else {
//     console.error("Unknown error:", err);
//   }
// }











// Mixin 1: CanEat
// const CanEat = {
//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// };

// // Mixin 2: CanWalk
// const CanWalk = {
//     walk() {
//         console.log(`${this.name} is walking.`);
//     }
// };

// // Mixin 3: CanSwim
// const CanSwim = {
//     swim() {
//         console.log(`${this.name} is swimming.`);
//     }
// };

// // Function to combine multiple mixins into one object
// function multipleInheritance(baseClass, ...mixins) {
//     Object.assign(baseClass.prototype, ...mixins);
// }

// // Base class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // Apply multiple inheritance
// multipleInheritance(Animal, CanEat, CanWalk, CanSwim);

// // Create object
// const duck = new Animal("Duck");
// duck.eat();  // Duck is eating.
// duck.walk(); // Duck is walking.
// duck.swim(); // Duck is swimming.


// Debounce function
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example usage: Simulate typing event
function onType(text) {
    console.log("Search for:", text);
}

// Wrap the function with debounce (run after 500ms pause)
const debouncedSearch = debounce(onType, 500);

// Simulate user typing
debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Jav");
debouncedSearch("Java");
debouncedSearch("JavaS");
debouncedSearch("JavaSc");
debouncedSearch("JavaScr");
debouncedSearch("JavaScrip");
debouncedSearch("JavaScript");

// Only the last call will execute after 500ms

// ...existing code...

// --- New Concept: Static Methods and Properties in Classes ---

class MathHelper {
    static description = "Utility class for math operations";

    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathHelper.description); // Utility class for math operations
console.log(MathHelper.add(5, 3));  // 8
console.log(MathHelper.multiply(4, 6)); // 24

// Static methods and properties are called on the class itself, not on instances
const helper = new MathHelper();
console.log(typeof helper.add); // undefined

// ...existing