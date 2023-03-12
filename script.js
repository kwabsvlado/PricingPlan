const priceHeader = document.getElementById("price");
const slider = document.getElementById("slider");
const billingBtn = document.querySelector(".billingBtn");
const perMonth = document.getElementById("permonth");

billingBtn.addEventListener("click", function () {
  billingBtn.classList.toggle("active");
  if (perMonth.innerText === "/year") {
    perMonth.innerText = "/month";
  } else {
    perMonth.innerText = "/year";
  }
});

slider.oninput = function () {
  priceHeader.innerHTML = '$' + this.value + ' '
}; 
