'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const studentNames = [];
  for (const student of students) studentNames.push(student.name);
  return studentNames;
}
