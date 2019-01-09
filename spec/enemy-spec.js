import { Enemy } from './../src/enemy.js';

describe('Enemy', function(){
  describe('constructor', function(){
    it("should store information associated with the enemy object", function(){
      const enemyOne = new Enemy("Boss", 10, 2);
      expect(enemyOne.health).toEqual(10);
    });

  });
});
