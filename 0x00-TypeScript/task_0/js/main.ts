/** Renders table based on a list of objects */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Nasser',
    lastName: 'Abuchaibe',
    age: 38,
    location: 'San Marcos',
  }
  
  const student2: Student = {
    firstName: 'Siad',
    lastName: 'Abuchaibe',
    age: 9,
    location: 'San Marcos',
  }
  
  const studentList: Array<Student> = [student1, student2];
  
  const table: HTMLTableElement = document.createElement('table');
  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  
  studentList.forEach((obj) => {
    const row: HTMLTableRowElement  = document.createElement('tr');
    const cellName: HTMLTableCellElement = document.createElement('td');
    const cellLocation: HTMLTableCellElement = document.createElement('td');
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table); 