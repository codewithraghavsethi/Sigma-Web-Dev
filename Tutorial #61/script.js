let random = Math.random();
console.log(random);
let a = prompt("Enter Your Number");
let c = prompt("Enter Your Opration");
let b = prompt("Enter Your Number");

let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*",
}

if(random > 0.1){
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
    console.log(`The Result is ${a} ${c} ${b}`);
}
else{
    c = obj[c]
    alert(`The Result is ${eval( `${a} ${c} ${b}`)}`)
    console.log(`The Result is ${a} ${c} ${b}`);
}



