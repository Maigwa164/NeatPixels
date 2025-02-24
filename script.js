const btnCheck = document.querySelector(".btn");
const btnCart = document.querySelector(".btn");

// btnCheck.addEventListener("click", function () {
//   const input = document.querySelector(".guess").value;
//   document.querySelector("body").style.backgroundColor = input;
// });

btnCart.addEventListener("click", function () {
  document.querySelector("img").style.filter = "blur(5px)";
});
