export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const [idx, ele] of array.entries()) {
    const value = ele;
    newArray[idx] = appendString + value;
  }

  return newArray;
}
