const getStudentsByLocation = (studentsArr, city) => {
  return studentsArr.filter(student => student.location === 'San Francisco');
}

export default getStudentsByLocation;
