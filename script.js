const btnCheck = document.querySelector(".btn");

btnCheck.addEventListener("click", function () {
  const input = document.querySelector(".guess").value;
  document.querySelector("body").style.backgroundColor = input;
});
