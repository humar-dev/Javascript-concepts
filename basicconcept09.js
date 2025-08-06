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