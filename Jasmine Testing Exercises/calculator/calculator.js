window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initialValue = { amount: 100, years: 5, rate: 1.8 };
  const amountInitial = document.getElementById("loan-amount");
  amountInitial.value = initialValue.amount;
  const yearsInitial = document.getElementById("loan-years");
  yearsInitial.value = initialValue.years;
  const rateInitial = document.getElementById("loan-rate");
  rateInitial.value = initialValue.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUI = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUI));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = values.rate / 100 / 12;
  const n = values.years * 12;
  const monthlyPayment = (p * i) / (1 - (1 + i) ** -n);
  const calculated = (Math.round(monthlyPayment * 100) / 100).toFixed(2);
  return calculated;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.getElementById("monthly-payment");
  monthlyPaymentUI.innerText = "$" + monthly;
}
