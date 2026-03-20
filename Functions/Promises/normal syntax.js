// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       console.log("Executed");  
//       resolve();    
//     },2000)
// });
// promiseOne.then(function(){
//   console.log("promise resolved");
  
// })



// if setTimeout is not used;

const promiseOne=new Promise(function(resolve,reject){
    
      console.log("Executed");  
      resolve();    
   
});
promiseOne.then(function(){
  console.log("promise resolved");
  
})
