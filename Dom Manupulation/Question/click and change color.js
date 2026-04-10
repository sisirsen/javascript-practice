let buton = document.querySelector("#btn");
let color = document.querySelector(".color");

buton.addEventListener("click", () => {
  color.classList.toggle("red");
});

