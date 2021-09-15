/*
**********************CODING TASK No 2*****************************
1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2, 
    with the following values:
    a. John, 47, 46
    b. Bob, 23, 24
    c. Nick, 40, 35
    d. Alex, 44, 45
2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
    to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees
3. Create function which will calculate total score (score1 + score2) for each student.
4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student 
    has passed an exam and what kind of degree he has got.
5. Display the final result in console.
*/

// SOLUTION:
// 1
const students = [
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
// 2
const degrees = ["A", "B", "C", "D", "E"];
const pl = [91, 81, 71, 61, 51];
// 3
const total = students.map((student) => student.score1 + student.score2);
console.log(total);

// 4
const check = function () {
  let deg = "failed";
  for (let y = 0; y < total.length; y++) {
    for (let i = 0; i < pl.length; i++) {
      if (total[y] >= pl[i]) {
        deg = degrees[i];
        break;
      }
    }
    console.log(`name: ${students[y].name} score: ${total[y]} deg: ${deg}`);
    deg = "failed";
  }
};
check();
// const check = function () {
//   let deg = "failed";
//   for (let y = 0; y < total.length; y++) {
//     // console.log(total[y]);
//     for (let i = 0; i < pl.length; i++) {
//       if (total[y] >= pl[i]) {
//         deg = degrees[i];
//         break;
//       }
//     }
//     console.log(`name: ${students[y].name} score: ${total} deg: ${deg}`);
//     deg = "failed";
//   }
// };
// check();

// const totalScore = function () {
//   let deg = "failed",
//     score;
//   for (let i = 0; i < students.length; i++) {
//     score = students[i].score1 + students[i].score2;
//     for (let y = 0; y < pl.length; y++) {
//       if (score >= pl[y]) {
//         deg = degrees[y];
//         break;
//       }
//     }
//     console.log(`name: ${students[i].name} score: ${score} deg: ${deg}`);
//     deg = "failed";
//     console.log(score);
//   }
// };
// totalScore();

// for (let i = 0; i < students.length; i++) {
//   score = students[i].score1 + students[i].score2;
//   console.log(score);
// }
// const totalScore = function () {
//   let deg = "failed",
//     score;
//   for (let y = 0; y < pl.length; y++) {
//     if (score >= pl[y]) {
//       deg = degrees[y];
//       break;
//     }
//     console.log(`score: ${score} deg: ${deg}`);
//     deg = "failed";
//     console.log(score);
//   }
// };
// totalScore();
