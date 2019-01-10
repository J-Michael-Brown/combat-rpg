import { Item } from './../src/item.js'

describe('Item', function() {
  let reusableItem;

  beforeEach(function() {
    reusableItem = new Item('hot coffee', 3, -30, 5, -5);
  });

  describe('constructor', function() {
    it('should store an item name, effect, and price', function() {
      expect(reusableItem.product).toEqual('hot coffee');
      expect(reusableItem.sleepEffect).toEqual(-30);
      expect(reusableItem.sanityEffect).toEqual(5);
      expect(reusableItem.powerEffect).toEqual(-5);
      expect(reusableItem.price).toEqual(3);
    });
  });
});
