// An array is a special variable, which can hold more than one value

let arr = ["sumith", "poop", "noon"];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(arr[index]);
}

// push pop shift unshift splice

let array = [1, 2, 3, 4, 5, 6];
// to add a extra member number, string or any thing in last side
array.push(7);

// to remove a member number, string or any thing in last side
array.pop();

// to add a extra member number, string or any thing in starting side
array.unshift(0);

// to remove a member number, string or any thing in starting side
array.shift();

// to remove a member number, string or any thing in any side
array.splice(2, 2);
