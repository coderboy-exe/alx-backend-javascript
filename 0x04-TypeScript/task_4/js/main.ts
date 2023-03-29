import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';


export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

export const cpp = new Cpp();
console.log("C++");
cpp.teacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

export const java = new Java();
console.log("Java");
java.teacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

export const react = new React();
console.log("React");
react.teacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
