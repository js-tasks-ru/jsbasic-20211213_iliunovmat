function getMinMax(str) {
  // ваш код...
  let max = 0;
  let min = 0;
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i ++) {
    if (!isNaN(+arr[i])) {
      if (+arr[i] < min) {
        min = +arr[i];
      }
      if (+arr[i] > max) {
        max = +arr[i];
      }
    }
  }
  return {
    min: min,
    max: max
  };
}
