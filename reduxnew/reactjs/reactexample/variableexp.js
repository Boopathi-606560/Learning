
/*
variable types

let name="cat";   // type of this varible is string ,   primitive value  , wrapper class String
let empId=123;     // type of this varible is number ,   primitive value  , wrapper class Number
let  statusOfTransaction =false; // type of this varible is boolean ,   primitive value  , wrapper class Boolean

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#data_and_structure_types
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values
The latest ECMAScript standard defines nine types:

Six Data Types that are primitives, checked by typeof operator:
undefined : typeof instance === "undefined"
Boolean : typeof instance === "boolean"
Number : typeof instance === "number"
String : typeof instance === "string"
BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"
Structural Types:
Object : typeof instance === "object". Special non-data but Structural type for any constructed object instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
Function : a non-data structure, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.
Structural Root Primitive:
null : typeof instance === "object". Special primitive type having additional usage for its value: if object is not inherited, then null is shown;


Determining types using the typeof operator
The typeof operator can help you to find the type of your variable.


*/




function total(){
	
	let emp={}
	
	if(typeof emp==='object'){
		console.log("true")
	}else{
		console.log("false")
		console.log(emp)

	}

}

function addNum(mark1 , mark2){

let totalMark = mark1 + mark2;
console.log(totalMark);	
	
}

//addNum(80,34);


function varexp(){
var  x = 10;
// Here x is 10
{  
var x = 2;
// Here x is 2
}
console.log(x);
}

//varexp();



function letexp(){
let  x = 10;
// Here x is 10

{  
let x = 2;
// Here x is 2
}

console.log(x);
}

letexp();


// constant





//Array
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");


But you can NOT reassign the array:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR


literal object declaration
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

