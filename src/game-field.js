import { Item } from './item.js';

export class CombatGame {
  constructor(player, enemy) {
    this.playerCharacter = player;
    this.enemy = enemy;
    this.shopItems = [new Item('hot coffee', 3, -30, 5, -5)];
  }

  enemyAction(){
    const attack = this.enemy.attacks[Math.floor(Math.random()*100%this.enemy.attacks.length)];
    if (attack[0]=='sanity') {
      this.playerCharacter.sanity+=attack[2];
    } else if (attack[0]=='sleep'){
      this.playerCharacter.sleep+=attack[2];
    }
    this.enemy.power-=3;
    return (`the ${this.enemy.title} used ${attack[1]}! \n dealing ${attack[2]} ${attack[0]} damage!`);
  }

  defeatEnemy() {
    this.playerCharacter.credits+=this.enemy.credits;
    return (` You defeated the ${this.enemy.title}.\n ${this.enemy.creditsMessage}`);
  }

  chooseAction(playerInput) {
    let message = '';
    if (playerInput=='wake up') {
      this.playerCharacter.sleep-=10;
      message =  ('you slap yourself awake');
    } else if (playerInput.includes('blot')) {
      this.playerCharacter.sanity+=1;
      message = ('you blot out the unimaginable horror.');
    } else if (playerInput=='rush') {
      this.enemy.power-=5;
      message = ('You rush the enemy along!');
    } else if (playerInput.includes('use')) {
      const productName = playerInput.substring(4);
      const item = this.findItemByName(productName, this.playerCharacter.items);
      this.useItem(item);
    }
    this.enemyAction();
    if (this.playerCharacter.sleep>=100) {
      message += (' You have succumb to sleep.');
    } else if (this.playerCharacter.sanity<=-5) {
      message += (' You just can\'t take it anymore. You succumb to madness.');
    } else if (this.enemy.power<=0) {
      message += this.defeatEnemy();
    }
    return message;
  }

  useItem(item) {
    if (this.findItemByName(item.product, this.playerCharacter.items)) {
      this.playerCharacter.sleep += item.sleepEffect;
      this.playerCharacter.sanity += item.sanityEffect;
      this.enemy.power+=item.powerEffect;
      this.playerCharacter.removeItem(item);
      this.limitPlayerStats();
    } else {
      return false;
    }
  }

  limitPlayerStats(){
    if (this.playerCharacter.sanity < -5) {
      this.playerCharacter.sanity = -5;
    }
    if (this.playerCharacter.sanity > 5) {
      this.playerCharacter.sanity = 5;
    }
    if (this.playerCharacter.sleep < 0) {
      this.playerCharacter.sleep = 0;
    }
    if (this.playerCharacter.sleep > 100) {
      this.playerCharacter.sleep = 100;
    }
  }

  purchase(itemName) {
    var addedItem = this.findItemByName(itemName);
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
