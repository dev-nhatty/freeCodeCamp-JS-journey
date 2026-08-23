function chunkArrayInGroups(arr, num) {
  let r = num - 1;
  let finalArr = [];
  for (let l = 0; l < arr.length; l += num) {
    const currArr = []
    for (let i = l; i <= l + r; i++ ){
      if (i >= arr.length) {break}
      currArr.push(arr[i])
    }
    finalArr.push(currArr);
  }
  return finalArr;
}