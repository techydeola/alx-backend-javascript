export default function getStudentIdsSum(students) {
  const idSum = students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return idSum;
}
