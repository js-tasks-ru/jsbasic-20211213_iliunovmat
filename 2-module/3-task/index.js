let calculator = {
  // ваш код
  firstDigit: 0,
  secondDigit: 0,
  read(a, b) {
    firstDigit = a;
    secondDigit = b;
  },
  sum() {
    return firstDigit + secondDigit;
  },
  mul() {
    return firstDigit * secondDigit;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
