// Number
var first = 12.0;
var second = 0x37cf;
var third = 255;
var fourth = 57;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
// String
var empName = "jignasha";
var empDept = "IT";
var stmt = empName + " works in " + empDept;
console.log(stmt);
//Boolean
var b = true;
console.log(b);
//void
function hello() {
    console.log("This is welcome message");
}
//Null
var num1 = null;
num1 = 100;
console.log(num1);
//undefined
var num2 = undefined;
num2 = 200;
console.log(num2);
//Any
var val = "hi";
val = 100;
console.log(val);
val = false;
console.log(val);
// how to use any type in a function
function myFunction(x, y) {
    console.log(x + y);
}
myFunction(10, 20);
myFunction("hi", "welcome");
