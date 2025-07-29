//<-------------------------Promises in javascipt---------------->

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Data loaded!");
  }, 2000);
});

myPromise.then((result) => {
  console.log(result); // ✅ Data loaded!
});


const failPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("❌ Something went wrong!");
  }, 1000);
});

failPromise
  .then((res) => {
    console.log("Success:", res);
  })
  .catch((err) => {
    console.log("Error:", err); // Error: ❌ Something went wrong!
  });

  const chainedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

chainedPromise
  .then((num) => {
    console.log("First:", num); // 10
    return num * 2;
  })
  .then((num) => {
    console.log("Second:", num); // 20
    return num + 5;
  })
  .then((num) => {
    console.log("Third:", num); // 25
  });

