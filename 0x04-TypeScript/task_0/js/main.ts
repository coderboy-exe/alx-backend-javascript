interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const student1: Student = {
  firstName: 'Agba',
  lastName: 'Baller',
  age: 22,
  location: 'North London',
};

const student2: Student = {
  firstName: 'Uchechukwu',
  lastName: 'Ottah',
  age: 24,
  location: 'Abuja',
};

const studentsList: Array<Student> = [ student1, student2 ];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const thead: HTMLTableSectionElement = document.createElement('thead');

const header = thead.insertRow();
const header1 = row.insertCell();
const header2 = row.insertCell();
header1.innerHTML = 'First Name';
header2.insertHTML = 'Location';

  studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
  });

table.appendChild(tbody);
body.appendChild(table);
