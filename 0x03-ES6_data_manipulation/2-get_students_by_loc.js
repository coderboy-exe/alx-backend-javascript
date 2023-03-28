const getStudentsByLocation = (studentsArr, city) => {
  const students = studentsArr.filter((student) => student.location === city);
  return students;
};

export default getStudentsByLocation;
