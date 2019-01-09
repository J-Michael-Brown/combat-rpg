import { Player } from './player.js'
import { Enemy } from './enemy.js'


export class CombatGame {
  constructor(archetype) {
    this.playerCharacter = new Player(archetype[0], archetype[1], archetype[2])
  }

  combatScenario(enemy = new Enemy('Bed', 20, 1, "You found a $1 under your pillow.")) {
    console.log(`Your stats: \n Sleep: ${this.playerCharacter.sleep} \n Sanity: ${this.playerCharacter.sanity} \n Focus: ${this.playerCharacter.focus}, \n Items: ${this.playerCharacter.items}, \n Credits: ${this.playerCharacter.credits} \n Your enemeny's stats: \n Title: ${enemy.title} \n Power: ${enemy.power} \n Credits: ${enemy.credits}` )
  }
}

// function component(width, height, color, x, y) {
//   this.gamearea = this.myGameArea;
//   this.width = width;
//   this.height = height;
//   this.speedX = 0;
//   this.speedY = 0;
//   this.x = x;
//   this.y = y;
//   this.update = function() {
//     const ctx = this.myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
//   this.newPos = function() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }
// }
//
// export class CombatGame {
//
//   constructor() {
//     this.myGamePiece = component(30, 30, "red", 10, 120);
//
//     this.myGameArea = {
//       canvas : document.createElement("canvas"),
//       start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(this.updateGameArea, 20);
//         window.addEventListener('keydown', function (e) {
//           this.myGameArea.keys = (this.myGameArea.keys || []);
//           this.myGameArea.keys[e.keyCode] = (e.type == "keydown");
//         })
//         window.addEventListener('keyup', function (e) {
//           this.myGameArea.keys[e.keyCode] = (e.type == "keydown");
//         })
//       },
//       clear : function(){
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//       }
//     }
//   }
//
//
//   startGame() {
//     this.myGameArea.start();
//   }
//
//
//   updateGameArea() {
//     this.myGameArea.clear();
//     this.myGamePiece.speedX = 0;
//     this.myGamePiece.speedY = 0;
//     if (this.myGameArea.keys && this.myGameArea.keys[37]) {this.myGamePiece.speedX = -1; }
//     if (this.myGameArea.keys && this.myGameArea.keys[39]) {this.myGamePiece.speedX = 1; }
//     if (this.myGameArea.keys && this.myGameArea.keys[38]) {this.myGamePiece.speedY = -1; }
//     if (this.myGameArea.keys && this.myGameArea.keys[40]) {this.myGamePiece.speedY = 1; }
//     this.myGamePiece.newPos();
//     this.myGamePiece.update();
//   }
//
// }
