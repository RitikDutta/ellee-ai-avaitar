const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const formatINR = (value) => {
  const numericValue = Number(value);
  return inrFormatter.format(Number.isFinite(numericValue) ? numericValue : 0);
};
