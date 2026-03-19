// const print=(x)=>{
//     console.log("a");
//     x();
// }

// function print2(){
//     console.log("b");
    
// }
// print(print2);

// function test(fn) {
//   console.log("1");
//   fn();
//   console.log("3");
// }

// function say() {
//   console.log("2");
// }

// test(say);

// // output
// // 1
// // 2
// // 3

// function test(fn) {
//   console.log("A");
// }

// function say() {
//   console.log("B");
// }

// test(say());

// // output

// // Error

// function outer(fn) {
//   console.log("start");
//   fn();
//   console.log("end");
// }

// outer(() => {
//   console.log("middle");
// });

// // output

// // start
// // middle
// // end


// function run(fn) {
//   fn;
// }

// run(() => {
//   console.log("hello");
// });

// // output

// // error


// function test(fn) {
//   fn();
// }

// test(() => {
//   console.log("inside");
// });

// test(fn);

// //  output is error no need to call again


// function process(fn) {
//   console.log("A");
//   fn();
//   console.log("C");
// }

// process(() => {
//   console.log("B");
// });

// // output
// // A
// // B
// // C


// function test(fn) {
//   return fn;
// }

// function say() {
//   console.log("Hello");
// }

// let x = test(say);
// x();

// //output 
// // Hello
