import { CombatGame } from './game-field';
import { Enemy } from './enemy.js';
import { Player } from './player.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#start').submit(function(event){
    event.preventDefault();
    let newGame;
    const character = $('#start option:selected').val();
    const bedEnemy = new Enemy('Bed', 20, 1, "You found a $1 bill under your pillow.",[['sleep','warm covers', 10]], bedEnemy);

    if (character == "lawyer") {
      const player = new Player("Law Graduate", 8, 2)
      newGame = new CombatGame(player, bedEnemy);
      console.log(player);
    } else if (character == "nurse") {
      const player = new Player("Nurse", 15, -3)
      newGame = new CombatGame(player, bedEnemy);
      console.log(player);
    }
    $('#start').hide();



    $('#live-game #arena').show();
    console.log(character);
    console.log(newGame);
  });
});
