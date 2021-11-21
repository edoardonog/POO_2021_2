class Bolha{
  x;
  y;
  letter;
  speed;
  
  static radius = 20;
  alive = true;

  constructor (x, y, letter, speed) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.speed = speed;
  }

//velocidade
  update() {
    this.y += this.speed;
  }
  
//metodos
draw() {
  fill(255);
  stroke(255);
  circle(this.x, this.y, 2 * Bolha.radius);
  fill(0);
  stroke(0);
  textSize(25);
  text(this.letter, this.x - 7, this.y + 6);
  }
}

class Board {
  bolha = [];
  timeout = 30;
  timer = 0;
  hits = 0;
  mistakes = 0;

  constructor() {
    this.bolhas = [new Bolha(200,-300,"w",5)];
    this.bolhas.push(new Bolha(400,-200,"a",7));
    this.bolhas.push(new Bolha(300,-250,"s",8));
  }
  
  update(){
    this.checkBolhaTime();
    this.markOutside();
    
    for (let bolha of this.bolhas) {
      bolha.update();
      this.removeDead();
    }
  } 

  removeDead(){
    let vivas= [];
    for (let bolha of this.bolhas)
      if (bolha.alive)
        vivas.push(bolha);
    this.bolhas = vivas;
  }

  addBolha() {
    let x = random(50,500);
    let y = random(0);
    let letter = random(["w","a","s","d",]);
    let speed = random(5,10);
    let bolha = new Bolha(x,y,letter,speed);
    this.bolhas.push(bolha);
  }

  byHit(code) {
    for (let bolha of this.bolhas){
      if (bolha.letter[0].toUpperCase().charCodeAt(0) == code) {
        bolha.alive = false;
        this.hits++;
        break;
      }
    }
  }

  checkBolhaTime(){
    this.timer -=1;
    if(this.timer <= 0) {
      this.addBolha();
      this.timer = this.timeout;
    }
  }

  markOutside(){
    for (let bolha of this.bolhas)
      if (bolha.y + 2 *Bolha.radius >= height)
        bolha.alive = false;
        this.mistakes++;
  }
  

  draw() {
    stroke("white");
    fill("white");
    textSize(30);
    text("hits: " + this.hits, 30,30);
    
    
    for (let bolha of this.bolhas) {
      bolha.draw();
    }
  }
}

class Game {
  board;
  activeState;
  
  constructor() {
    this.board = new Board();
    this.activeState = this.gamePlay;
  }
  

  gamePlay() {
    image(back,0,0,800,600);
    this.board.update();
    image(guy,550,350,200,200);
    this.board.draw();
    
    if (this.board.hits > 10)
      this.activeState = this.end;
  }
  
  end() {
    image(final,-100,0,1000,600);
    fill('Yellow');
    textSize(50);
    text("YOU WIN", 50, 100);
  }
}

let game;

let guy;
let back;
let final;

function loadImg(path) {
    return loadImage(path, 
                     () => console.log("Loading " + path + " ok"), 
                     () => console.log("Loading " + path + " error")
    );

} 
function preload() {
    guy = loadImg('guy.gif');
    back = loadImg('back.png');
    final = loadImg('fim.jpg');
}

function setup () {
  createCanvas(800, 600);
  frameRate(30);
  game = new Game();
}

function keyPressed(){
  game.board.byHit(keyCode);
}

function draw () {
  game.activeState();
}
