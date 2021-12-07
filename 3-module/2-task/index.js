function filterRange(arr, a, b) {
  // ваш код...
  let res = [];
  for (let digit in arr) {
    if (arr[digit] >= a && arr[digit] <= b) {
      res.push(arr[digit]); 
    }
  }
  return res;
}
