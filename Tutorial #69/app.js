let a = 10

function raghav(number){
    let ff = 1;
    for (let index = 1; index<=number; index++){
        ff = ff * index
        console.log(index);
    }
    return ff
}
console.log(raghav(a));
