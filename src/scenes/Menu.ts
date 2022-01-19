export class Menu extends Phaser.Scene {
  constructor() {
      super('Menu');
  }

  public preload(): void {
    this.load.svg('field', '../assets/field.svg')
    this.load.svg('cros', '../assets/cros.svg')
    this.load.svg('zero', '../assets/zero.svg')
  }

  public create(): void {
  }
}
