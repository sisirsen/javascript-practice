const shoppingCart=[
  {
  item:"Shirt",
  price:1000
  },
  {
  item:"Shoe",
  price:2000
  },
  {
  item:"pants",
  price:3000
  },
  {
  item:"underwear",
  price:200
  }
];

const totalPrice=shoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log(totalPrice);
