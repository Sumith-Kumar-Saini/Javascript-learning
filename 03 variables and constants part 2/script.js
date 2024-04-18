// the variables is the number, string or any value which can change letar like by using the var or let

let a = 5;

console.log("the real value " + a);

a = 8;

console.log("final value " + a);

// the constants is the number, string or any value which cannot be change letar like by using const

const c = 23;

console.log("the real value " + c);

c = 67;
//     ^
// cnanot be change

console.log("final value " + c);

// fianl Output 

// the real value 5
// final value 8
// the real value 23

// c = 67;
//   ^
// TypeError: Assignment to constant variable.