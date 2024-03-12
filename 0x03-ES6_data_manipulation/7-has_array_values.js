export default function hasValuesFromArray(set, array) {
  let check = false;
  for (const ele of array) {
    if (set.has(ele)) {
      check = true;
    } else {
      check = false;
    }
  }
  return check;
}
