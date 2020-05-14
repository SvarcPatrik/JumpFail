export default class Coin {
  constructor() {
    this.image = document.getElementById("coin_img");
  }

  draw(ctx) {
    ctx.drawImage(this.image, 500, 670, 20, 20);
  }
}
