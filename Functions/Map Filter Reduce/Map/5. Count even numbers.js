// Input: [1,2,3,4]
// Output: 2


let input=[1,2,3,4];

let count=0;

let countEven=input.map((nums)=>{
  if (nums%2===0) {
    count++;
    
  }
})
console.log(count);