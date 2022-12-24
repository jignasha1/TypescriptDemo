var myString = "welcome to typescript";
//charat()
console.log(myString.charAt(1));
console.log(myString.charAt(2));
//concat()
var str1 = "welcome";
var str2 = " To Typescript";
var str3 = " and protractor";
console.log(str1.concat(str2).concat(str3));
//replace()
var str = "Typescript Programming";
console.log(str.replace('i', 'a'));
console.log(str.replace('Type', 'Java'));
//split()
var fruits = "Mango,Banana,Orange";
console.log(fruits.split(','));
console.log(fruits.split(',', 2)); //first 2 parts will be return
//substring
str = "Welcome";
console.log(str.substring(0, 3));
//touppercase() & tolowercase()
str = "Typescript programming";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
//trim() > trim spces
var str5 = "      jignasha    ";
console.log(str.trim());
//console.log(str.trimLeft());
//console.log(str.trimRight());
console.log(str5.trimStart());
console.log(str5.trimEnd());
