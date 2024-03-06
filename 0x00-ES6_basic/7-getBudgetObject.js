export default function getBudgetObject(...arr) {
  const iter = arr[Symbol.iterator]();
  const budget = {
    income: iter.next().value,
    gdp: iter.next().value,
    capita: iter.next().value,
  };

  return budget;
}
