import "/src/index.js";
export default class Player {
  constructor(game) {
    this.image = document.getElementById("player_img");
    this.gameWidth = game.gameWidth;
    this.width = 50;
    this.height = 50;
    this.maxSpeedy = 2;
    this.speedy = 0;
    this.maxSpeedx = 2;
    this.speedx = 0;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 13.5
    };
  }

  moveLeft() {
    this.speedx = -this.maxSpeedx;
    this.speedy = 0;
  }
  moveRight() {
    this.speedx = this.maxSpeedx;
    this.speedy = 0;
  }

  stop() {
    this.speedy = 0;
    this.speedx = 0;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    this.position.x += this.speedx;
    this.position.y += this.speedy;
    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
