function factorial(n) {
  // ваш код...
  let factRes = 1;
  for (let i = n; i > 0; i--) {
    factRes *= i;
  }
  return factRes;
}
