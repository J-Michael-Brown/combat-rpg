import { Enemy } from './../src/enemy.js';

describe('Enemy', function(){
  describe('constructor', function(){
    it("should store information associated with the enemy object", function(){
      const enemyOne = new Enemy("Boss", 10, 2, "You got all the credits", [
        ['sanity','Public Humiliation',-1],
        ['sanity','Passive-Aggressive',-1],
        ['sleep','Boring Presentation',15]
      ]);
      expect(enemyOne.power).toEqual(10);
    });

  });
});
