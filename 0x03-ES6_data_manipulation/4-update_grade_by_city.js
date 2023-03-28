const updateStudentGradeByCity = (studentArr, city, newGrades) => {
  const students = studentArr.filter(student => student.location === city);

  return students.map((student) => {
    const grade = newGrades.find(grade => grade.studentId === student.id);
    if (!grade) {
      return {...student, grade: 'N/A'};
    }
    return {...student, grade: grade.grade};
  })
}

export default updateStudentGradeByCity;
