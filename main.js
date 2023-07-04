const checkClick = document.getElementById("button-click");
const priceAnnual = document.getElementById("plan-price-annual");
const priceMonth = document.getElementById("plan-price-month");
const planTypeAnnual = document.getElementById("plan-type-annual");
const planTypeMonth = document.getElementById("plan-type-month");

let switchAnnual = false;

checkClick.addEventListener("change", function (event) {
  if (switchAnnual == false) {
    annualPrices();
    switchAnnual = true;
  } else if (switchAnnual == true) {
    monthPrices();
    switchAnnual = false;
  }
});

function monthPrices() {
  priceAnnual.textContent = "$36";
  planTypeAnnual.textContent = "/month";
  priceMonth.textContent = "$24";
  planTypeMonth.textContent = "/month";

}
function annualPrices() {
  priceAnnual.textContent = "$99.99";
  planTypeAnnual.textContent = "/year";
  priceMonth.textContent = "$59.99";
  planTypeMonth.textContent = "/year";
}