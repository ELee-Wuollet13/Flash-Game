export { UserName };


class  UserName {
  constructor(username) {
    this.userName = username;
    this.currentScore = 0;
    this.listA = [".toString", "toUppercase", "parseInt", "isNaN", ".slice"];
    this.listB = ["Converts a number to a string format", "Converts words to to uppercase", "Converts a string to a number format", "Checks if a number is 'nan'", "Removes or moves part of a number or strong at current position"];

  }
  randomGenerator() {
    return Math.floor(Math.random()*this.listA.length);
    
  }
  newQuestion() {
    this.flashCard = [];
    let newQuestion = this.randomGenerator();
    this.flashCard.push(this.listA[newQuestion]);
    this.flashCard.push(this.listB[newQuestion]);
    this.flashCard.push(this.listB[newQuestion + 1]);
    this.flashCard.push(this.listB[newQuestion + 2]);
    return this.flashCard;
  }
  answerQuestion(playerChoice){
    if (playerChoice == 1) {
      this.currentScore += 1;
      console.log(this.currentScore);
      //trigger new card
    } else {
      console.log("Wrong Answer");
      //trigger new card
      return this.currentScore;
    }
  }
}
