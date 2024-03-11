export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  if (!Array.isArray(studentsArray) || !Array.isArray(newGrades)) {
    return [];
  }

  const getStudent = studentsArray.filter((student) => student.location === city).map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);

    return { ...student, grade: item2 ? item2.grade : 'N/A' };
  });

  return getStudent;
}
