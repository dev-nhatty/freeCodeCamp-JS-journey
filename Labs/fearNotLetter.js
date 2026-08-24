function fearNotLetter(string){
  let arr = []
  for (const char of string) {
    arr.push(char)
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1].charCodeAt(0) !== (arr[i].charCodeAt(0) + 1)) {
      return String.fromCharCode(arr[i].charCodeAt(0) + 1)
    }
  }
  return undefined;
}
