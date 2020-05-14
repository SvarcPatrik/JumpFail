import Game from "./game";
let canvas = document.getElementById("Obrazovka");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
