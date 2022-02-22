it("should calculate the monthly rate correctly", function () {
  const test = {
    amount: 20000,
    years: 10,
    rate: 2.5,
  };
  expect(calculateMonthlyPayment(test)).toEqual("188.54");
});

it("should return a result with 2 decimal places", function () {
  const test = {
    amount: 10000,
    years: 10,
    rate: 1.75,
  };
  expect(calculateMonthlyPayment(test)).toEqual("90.90");
});

/// etc
