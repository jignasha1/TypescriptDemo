// Number

var first:number=12.0;
var second:number=0x37cf;
var third:number=0o377;
var fourth:number=0b111001;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// String
var empName:string="jignasha";
var empDept:string="IT";
var stmt:string=empName+" works in "+empDept;
console.log(stmt);

//Boolean
var b:boolean=true;
console.log(b);

//void
function hello():void
{
    console.log("This is welcome message")
}

//Null
var num1:number=null;
num1=100;
console.log(num1);
//undefined
var num2:number=undefined;
num2=200;
console.log(num2);

//Any
var val:any="hi";
val = 100;
console.log(val);
val=false;
console.log(val);

// how to use any type in a function
function myFunction(x:any,y:any)
{
    console.log(x+y);
}

myFunction(10,20);
myFunction("hi","welcome");