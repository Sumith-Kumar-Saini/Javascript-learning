// The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value. And it can be change in any line of code.
var a = 12;
console.log("var " + a);

{
  var a = 23;
  console.log("In section " + a);
}

console.log("final output " + a);

// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value. And it cannot be change the main value in any obj or function

let b = 12;
console.log("let " + b);

{
  let b = 2;
  console.log("In section " + b);
}

console.log("final output " + b);

// The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

const c = 12;
console.log("const" + c);

{
  c = 34;
  console.log("In section " + c);
}

console.log("final output " + c);


// Output

// var 12
// In section 23
// final output 23
// let 12
// In section 2
// final output 12
// const12

// c = 34;
//   ^
// TypeError: Assignment to constant variable.