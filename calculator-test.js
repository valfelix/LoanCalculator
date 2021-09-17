
it("should calculate the monthly rate correctly", function () {
  const values = { amount: 10000, years: 10, rate: 2.5 };
  expect(calculateMonthlyPayment(values)).toEqual("94.27");
});

it("should return a result with 2 decimal places", function() {
  const values = { amount: 11415, years: 10, rate: 1 };
  expect(calculateMonthlyPayment(values)).toEqual("100.00");
});

it("should accept small rates", function() {
  const values = { amount: 10000, years: 1, rate: 0.01 };
  expect(calculateMonthlyPayment(values)).toEqual("833.38");
});

it("should accept large amounts", function() {
  const values = { amount: 1000000, years: 10, rate: 2.5 };
  expect(calculateMonthlyPayment(values)).toEqual("9426.99");
});

it("should accept 0 as rate", function() {
  const values = { amount: 12000, years: 1, rate: 0 };
  expect(calculateMonthlyPayment(values)).toEqual("1000.00");
});
