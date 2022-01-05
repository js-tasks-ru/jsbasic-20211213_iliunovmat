function highlight(table) {
  // ваш код...
 
  for (let i = 0; i < table.rows.length - 1; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
     
      let valueText = table.tBodies[0].rows[i].cells[j].textContent;
      let valueCell = table.tBodies[0].rows[i].cells[j];
      
      if (Number.isInteger(parseInt(valueText)) === true) {
        if (parseInt(valueText) < 18) {
          table.tBodies[0].rows[i].setAttribute(`style`, `text-decoration: line-through`);
          continue;
        }
      } else if (valueText === "m") {
        table.tBodies[0].rows[i].classList.add('male');
        continue;
      } else if (valueText === "f") { 
        table.tBodies[0].rows[i].classList.add('female');
        continue;
      }
      
      
      if (table.tBodies[0].rows[i].cells[table.tBodies[0].rows[i].cells.length - 1].hasAttribute("data-available")) {
        let statusValue = valueCell.getAttribute("data-available");
        if (statusValue === "true") {
          table.tBodies[0].rows[i].classList.add('available');
        } else if (statusValue === "false") {
          table.tBodies[0].rows[i].classList.add('unavailable');
        }
      } else if (table.tBodies[0].rows[i].cells[table.tBodies[0].rows[i].cells.length - 1].hasAttribute("data-available") === false) {
        table.tBodies[0].rows[i].setAttribute("hidden", true);
      }
      
     
    }

  }
  
}
