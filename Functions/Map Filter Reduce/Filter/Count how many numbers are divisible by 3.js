let arr= [1,2,3,4,5,6,7,8,9,10,12];

let count =0;

let countNums=arr.filter((nums)=>{
  if (nums%3==0) {
    count++;
    return count;
    }
}
)
console.log(count);

