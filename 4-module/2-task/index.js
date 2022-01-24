function makeDiagonalRed(table) {
  // ваш код...
  
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      let value1 = table.rows[i].cells[j].textContent;
      let digit1 = parseInt(value1[0]);
      let digit2 = parseInt(value1[2]);
      if (digit1 % digit2 == 0) {
        table.rows[i].cells[j].style.backgroundColor = "red";
        break;
      }
    }
  }
}
