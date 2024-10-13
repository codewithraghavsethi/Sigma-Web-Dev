console.log("script.js Initializing");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

function randomColor(){
    let colorVal1 = Math.ceil(0 + Math.random() * 255);
    let colorVal2 = Math.ceil(0 + Math.random() * 255);
    let colorVal3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${colorVal1} ${colorVal2} ${colorVal3} )`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = randomColor();
    e.style.color = randomColor();
})

