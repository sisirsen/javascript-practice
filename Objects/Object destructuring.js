let obj={
  name:"sisir",
  job:"js developer",
  location: "kolkata"
};

let newobj = {
  name:username,
  job:naukri
}=obj;

console.log(username);


const user = {
  name: "Sisir",
  age: 21
};
const { name, age, country = "India" } = user;

console.log(country);// here country will be added to the main obj


const user2 = {
  name: "Sisir",
  age: 21
};
const {age:newAge=22} = user2;
console.log(newAge);// it will print 21 because age is already defined.


const user3 = {
  name: "Sisir",
  age: 21
};

user2.age = 30;

console.log(user2.age); // here we can update the age
