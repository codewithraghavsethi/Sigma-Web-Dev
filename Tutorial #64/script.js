let rand = Math.random();
let first, second, third;
// 0 0.33 0.66 1

//--Let's Genrate the First Word--
if(rand<0.33){
    first = "Raghav";
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing";
}
else{
    first = "Sethi";
}


//--Let's Genrate the Second Word--
if(rand<0.33){
    second = "Engine";
}
else if(rand<0.66 && rand>=0.33){
    second = "Food";
}
else{
    second = "Garment";
}

//--Let's Genrate the Third Word--
if(rand<0.33){
    third = "Limited";
}
else if(rand<0.66 && rand>=0.33){
    third = "Enterprises";
}
else{
    third = "Company";
}

console.log(`${first} ${second} ${third}`);
