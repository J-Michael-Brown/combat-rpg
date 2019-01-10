import { Player } from './player.js'
import { Item } from './item.js'

export class CombatGame {
  constructor(archetype) {
    this.playerCharacter = new Player(archetype[0], archetype[1], archetype[2])
    this.shopItems = [new Item('hot coffee', [-30, 5, -5], 3)];
  }

  combatScenario(enemy) {
    return([this.playerCharacter.sleep, this.playerCharacter.sanity, this.playerCharacter.focus, this.playerCharacter.items, this.playerCharacter.credits, enemy.title, enemy.power, enemy.credits]);
  }

  enemyAction(enemy){
    const attack = enemy.attacks[Math.floor(Math.random()*100%enemy.attacks.length)];
    if (attack[0]=='sanity') {
      this.playerCharacter.sanity+=attack[2];
    } else if (attack[0]=='sleep'){
      this.playerCharacter.sleep+=attack[2];
    }
    enemy.power-=3;
    return (`the ${enemy.title} used ${attack[1]}! \n dealing ${attack[2]} ${attack[0]} damage!`);
  }

  defeatEnemy(enemy) {
    this.playerCharacter.credits+=enemy.credits;
    return (`You defeated the ${enemy.title}.\n ${enemy.creditsMessage}`);
  }

  chooseAction(playerInput, enemy) {
    let message = '';
    if (playerInput=='wake up') {
      this.playerCharacter.sleep-=10;
      message =  ('you slap yourself awake');
    } else if (playerInput.includes('blot')) {
      this.playerCharacter.sanity+=1;
      message = ('you blot out the unimaginable horror.');
    } else if (playerInput=='rush') {
      enemy.power-=5;
      message = ('You rush the enemy along!');
    }
    this.enemyAction(enemy);
    if (this.playerCharacter.sleep>=100) {
      message += (' You have succumb to sleep.')
    } else if (this.playerCharacter.sanity<=-5) {
      message += (' You just can\'t take it anymore. You succumb to madness.');
    } else if (enemy.power<=0) {
      this.defeatEnemy(enemy);
    } else {
      this.combatScenario(enemy);
    }

    return message;
  }

  useItem(item, enemy) {
    if (this.findItemByName(item.product, this.playerCharacter.items)) {
      this.playerCharacter.sleep += item.effects[0];
      if (this.playerCharacter.sleep < 0) {
        this.playerCharacter.sleep = 0;
      }
      this.playerCharacter.sanity += item.effects[1];
      if (this.playerCharacter.sanity < -5) {
        this.playerCharacter.sanity = -5;
      }
      if (this.playerCharacter.sanity > 5) {
        this.playerCharacter.sanity = 5;
      }
      enemy.power+=item.effects[2];
      this.playerCharacter.removeItem(item);
    } else {
      return false;
    }
  }

  purchase(itemName) {
    var addedItem = this.findItemByName(itemName)
    this.playerCharacter.items.push(addedItem);
    this.playerCharacter.credits -= addedItem.price;
    return addedItem;
  }

  findItemByName(itemName, itemArray = this.shopItems) {
    for (let itemIndex = 0; itemIndex < itemArray.length; itemIndex++){
      const item = itemArray[itemIndex];
      if (item.product == itemName) {
        return item;
      }
    }
    return false;
  }
}
