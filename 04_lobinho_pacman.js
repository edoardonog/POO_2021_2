class Entity {
    constructor(x, y, step, image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }
    draw() {
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    }
}
class Board {
    constructor(nc, nl, step, background) {
        this.nc = nc;
        this.nl = nl;
        this.step = step;
        this.background = background;
    }
    draw() {
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for (let x = 0; x < this.nc; x++) {
            for (let y = 0; y < this.nl; y++) {
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    }
}

let pacman;
let pacman_img;
let fantasma;
let fantasma_img;

function loadImg(path) {
    return loadImage(path, 
                     () => console.log("Loading " + path + " ok"), 
                     () => console.log("Loading " + path + " error")
    );
}

function preload() {
  pacman_img = loadImg('pacman.png')
  fantasma_img = loadImg('fantasma.png')
  board_img = loadImg('fundo.jpg');
}

function keyPressed() {
  //andar lobo
  if (keyCode === LEFT_ARROW) {
    pacman.x--;
  } else if (keyCode === RIGHT_ARROW) {
    pacman.x++;
  } else if (keyCode === UP_ARROW) {
    pacman.y--;
  } else if (keyCode === DOWN_ARROW) {
    pacman.y ++ ;
  }
  //andar coelho
  if (keyCode === "A".charCodeAt(0)) {
    fantasma.x--;
  } else if (keyCode === "D".charCodeAt(0)) {
    fantasma.x++;
  } else if (keyCode === "W".charCodeAt(0)) {
    fantasma.y--;
  } else if (keyCode === "S".charCodeAt(0)) {
    fantasma.y++;
  }
}

function setup() {
  let size = 100;
  pacman = new Entity(2, 2, size, pacman_img);
  fantasma = new Entity(1, 1, size, fantasma_img)
  board = new Board(5, 5, size, board_img);
  createCanvas(board.nc * size, board.nl * size);
}

function draw() {
  board.draw();
  pacman.draw();
  fantasma.draw();
  
//condicionais e alterações no game
if(fantasma.x && fantasma.y === pacman.x && pacman.y) {
  background(15,15,15);
  fill('red');
  textSize(50);
  text('You Lose', 150, 250);
  fill(200,200,200);
  textSize(15);
  text('by: edo', 220, 300);
}
}
