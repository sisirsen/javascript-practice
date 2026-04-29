// Array.slice()


let arr = [1,2,3,4,5,6,7,8,9,0];
console.log(arr.slice(2,5)); // safe approach
// array.slice(start, end)


// Array.splice()

let arr_1=[2,3,4,5,6,7,7,8,9,0]
let newArr= arr_1.splice(2,9)
console.log(newArr);
console.log(arr_1); 

// arr.splice(start, deleteCount),  deletecount = the number we gave that much amount of element will extract .

// dengerous approach it also changes the original array
