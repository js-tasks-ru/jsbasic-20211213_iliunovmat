function camelize(str) {
  // ваш код...
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr.splice(i, 1);
    }
  }
  return arr.join(''); 
}
