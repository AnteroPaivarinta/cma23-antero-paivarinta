const grades: (string | number)[] = ["1", 2, "3", 4, "5"];

const filteredGrades = grades.filter((grade) => {
  if (typeof grade === "number") {
    return grade > 3;
  } else if (typeof grade === "string") {
    const numericGrade = parseInt(grade, 10);
    return !isNaN(numericGrade) && numericGrade > 3;
  }
  return false;
});

console.log(filteredGrades); 