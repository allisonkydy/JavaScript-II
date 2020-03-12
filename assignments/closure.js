// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function beehive() {
  let buzz = [];

  function bee() {
    buzz.push('buzz');
    console.log(buzz.join(''));
  }
  return bee;
}

let buzzBee = beehive();
buzzBee();
buzzBee();
buzzBee();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  function increment() {
    console.log(++count); 
  }
  return increment;
};
// Example usage: 
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  function increment() {
    console.log(++count);
  }

  function decrement() {
    console.log(--count);
  }

  return {
    increment: increment,
    decrement: decrement
  };
};

const doubleCounter = counterFactory();
doubleCounter.increment();
doubleCounter.increment();
doubleCounter.decrement();
doubleCounter.decrement();
