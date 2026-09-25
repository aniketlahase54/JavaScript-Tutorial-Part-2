function hello(){
    console.log("hello function")
};

hello(); //calling function

for(i=1;i<=10;i++){
    hello();
}

function add(a,b){
    console.log(a+b)
};

add(5,2);
add(10,7);
add(134,76);
add(10,20,30); //ignore 3rd value
add(10); //NAN not a number - 10  b-undefined 10 + undefined = NAN
add();
add("Aniket","Lahase");
add("Aniket",20);
add(20,"Aniket");
add(true,true);
add(true,false);
add(false,false);
add(10,true);
add("Aniket",true);

function get(){
    return 100
};
x = get();
console.log(x);
console.log(get());

function get(){
    return ["aniket","lahase","pune",45000]
};

console.log(get());



// the function which dont have any name is called anonymos function
x = function(a,b){
    console.log("function expression",a+b);
}

x(12,8);

function show(x){
     console.log(x);
     x()
}

// show - high order function => the function which taking argument as a another function
// callback function => the function we are passing to another function as a argument

show(function(){
    city = "pune";
    console.log("my city :",city)
})


function show(x){
    console.log(x);
    x()
}

function greet(){
    console.log("greet function");
}

// high order = show;
// callback = greet;

show(greet)


// arrow function;

x = (a,b)=>{
    console.log("Arrow function",a+b)
}

x(16,4);

function display(name,city="pune"){
    console.log(name);
    console.log(city);
}
display("Aniket","Mumbai")
display("Rahul")  


function outer(){
    console.log("outer function")
    function inner(){
        console.log("inner function")
    }
    inner()
}

outer()


