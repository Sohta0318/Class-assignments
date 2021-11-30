var students = [
  {
    name: "John",
    score1: 47,
    score2: 46,
  },
  {
    name: "Bob",
    score1: 23,
    score2: 24,
  },
  {
    name: "Nick",
    score1: 40,
    score2: 35,
  },
  {
    name: "Alex",
    score1: 44,
    score2: 45,
  },
];

var scores = [91, 81, 71, 61, 51];
var degrees = ["A", "B", "C", "D", "E"];

function calcSum(score1, score2) {
  var sum;
  sum = score1 + score2;
  return sum;
}

function calcFinal() {
  for (var i = 0; i < students.length; i++) {
    var sum = calcSum(students[i].score1, students[i].score2);

    if (sum >= 51) {
      //pass
      console.log(students[i].name + " passed the exam.");

      for (var x = 0; x < scores.length; x++) {
        if (sum >= scores[x]) {
          console.log(
            "He has " + sum + " points and he got a degree " + degrees[x]
          );
          break;
        }
      }
    } else {
      //fail
      console.log(students[i].name + " failed the exam.");
    }
  }
}

calcFinal();
