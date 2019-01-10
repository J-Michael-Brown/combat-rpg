import { CombatGame } from './../src/game-field.js'
import { Enemy } from './../src/enemy.js'
import { Item } from './../src/item.js'

describe('CombatGame', function() {
  let reusableEnemy;
  let reusablePlayerArchetype;
  let reusableCombatGame;

  beforeEach(function() {
    reusableEnemy = new Enemy('Bed', 20, 1, "You found a $1 bill under your pillow.",[['sleep','warm covers', 10]]);
    reusablePlayerArchetype = ["Law Graduate", 8, 4];
    reusableCombatGame = new CombatGame(reusablePlayerArchetype);
  });

  describe('combatScenario', function() {
    it('should return an array of player and enemy stats', function() {
      expect(reusableCombatGame.combatScenario(reusableEnemy)).toEqual([8,4,1, [], 0, "Bed", 20, 1]);
    });
  });

  describe('enemyAction', function() {
    it('should return an array of attack information and decrement enemy power', function() {
      expect(reusableCombatGame.enemyAction(reusableEnemy)).toEqual("the Bed used warm covers! \n dealing 10 sleep damage!");
      expect(reusableEnemy.power).toEqual(17);
    });
  });

  describe('defeatEnemy', function() {
    it('give the player the enemy\'s credits and return a message', function() {
      expect(reusableCombatGame.defeatEnemy(reusableEnemy)).toEqual("You defeated the Bed.\n You found a $1 bill under your pillow.");
      expect(reusableCombatGame.playerCharacter.credits).toEqual(1);
    });
  });

  describe('chooseAction', function() {
    it("should allow the player to choose 'wake up'. Which will decrease the player's sleep level by 10 before they are attacked.", function() {
      expect(reusableCombatGame.chooseAction('wake up', reusableEnemy)).toEqual("you slap yourself awake");
      expect(reusableCombatGame.playerCharacter.sanity).toEqual(4);
      expect(reusableCombatGame.playerCharacter.sleep).toEqual(8);
      expect(reusableEnemy.power).toEqual(17);
    });

    it("should allow the player to choose 'blot'. Which will increase the player's sanity level by 1 before they are attacked.", function() {
      expect(reusableCombatGame.chooseAction('blot', reusableEnemy)).toEqual("you blot out the unimaginable horror.");
      expect(reusableCombatGame.playerCharacter.sanity).toEqual(5);
      expect(reusableCombatGame.playerCharacter.sleep).toEqual(18);
      expect(reusableEnemy.power).toEqual(17);
    });

    it("should allow the player to choose 'rush'. Which causes the enemy to lose 5 extra power before their attack.", function() {
      expect(reusableCombatGame.chooseAction('rush', reusableEnemy)).toEqual("You rush the enemy along!");
      expect(reusableCombatGame.playerCharacter.sanity).toEqual(4);
      expect(reusableCombatGame.playerCharacter.sleep).toEqual(18);
      expect(reusableEnemy.power).toEqual(12);
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

});
