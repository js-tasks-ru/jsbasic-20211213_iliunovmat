function sumSalary(salaries) {
  // ваш код...
  const entries = Object.entries(salaries);
  let sum = 0;
  for(let i = 0; i < entries.length; i++) {
    if (Number.isInteger(entries[i][1]) && !isNaN(entries[i][1]) &&
        entries[i][1] !== Infinity &&
        entries[i][1] !== -Infinity) {
      
      sum += entries[i][1];
    }
  }
  if (sum === 0) {
    return 0;
  } else {
    return sum;
  }
}
