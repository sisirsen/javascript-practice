// Input: [1,2,3,4]
// Output: 10

let input= [1,2,3,4];
let init=0;

let output=input.reduce((acc,currval)=>{
    console.log(`acc:${acc} & currval:${currval}`);
    
    return acc + currval
},init);

console.log(output);
