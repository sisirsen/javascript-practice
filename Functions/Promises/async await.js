const promise=new Promise(function(resolve,reject){
  setTimeout(()=>{
    let error=true;
    if (!error) {
      resolve({username:"sisir",password:"12345"})
    }else{
      reject("ERROR:whats on your mind")
    }
  },2000)
})

async function takePromise() {
  try {
    const response= await promise
  console.log(response);
  } catch (error) {
    console.log(error);
    
  }
  
}
takePromise();