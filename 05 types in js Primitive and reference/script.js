// The types can be divided into two groups: primitive types and reference types. Numbers, boolean values, and the null and undefined types are primitive. Objects, arrays, and functions are reference types.

// A primitive type has a fixed size in memory. For example, a number occupies eight bytes of memory, and a boolean value can be represented with only one bit. The number type is the largest of the primitive types. If each JavaScript variable reserves eight bytes of memory, the variable can directly hold any primitive value.

// Reference types are another matter, however. Objects, for example, can be of any length -- they do not have a fixed size. The same is true of arrays: an array can have any number of elements. Similarly, a function can contain any amount of JavaScript code. Since these types do not have a fixed size, their values cannot be stored directly in the eight bytes of memory associated with each variable. Instead, the variable stores a reference to the value. Typically, this reference is some form of pointer or memory address. It is not the data value itself, but it tells the variable where to look to find the value.

//primitive

let number = 369; // Numbers

let string = "hello"; // Strings

let boolean_with_true = true;
let boolean_with_false = false; // Booleans

let null_value = null; // Null

let undefined_value; // undefined

// Reference

let obj = {}; // Objects

let arr = [1, 2, "jv", null]; // arrays

function name(params) {} // function

// primitives = number, string, null, undefined, boolean
// reference = [] () {}

// For primitives
var a = 12;
var b = a;
b = b + 2;
console.log("a value " + a);
console.log("b value " + b);

// For reference
var ar = [1, 2, 3, 4, 5];
var br = ar;
br.pop();
console.log("ar value " + ar);
console.log("br value " + br);

// Output

// a value 12
// b value 14
// ar value 1,2,3,4
// br value 1,2,3,4