function generatePassword (passLength) {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let charPool = [];

  for (const char of characters) {
    charPool.push(char);
  }; 
  let generatedPass = "";
  for (let i = 0; i < passLength; i++) {
    const randIndex = Math.floor(Math.random() * (charPool.length)) 
    generatedPass += charPool[randIndex]
  }
  return generatedPass 
}

const password = generatePassword(10);
console.log(`Generated password: ${password}`)