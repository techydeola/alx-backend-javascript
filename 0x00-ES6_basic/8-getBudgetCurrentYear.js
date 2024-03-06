function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const key1 = `income-${getCurrentYear()}`;
  const key2 = `gdp-${getCurrentYear()}`;
  const key3 = `capita-${getCurrentYear()}`;
  const budget = {
    [key1]: income,
    [key2]: gdp,
    [key3]: capita,
  };

  return budget;
}
