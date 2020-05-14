import Player from "./player";
import InputHandler from "./input";
import Background from "./bg";
import Old from "./old";
import Coin from "./coin";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  INFO: 3
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.main = document.getElementById("menu_img");
    this.gamestate = GAMESTATE.MENU;
    this.player = new Player(this);
    this.bg = new Background();
    this.old = new Old();
    this.coin = new Coin();
    new InputHandler(this.player, this);
  }

  start() {
    this.gamestate = GAMESTATE.RUNNING;
  }

  update(deltaTime) {
    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU
    ) {
      return;
    }
    this.player.update(deltaTime);
  }

  draw(ctx) {
    this.bg.draw(ctx);
    this.coin.draw(ctx);
    this.old.draw(ctx);
    this.player.draw(ctx);

    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (this.gamestate === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();
      //ctx.drawImage(this.main, 0, 0, this.width, this.height);

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        "Stlač MEDZERNÍK pre štart",
        this.gameWidth / 2,
        this.gameHeight / 2
      );

      ctx.fillText(
        "Pre návod na ovládanie stlač I",
        this.gameWidth / 2,
        this.gameHeight / 2 + 50
      );
    }

    if (this.gamestate === GAMESTATE.INFO) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        "Pohybuješ sa pomcou šípiek doľava a doprava",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
      ctx.fillText(
        "Skáčeš pomocou medzerníka",
        this.gameWidth / 2,
        this.gameHeight / 2 + 50
      );
      ctx.fillText(
        "->Opätovným stlačením I sa vrátite do Menu<-",
        this.gameWidth / 2,
        this.gameHeight / 2 + 100
      );

      ctx.fillText(
        "->Dvojitým stlačením ESC sa vrátite do hry<-",
        this.gameWidth / 2,
        this.gameHeight / 2 + 150
      );
    }
  }

  tooglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }

  toogleInfo() {
    if (this.gamestate === GAMESTATE.INFO) {
      this.gamestate = GAMESTATE.MENU;
    } else {
      this.gamestate = GAMESTATE.INFO;
    }
  }
}
