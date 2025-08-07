// ...existing code...

// --- New Concept: Rest Parameters and Spread Operator ---

// Rest parameters: collect all arguments into an array
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Spread operator: expand elements of an array/object
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3 }


// ...existing code...

// --- New Concept: Template Literals and Tagged Templates ---

const language = "JavaScript";
const level = "beginner";

// Template literals for easy string interpolation
const message = `Welcome to ${language} concepts for ${level}s!`;
console.log(message);

// Tagged template function
function emphasize(strings, ...values) {
  return strings.reduce((result, str, i) => result + str + (values[i] ? values[i].toUpperCase() : ""), "");
}
const output = emphasize`Learning ${language} is ${level} friendly.`;
console.log(output);