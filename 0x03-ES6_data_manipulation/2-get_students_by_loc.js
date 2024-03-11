export default function getStudentsByLocation(students, city) {
  const filteredArray = students.filter((val) => val.location === city);
  return filteredArray;
}
