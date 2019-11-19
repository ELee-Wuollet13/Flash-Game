import { UserName } from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $('form#user').submit(function(event){
    event.preventDefault();
    $(".onSubmit").show();
    $("#user").hide();
    const username = $('#intake').val();
    $(".nameDisplay").text(username);
    let card = new UserName(username);
    let output = card.newQuestion();
    let question = output[0];
    $("#question").text(question);
    let answer = output[1];
    $("#question1").text(answer);
    let answer2 = output[2];
    $("#question2").text(answer2);
    let answer3 = output[3];
    $("#question3").text(answer3);
    $("form#card").submit(function(event) {
      event.preventDefault();
      let playerChoice = $("input:radio[name=radio1]:checked").val();
      card.answerQuestion(playerChoice);
      $('#outputScore').text(card.currentScore);
      card.newQuestion();
      console.log(card.flashCard);

    });
  });
  // $('form#card').onClick(function(event) {
  //   event.preventDefault();
//   });
});
