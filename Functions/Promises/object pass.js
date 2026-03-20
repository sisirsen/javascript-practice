new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("Executed");  
      resolve({username:"sisir",password:"12345"});    
    },2000)
})
.then(function(user){
  console.log(user);
  
});


