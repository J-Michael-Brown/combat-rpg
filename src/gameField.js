import { Player } from './player.js'
import { Enemy } from './enemy.js'


export class CombatGame {
  constructor(archetype) {
    this.playerCharacter = new Player(archetype[0], archetype[1], archetype[2])
  }

  combatScenario(enemy = new Enemy('Bed', 20, 1, "You found a $1 under your pillow.",[['sleep','warm covers', 10],['sleep','pillow talk',5],['sleep','silent alarm',10]])) {
    console.log(`Your stats: \n Sleep: ${this.playerCharacter.sleep} \n Sanity: ${this.playerCharacter.sanity} \n Focus: ${this.playerCharacter.focus}, \n Items: ${this.playerCharacter.items}, \n Credits: ${this.playerCharacter.credits} \n Your enemy's stats: \n Title: ${enemy.title} \n Power: ${enemy.power} \n Credits: ${enemy.credits}` );
    return enemy;

  }

  enemyAction(enemy){
    const attack = enemy.attacks[Math.floor(Math.random()*100%enemy.attacks.length)];
    console.log(attack);
    if (attack[0]=='sanity') {
      this.playerCharacter.sanity+=attack[2];
    } else if (attack[0]=='sleep'){
      this.playerCharacter.sleep+=attack[2];
    }
    console.log(`the ${enemy.title} used ${attack[1]}! \n dealing ${attack[2]} ${attack[0]} damage!`);
    enemy.power-=3;
  }

  defeatEnemy(enemy) {
    this.playerCharacter.credits+=enemy.credits;
    console.log(`You defeated the ${enemy.title}.`);
    console.log(enemy.creditsMessage);
  }

  chooseAction(playerInput, enemy) {
    if (playerInput=='wake up') {
      this.playerCharacter.sleep-=10;
      console.log('you slap yourself awake');
    } else if (playerInput.includes('blot')) {
      this.playerCharacter.sanity+=1;
      console.log('you blot out the unimaginable horror.')
    } else if (playerInput=='rush') {
      enemy.power-=5;
    }
    this.enemyAction(enemy);
    if (this.playerCharacter.sleep>=100) {
      console.log('You have succumb to sleep.')
    } else if (this.playerCharacter.sanity<=-5) {
      console.log('You just can\'t take it anymore. You succumb to madness.');
    } else if (enemy.power<=0) {
      this.defeatEnemy(enemy);
    } else {
      this.combatScenario(enemy);
    }

  }
}
