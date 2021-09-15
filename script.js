// 1. Create variables to represent scores of exams for Matt and Simon and set values   80 and 45;
let Matt = 80;
// task7
// Matt = 50
let Simon = 45;
// task7
// Simon = 60
// 2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
let min = 51;
// 3. Write the condition in if statement, which will check if both students have passed an exam and log
//    the result in console;
// 4. Use else if statement in order to check if one of the students has passed an exam and log the result
//    in console;
// 5. Use else statement in order to display in console that both students have failed;
if (Matt >= min && Simon >= min) {
  console.log("Both have passed test");
} else if (Matt >= min || Simon >= min) {
  console.log("One of them has passed test");
} else {
  console.log("Both students have failed");
}
// 6. In case of passing the exam by one of the students, find out which one was that and display in console
//    as an additional information the student name and his points
if (Matt >= min) console.log(`Matt has passed at ${Matt}`);
if (Simon >= min) console.log(`Simon has passed at ${Simon}`);
// 7. Test all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and
//   Matt failed; d. both students failed).

// */
