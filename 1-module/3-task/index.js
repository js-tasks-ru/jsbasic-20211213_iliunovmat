function ucFirst(str) {
  // ваш код...
  if (str == null || str == "") {
    return str;
  } else {
    return str[0].toUpperCase() + str.substring(1);
  }
}
