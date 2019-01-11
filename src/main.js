import { CombatGame } from './game-field';
import { Enemy } from './enemy.js';
import { Player } from './player.js';
import { playerStats, enemyStats, shopItems } from './ui-logic.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#start').submit(function(event){
    event.preventDefault();
    let currentGame;
    const character = $('#start option:selected').val();
    const bedEnemy = new Enemy('Bed', 20, 1, "You found a $1 bill under your pillow.",[['sleep','warm covers', 10]]);

    if (character == "lawyer") {
      const player = new Player("Law Graduate", 8, 2)
      currentGame = new CombatGame(player, bedEnemy);
      console.log(player);
    } else if (character == "nurse") {
      const player = new Player("Nurse", 15, -3)
      currentGame = new CombatGame(player, bedEnemy);
      console.log(player);
    }
    $('#start').hide();
    $('#live-game').show();
    $('#arena').show();
    playerStats(currentGame);
    enemyStats(currentGame);

    $('#player-input').submit(function(event){
      event.preventDefault();
      const playerAttack = $('#player-input option:selected').val();
      $('#player-attack').html(`<strong>Your attack:</strong> ${playerAttack}`);
      currentGame.chooseAction(playerAttack);
      $('#enemy-attack').html(`<strong>Enemy attack:</strong> ${currentGame.enemyAction()}`);
      playerStats(currentGame);
      enemyStats(currentGame);

      if (!(currentGame.playerCharacter.isAlive())) {
        $('#live-game').hide();
        $('#game-end').html("<h1>Game Over!</h1>");
      }
      if (currentGame.enemy.power < 0) {
        $('#arena').hide();
        $('#player-input').hide();
        $('#combat-result').show();
        shopItems(currentGame);
        $('#shop').show();
        $('#result-message').html(currentGame.defeatEnemy());
      }
    });
  });
});
