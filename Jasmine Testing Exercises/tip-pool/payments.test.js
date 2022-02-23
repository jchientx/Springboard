describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    billAmtInput.value = 150;
    tipAmtInput.value = 30;
  });

  it("should add a new payment to allPayments on submitPaymentInfo()", function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("150");
    expect(allPayments["payment1"].tipAmt).toEqual("30"); //=> user input will always be string type
    expect(allPayments["payment1"].tipPercent).toEqual(20); //Why not "20"? => Math.round return number type
  });

  it("should not add a new payment with empty value to allPayments on submitPaymentInfo()", function () {
    billAmtInput.value = "";
    // tipAmtInput.value = "" => no conditional, so each one works
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it("should create a new payment on createCurPayment()", function () {
    let curPayment = createCurPayment();
    let expected = {
      billAmt: "150",
      tipAmt: "30",
      tipPercent: 20, //Why not "20"? => calculateTipPercent(): Math.round returns number
    };

    expect(expected).toEqual(curPayment);
  });

  it("should not create a new payment with empty value on createCurPayment()", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  });

  it("should update #paymentTable on appendPaymentTable(curPayment)", function () {
    let curPayment = createCurPayment();
    allPayments["payment2"] = curPayment; //? => payment1, payment2 all works
    appendPaymentTable(curPayment);

    let paymentTable = document.querySelectorAll("#paymentTable tbody tr td");
    expect(paymentTable.length).toEqual(4);
    expect(paymentTable[0].innerText).toEqual("$150");
    expect(paymentTable[1].innerText).toEqual("$30");
    expect(paymentTable[2].innerText).toEqual("20%");
    expect(paymentTable[3].innerText).toEqual("X");
  });

  it("should update #summaryTable on updateSummary()", function () {
    let curPayment = createCurPayment();
    allPayments["payment1"] = curPayment;
    updateSummary();

    let summaryTable = document.querySelectorAll("#summaryTable tbody tr td");
    expect(summaryTable.length).toEqual(3);
    expect(summaryTable[0].innerText).toEqual("$150");
    expect(summaryTable[1].innerText).toEqual("$30");
    expect(summaryTable[2].innerText).toEqual("20%");
  });

  afterEach(function () {
    // Clean up the dom after the test is run
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    billAmtInput.value = "";
    tipAmtInput.value = "";
  });
});
