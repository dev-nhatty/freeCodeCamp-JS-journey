function getAverage(scoresArr) {
  let sum = 0;
  for (const score of scoresArr) {
    sum += score;
  }
  return sum/scoresArr.length;
}

function getGrade(score) {
  if (score === 100) {return "A+"} else if (score >= 90) {return "A"} else if (score >= 80) {return "B"} else if (score >= 70) {return "C"} else if (score >= 60) {return "D"} else if (score < 60) {return "F"}
}

function hasPassingGrade(score) {
  const grade = getGrade(score);

  if (grade === "F") {return false}
  else {return true}
}

function studentMsg (scoresArr, studScore) {
  let average = getAverage(scoresArr);
  if (studScore >= 60) {
    return `Class average: ${average}. Your grade: ${getGrade(studScore)}. You passed the course.`
  } else if (studScore < 60) {
    return `Class average: ${average}. Your grade: ${getGrade(studScore)}. You failed the course.`
  }
}