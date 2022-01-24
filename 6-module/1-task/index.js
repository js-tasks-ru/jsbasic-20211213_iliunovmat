/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  
  constructor(rows) {
    this._rows = rows;
    this._wholeTable = this.createTable();
  }

  get elem() {
    return this._wholeTable;
  }
  //create table via calls of methods
  createTable() {
    let table = document.createElement("table");
    let header = this.createHeader();
    let body = this.createBody();
    
    table.appendChild(header);
    table.appendChild(body);
    return table;
    
  }
  //create thead with tr via getting keys from the first object in array rows.
  createHeader() {
    let head = document.createElement("thead");
    let row = document.createElement("tr");
    head.appendChild(row);
    for (let i = 0; i < Object.keys(this._rows[0]).length; i++) {
      let headCell = document.createElement("td");
      headCell.textContent = Object.keys(this._rows[0])[i];
      row.appendChild(headCell);
    }
    return head;
    
  }
  //delete current row via index
  deleteRow() {
    let i = this.parentNode.parentNode.rowIndex;
    document.getElementById("tableBody").deleteRow(i - 1);
  }
  //create tbody, tr and td via 2 for loops
  createBody() {
    let body = document.createElement("tbody");
    body.setAttribute("id", "tableBody");
    //1 for loop creates row, 2 for loop creates cells and button
    for (let i = 0; i < this._rows.length; i++) {
      let row = document.createElement("tr");
      body.appendChild(row);
      
      for (let j = 0; j < Object.keys(this._rows[0]).length + 1; j++) {
        let butn = document.createElement("button");
        butn.innerHTML = "X";
        butn.addEventListener("click", this.deleteRow);
        let cell = document.createElement("td");
        
        if (j + 1 === Object.keys(this._rows[i]).length + 1) {
          cell.append(butn);
          row.appendChild(cell);
        } else if (j + 1 != Object.keys(this._rows[i]).length + 1) {
          cell.textContent = Object.values(this._rows[i])[j];
          row.appendChild(cell);
        }
      }     
    }
    return body;
  }
  
}




