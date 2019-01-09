export class Player {
  constructor(archetype, startSleep, startSanity, startItems = []) {
    this.archetype = archetype;
    this.sleep = startSleep;
    this.sanity = startSanity;
    this.focus = 1;
    this.items = startItems;
    this.credits = 0;
  }
}
