export { UserName }


class  UserName {
  constructor(username) {
    this.userName = username;
    this.currentScore = 0;
    this.listA = ["q1", "q2", "q3", "q4", "q5"];
    this.listB = ["a1", "a2", "a3", "a4", "a5"];
  }
  randomGenerator() {
    return Math.floor(Math.random()*this.listA.length);
  }
  newQuestion() {
    let flashCard = [];
    let newQuestion = this.randomGenerator();
    this.flashCard.push(this.listA[newQuestion]);
    this.flashCard.push(this.listB[newQuestion]);
    // flashCard.push(this.listB[newQuestion]);
    // flashCard.push(this.listB[newQuestion + 1]);
    // flashCard.push(this.listB[newQuestion + 2]);

    //now loop for false listB
    return this.flashCard;
  }
}



// let test = new UserName("john");
// console.log(test.newQuestion());
// test.newQuestion();






// let testBuild = new UserName("Everett");
// let showMe = testBuild.newQuestion();


// class FlashGame {
  //
  //   let wrongAnswerArray = [];
  //
  //
  //   let question = randomGenerator();
  //
  //   //logic to get right questionn from index array
  //   //logic to cross reference array return to object Q&A pair
  //   for (i=0; i < 3; i++) {
    //   let wrongAnswer = randomGenerator();
    //   if (wrongAnswer === question) {
      //     wrongAnswer = randomGenerator();
      //     wrongAnswerArray.push(wrongAnswer); //this has a problem, no reeval
      //   } else {
        //     wrongAnswerArray.push(wrongAnswer);  //create wrongAnswerArray
        //   };
        // };
        // };
        //
        // const q1 = card1 {
          //   question: ".toString";
          //   answer: "Converts a number to a string format";
          // }
          //
          // const q2 = card2 {
            //   question: "toUppercase";
            //   answer: "Converts workds to to uppercase";
            // }
            //
            // const q3 = card3 {
              //   question: ".parseInt";
              //   answer: "Converts a string to a number format";
              // }
              //
              // const q4 = card4 {
                //   question: "inNaN";
                //   answer: "Checks if a number is 'nan'";
                // }
                //
                // const q5 = card5 {
                  //   question: ".slice";
                  //   answer: "Removes or moves part of a number or strong at current position";
                  // }

                  //
                  //
                  //
                  // const questions =["q1", "q2", "q3", "q4", "q5"];
                  // function randomGenerator() {
                    //   return [Math.floor(Math.random()*questions.length)];
                    // }
                    //   let question = questions[Math.floor(Math.random()*questions.length)];
