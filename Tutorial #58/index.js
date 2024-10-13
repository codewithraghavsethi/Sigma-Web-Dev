// Function -----------------------------------------
function nice(name){
    console.log("Hey " + name + " your are nice!");
    console.log("Hey " + name + " your are good!");
    console.log("Hey " + name + " your are great!");
    console.log("Hey " + name + " your are goat!");
    console.log("Hey " + name + " your are awsome!");
}

nice("Raghav");
nice("Sethi");
nice("Ram");

function sum(a, b){
    console.log(a+b);
}
result1 = sum(3,5);
result2 = sum(4,5);
result3 = sum(2,5);
result4 = sum(8,1);

//Arrow Function -----------------------------------

let arr = (a, b, c) =>{
    let x = (a + b + c) ;
    return x ;
}

let total = arr(1,2,3);
console.log(total);

// ==================================================
