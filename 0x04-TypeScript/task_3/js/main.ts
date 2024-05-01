import { RowID, RowElement } from "./interface";
import * as CRUD from "./js/crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row ${newRowID}`);

const updatedRow: RowElement = {
  ...row,
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, updatedRow);`);
console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});`);
console.log(`// Delete row id ${newRowID}`);
