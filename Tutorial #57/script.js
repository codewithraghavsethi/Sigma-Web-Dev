console.log("I am loop");

let a = 1;
console.log(a);
console.log(a + 1);
console.log(a + 2);

//-- for loop -------------------------------------

for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

//-- for in loop -----------------------------------

let obj = {
  firstName: "Raghav",
  lastName: "Sethi",
  age: 24,
  company: "Sethi Tech",
};

for (let c in obj) {
  console.log(c + " : " + obj[c]);
}

//-- for of loop ------------------------------------

// first method
for (const c of "Raghav") {
  console.log(c);
}

// second method
let naam = "SETHIRAGHAV";

for (let i of naam) {
  console.log(i);
}

//-- while loop ---------------------------------

/*
let ab = 0;
while (ab < 5) {
    console.log(ab);
    ab++; 
}

*/

//-- do while loop ------------------------------

let i = 12;
do {
  console.log(i);
  i++;
} while (i < 10);

//----------------------------------------------