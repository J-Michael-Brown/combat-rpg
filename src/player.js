export class Player {
  constructor(archetype, startSleep, startSanity, startItems = []) {
    this.archetype = archetype;
    this.sleep = startSleep;
    this.sanity = startSanity;
    this.focus = 1;
    this.items = startItems;
    this.credits = 0;
  }

  removeItem(item) {
    for (let itemIndex = 0; itemIndex < this.items.length; itemIndex++) {
      if (item == this.items[itemIndex]) {
        this.items.splice(itemIndex, 1);
        return item;
      }
    }
    return false;
  }
}
