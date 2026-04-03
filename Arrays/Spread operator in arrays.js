let arr=[1,2,3,4,5,6,7,8,9]

arr[1]=5;

let newArr=[...arr]
console.log(newArr);



let arr2=[1,2,3,4,5,6,7,8,9]
let newArr2=[arr[1]=5,...arr]
console.log(newArr);

//both are same just declaration difference.