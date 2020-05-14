export default class Background {
  constructor() {
    this.image = document.getElementById("bg_img");
  }

  draw(ctx) {
    ctx.drawImage(this.image, 0, 0, 1280, 720);
  }
}
