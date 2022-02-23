// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement("td");
  newTd.innerText = value;

  tr.append(newTd);
}

// append delete button and click for deleting the table row it belongs to
function appendDeleteBtn(tr, serverOrPayment) {
  let newBtn = document.createElement("td");
  newBtn.className = "deleteBtn";
  newBtn.innerText = "X";

  newBtn.addEventListener("click", removeTr);

  tr.append(newBtn);
}

// remove the parent ‘tr’ from the dom
function removeTr(event) {
  // access the parent row of the ‘td’ from the click event
  let removeTarget = event.target.closest("tr");

  delete allServers[removeTarget.id]; // use delete for allServer objects

  removeTarget.parentNode.removeChild(removeTarget); //.parentElement also works
  updateServerTable();
}
