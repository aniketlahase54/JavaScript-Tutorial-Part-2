let str="Aniket Lahase";

console.log(str.length);

console.log(str[2]);
 

// template Literals;
// string interpolation;

let obj = {
    item: "pen",
    price : 10
}

let op= `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(op)

str="Aniket Lahase   ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(1,4));

str1 = "Aniket";
str2 = "Lahase";

console.log(str2.concat(str1));

str = "hello";
console.log(str.replace("h","m"));
console.log(str.charAt(3))
