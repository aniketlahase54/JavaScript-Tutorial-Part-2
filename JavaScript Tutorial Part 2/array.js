let students = ["aniket","om","rahul","vaibhav"];
console.log(students);

details = [101,"Aniket",54.90,true];
console.log(details);

console.log(students[0]);
// console.log(students[-1]); invalid 
console.log(students.at(-1));

let products = new Array("laptop" ,"mobile","phone");  //most common array literal

products = new Array("laptop" ,"mobile","phone");  //using new keyword
console.log(products);

let numbers= [34,45,76,98,2,6,76];
console.log(numbers.length);

numbers[1] = 700;

console.log(numbers);

numbers.push(120);
numbers.push(220,230,"aniket")
console.log(numbers);

numbers.unshift("Lahase");
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log(numbers.indexOf(76));
console.log(numbers.lastIndexOf(76));

console.log(numbers.includes(120));
console.log(numbers.includes(20));

let frontend = ["HTML","CSS","JS","React"];
let backend = ["Python","Django","NodeJs"];

console.log(frontend.join(" | "));

combo = frontend.concat(backend);
console.log(combo);

console.log(frontend.slice(1,3));

console.log(frontend.splice(1,0,"Aniket","Lahase"));
console.log(frontend);

console.log(frontend.reverse());
console.log(frontend.sort());

console.log(numbers.sort());  //defalt it taking string for sort 


