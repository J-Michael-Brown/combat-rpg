import { Player } from './../src/player.js';

describe('Player', function(){
  describe('constructor', function(){
    it("should store information associated with the player object", function(){
      const playerOne = new Player("Law Student", 10, 2, []);
      expect(playerOne.sleep).toEqual(10);
    });

  });
});
