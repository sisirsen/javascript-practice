const promise=new Promise(function(resolve,reject){
  setTimeout(()=>{
    let error=true;
    if (!error) {
      resolve({username:"sisir",})
    }
  },2000)
})