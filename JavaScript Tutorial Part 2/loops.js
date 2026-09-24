// for loop

for(let i=0; i<=5; i++)
     {
    console.log("Aniket Lahase")
    }

// calculates sum of 1 to 5

let sum = 0;

for(let i=1; i<=5; i++) {
    sum+=i
}

console.log(sum)


// while loops

let i = 1;
while (i<=5){
    console.log(i);
    i++;

}


// do while loops

let i = 1;
do {
    console.log(i);
    i++;
} while(i <= 5);


// for of loops;

let name = "Aniket Lahase";

for(let i of name){
    console.log(i)
}

// for in loop

let student = {
    name : "Aniket Lahase",
    age : 23,
    cgpa : 6.85,
    isPass : true

};

for (let key in student) {
    console.log(key,":",student[key])
}


// print all even numbers from 0 to 100

for(let i =0; i<=100; i++) {
    if(i%2===0){
        console.log(i)
    }
}