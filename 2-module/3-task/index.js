let calculator = {
  // ваш код
  firstDigit: 0,
  secondDigit: 0,
  read(a, b) {
    this.firstDigit = a;
    this.secondDigit = b;
  },
  sum() {
    return this.firstDigit + this.secondDigit;
  },
  mul() {
    return this.firstDigit * this.secondDigit;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

