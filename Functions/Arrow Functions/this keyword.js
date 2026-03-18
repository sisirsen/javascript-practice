// const x={
//   name:"sisir",
//   role:"js developer",
//   salary:"100k",

//   show : function (){
//         console.log(`the name is ${this.name}`);
//         console.log(`the role is ${this.role}`);
//         console.log(`the salary is ${this.salary}`);
        
//       }
//   }
// x.show()



// another way*****;

const y={
  name:"sisir",
  role:"js developer",
  salary:"100k",

  show :function (){
   let that=this;
    setTimeout(function() {
        console.log(`the name is ${that.name}`);
        console.log(`the role is ${that.role}`);
        console.log(`the salary is ${that.salary}`);
        
      }, 2000);
  }
}
y.show()

