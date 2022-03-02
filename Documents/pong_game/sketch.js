//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10
let raqueteAltura = 90

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

// velocidade da bolinha
let velocidadex = 6
let velocidadey = 6

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificacolisao();
  mostraRaquete();
  movimentaRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisao()
  verificaColisaoOponente()
  incluirPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);

}

function movimentoBolinha(){
  xBolinha += velocidadex
  yBolinha += velocidadey
}

function verificacolisao(){
  if (xBolinha + raio > width ||
      xBolinha - raio < 0){
    velocidadex *= -1;
    }
  if (yBolinha + raio > height ||
      yBolinha - raio < 0){
    velocidadey *= -1;
}
  }

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)
  
}
function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
  
}


function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
 }
  
    if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  } 
}
////////////////////////////////////////////////////
function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
 }
  
    if (keyIsDown(83)){
    yRaqueteOponente += 10;
  } 
  
}
function verificaColisao(){
  colidiu = 
    collideRectCircle(xRaquete,yRaquete,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadex *= -1;
    raquetada.play();
  }
  }
  function verificaColisaoOponente(){
  colidiu = 
    collideRectCircle(xRaqueteOponente,yRaqueteOponente,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadex *= -1;
  raquetada.play();
  }
    }
function incluirPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize (16)
  fill(color(153, 51, 255))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(153, 51, 255))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    ponto.play();
    meusPontos += 1; 
  }
    

if (xBolinha < 10) {
 ponto.play();
    pontosOponente += 1; 
} 
    
    }

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}
