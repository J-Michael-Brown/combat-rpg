import { Player } from './../src/player.js';

describe('Player', function(){
  describe('constructor', function(){
    it("should store information associated with the player object", function(){
      const playerOne = new Player("Lawyer", 10, 2);
      expect(playerOne.health).toEqual(10);
    });

  });
});
