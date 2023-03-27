const getStudentIdsSum = (studentArr) => {
  const studentIds = studentArr.map((student) => student.id);
  return studentIds.reduce((sum, currVal) => sum + currVal, 0);
}
export default getStudentIdsSum;
