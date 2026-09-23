let age = 12;

if (age >= 18){
    console.log("we can vote");
}
else{
    console.log("we cannot vote");
}


let num = 12;

if (num % 2 === 0){
    console.log("Num is even");
}
else{
    console.log("Num is odd");
}

else if statements

let mode = "dark";
let color;

if (mode === "dark"){
    color ="black";
}
else if (mode === "blue"){
    color = "blue";
}
else if (mode === "pink"){
    color = "pink";
}
else{
    color = "white"
}

console.log(color)


Ternary operators
let age = 24;

let result = age > 18 ? "adult":"not adult";

console.log(result)