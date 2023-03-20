export default function createIteratorObject(report) {
  const employeesArray = [];
  for (let idx of Object.values(report.allEmployees)) {
    employeesArray.push(...idx);
  }
  return employeesArray;
}
