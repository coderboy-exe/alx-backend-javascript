import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString())
      .then((data) => {
        const countDict = data;

        let resText = 'This is the list of our students';
        /* eslint-disable */
        const sorted = Object.keys(countDict).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        /* eslint-enable */
        // Print individual counts for each field
        for (const field of sorted) {
          if (Object.prototype.hasOwnProperty.call(countDict, field)) {
            const students = countDict[field];
            resText += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
          }
        }
        response.send(resText);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!major || (major !== 'CS' && major !== 'SWE')) {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2].toString())
      .then((data) => {
        const countDict = data;

        const resText = `List: ${countDict[major].join(', ')}`;
        response.send(resText);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
