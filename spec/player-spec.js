import { Player } from './../src/player.js';
import { Item } from './../src/item.js';

describe('Player', function(){
  let reusablePlayer;
  let reusableItem;

  beforeEach(function() {
    reusablePlayer = new Player("Law Student", 10, 2, []);
    reusableItem = new Item('hot coffee', [-30, 5, -5], 3);
  });

  describe('constructor', function(){
    it("should store information associated with the player object", function(){
      expect(reusablePlayer.sleep).toEqual(10);
    });

  });

  describe('removeItem', function() {
    it("should find the first instance of an item's apearance in the player's item inventory and removes it", function() {
      reusablePlayer.items.push(reusableItem);
      expect(reusablePlayer.removeItem(reusableItem)).toEqual(reusableItem);
      expect(reusablePlayer.items.includes(reusableItem)).toEqual(false);

    });
  });
});
