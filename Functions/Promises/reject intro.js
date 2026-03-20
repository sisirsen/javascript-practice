const promise=new Promise(function(resolve,reject){
  setTimeout(()=>{
    let error=false;
    if (!error) {
      resolve({username:"sisir",password:"12345"})
    }else{
      reject("ERROR:whats on your mind")
    }
  },2000)
})
promise.then(function(user){
  console.log(user);
  return user.username;
  
}).then((username)=>console.log(username)
).catch((error)=>console.log(error)
)