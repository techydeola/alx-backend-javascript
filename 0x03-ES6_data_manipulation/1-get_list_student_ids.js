export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const getData = students.map((val) => val.id);
  return getData;
}
