import { UserName } from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $('form#user').submit(function(event){
    event.preventDefault();
    const username = $('#intake').val();
    $(".nameDisplay").text(username);
    let card = new UserName(username);
    let card2 = card.newQuestion();
    $("#cardDisplay").text(card.flashCard);
  });
});
