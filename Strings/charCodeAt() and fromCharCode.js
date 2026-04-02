//charCodeAt();

let str="sisir";

let newStr=str.charCodeAt(0);

console.log(newStr);


//fromCharCode();

let newStr1=String.fromCharCode(97);

console.log(newStr1);



for (let i = 65; i <= 70; i++) {
  console.log(i, String.fromCharCode(i));
}


console.log('a to z print');


for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  console.log(i, String.fromCharCode(i));
}


