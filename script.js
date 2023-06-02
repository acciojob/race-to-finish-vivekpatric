window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve("Promise 4 resolved"), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve("Promise 5 resolved"), getRandomTime()))


	
];
Promise.any(promises).then(result => {
  document.getElementById("output").textContent = result;
});

function getRandomTime() {
  return Math.floor(Math.random() * 4000) + 1000; // generates a random time between 1 and 5 seconds
}