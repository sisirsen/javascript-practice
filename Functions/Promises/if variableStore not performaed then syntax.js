new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("Executed");  
      resolve();    
    },2000)
})
.then(function(){
  console.log("promise resolved");
  
});