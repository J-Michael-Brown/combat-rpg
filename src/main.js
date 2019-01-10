import { CombatGame } from './game-field';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#start').submit(function(event){
    event.preventDefault();
    let newGame;
    const character = $('#start option:selected').val();
    if (character == "lawyer") {
      newGame = new CombatGame(["Law Graduate", 8, 2]);
    } else if (character == "nurse") {
      newGame = new CombatGame(["Nurse", 15, -3]);
    }
    $('#start').hide();
    console.log(character);
    console.log(newGame);
  });
});
