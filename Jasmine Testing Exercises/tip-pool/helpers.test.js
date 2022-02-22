describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    billAmtInput.value = 150;
    tipAmtInput.value = 30;
    submitPaymentInfo(); //Why?
  });

  it("should sum total bill, tip, and tip percent of all payments on sumPaymentTotal(type)", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(150); //Why not "150"?
    expect(sumPaymentTotal("tipAmt")).toEqual(30);
    expect(sumPaymentTotal("tipPercent")).toEqual(20);

    billAmtInput.value = 250;
    tipAmtInput.value = 70;

    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(400);
    expect(sumPaymentTotal("tipAmt")).toEqual(100);
    expect(sumPaymentTotal("tipPercent")).toEqual(48); //20+28
  });

  it("should converts the bill and tip amount into a tip percent on calculateTipPercent(billAmt, tipAmt)", function () {
    expect(calculateTipPercent(100, 25)).toEqual(25);
    expect(calculateTipPercent(486, 80)).toEqual(16);
  });

  it("should appends a newly created td element from the value on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "value");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("value");
  });

  afterEach(function () {
    // Clean up the dom after the test is run
    // Why are the same as payments.test.js?
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
