import { CombatGame } from './../src/game-field.js'
import { Player } from './../src/player.js'
import { Enemy } from './../src/enemy.js'
import { Item } from './../src/item.js'

describe('CombatGame', function() {
  let reusableEnemy;
  let reusablePlayer;
  let reusableCombatGame;
  let reusableItem;

  beforeEach(function() {
    reusableEnemy = new Enemy('Bed', 20, 1, "You found a $1 bill under your pillow.",[['sleep','warm covers', 10]]);
    reusablePlayer = new Player("Law Graduate", 8, 4);
    reusableCombatGame = new CombatGame(reusablePlayer, reusableEnemy);
    reusableItem = new Item('hot coffee', 3, -30, 5, -5);
  });

  describe('enemyAction', function() {
    it('should return an array of attack information and decrement enemy power', function() {
      reusableCombatGame.enemyAction();
      expect(reusableCombatGame.enemy.power).toEqual(17);
    });
  });

  describe('defeatEnemy', function() {
    it('give the player the enemy\'s credits and return a message', function() {
      expect(reusableCombatGame.defeatEnemy()).toEqual("You defeated the Bed.\n You found a $1 bill under your pillow.");
      expect(reusableCombatGame.playerCharacter.credits).toEqual(1);
    });
  });

  describe('chooseAction', function() {
    it("should allow the player to choose 'wake up'. Which will decrease the player's sleep level by 10 before they are attacked.", function() {
      expect(reusableCombatGame.chooseAction('wake up')).toEqual("you slap yourself awake");
      expect(reusableCombatGame.playerCharacter.sanity).toEqual(4);
      expect(reusableCombatGame.playerCharacter.sleep).toEqual(8);
      expect(reusableCombatGame.enemy.power).toEqual(17);
    });

    it("should allow the player to choose 'blot'. Which will increase the player's sanity level by 1 before they are attacked.", function() {
      expect(reusableCombatGame.chooseAction('blot')).toEqual("you blot out the unimaginable horror.");
      expect(reusableCombatGame.playerCharacter.sanity).toEqual(5);
      expect(reusableCombatGame.playerCharacter.sleep).toEqual(18);
      expect(reusableCombatGame.enemy.power).toEqual(17);
    });

    it("should allow the player to choose 'rush'. Which causes the enemy to lose 5 extra power before their attack.", function() {
      expect(reusableCombatGame.chooseAction('rush')).toEqual("You rush the enemy along!");
      expect(reusableCombatGame.playerCharacter.sanity).toEqual(4);
      expect(reusableCombatGame.playerCharacter.sleep).toEqual(18);
      expect(reusableCombatGame.enemy.power).toEqual(12);
    });
  });

  describe('shopItems', function() {
    it('should return available shop items and associated prices', function() {
      expect(reusableCombatGame.shopItems[0] instanceof Item).toEqual(true);
    });
  });

  describe('findItemByName', function() {
    it('should take an item name (the Item.product) and return the item from the shop', function() {
      expect(reusableCombatGame.findItemByName('hot coffee')).toEqual(reusableCombatGame.shopItems[0]);
    });
  });

  describe('purchase', function() {
    it('add the product to the player\'s items and decrease their credit', function() {
      reusableCombatGame.playerCharacter.credits += 5;
      expect(reusableCombatGame.purchase('hot coffee')).toEqual(reusableCombatGame.shopItems[0]);
      expect(reusableCombatGame.playerCharacter.credits).toEqual(2);
    });
  });

  describe('useItem', function() {
    it('should use the item\'s effects', function() {
      reusableCombatGame.playerCharacter.items.push(reusableItem);
      reusableCombatGame.useItem(reusableItem);

      expect(reusableCombatGame.playerCharacter.sleep).toEqual(0);
      expect(reusableCombatGame.playerCharacter.sanity).toEqual(5);
      expect(reusableCombatGame.enemy.power).toEqual(15);
      expect(reusableCombatGame.playerCharacter.items.length).toEqual(0);
    });
  });

});
