import { Item } from './../src/item.js'

describe('Item', function() {
  let reusableItem;

  beforeEach(function() {
    reusableItem = new Item('hot coffee', [-30, 5, -5], 3);
  });

  describe('constructor', function() {
    it('should store an item name, effect, and price', function() {
      expect(reusableItem.product).toEqual('hot coffee');
      expect(reusableItem.effects).toEqual([-30,5,-5]);
      expect(reusableItem.price).toEqual(3);
    });
  });
});
