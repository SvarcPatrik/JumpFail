export default class Old {
  constructor() {
    this.image = document.getElementById("old_img");
  }

  draw(ctx) {
    ctx.drawImage(this.image, 700, 638, 70, 70);
  }
}
