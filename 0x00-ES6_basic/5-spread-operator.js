export default function concatArrays(array1, array2, string) {
  const concat1 = array1.concat(array2);
  for (const ele of string) {
    concat1.push(ele);
  }
  return concat1;
}
