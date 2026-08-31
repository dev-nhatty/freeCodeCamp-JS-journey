function uniteUnique(...arrays) {
  const result = []
  if (arrays.length < 2) {
    return 
  } else {
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        if (result.includes(arrays[i][j])) {
          continue
        } else {result.push(arrays[i][j])}
      }
    }
  } 
  return result
}

