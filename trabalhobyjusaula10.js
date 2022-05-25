var cor = "texto"

function setup(){
  createCanvas(400,400);
}

function draw(){
  background("white")
  if (keyDown("a")) {
    cor = "cores";
  }
  if (keyDown("b")) {
    cor = "cores";
  }
  if (keyDown("c")) {
    cor = "cores";
  }
  if (keyDown("d")) {
    cor = "cores";
  }
  if (keyDown("e")) {
    cor = "cores";
  }
  if (keyDown("f")) {
    cor = "cores";
  }
  if (cor == "texto") {
    fill("black");
    textSize(20);
    text("Aperte a tecla a para a tela ficar vermelha", 20, 100);
    text("Aperte a tecla b para a tela ficar vermelha", 20, 130);
    text("Aperte a tecla c para a tela ficar vermelha", 20, 160);
    text("Aperte a tecla d para a tela ficar vermelha", 20, 190);
    text("Aperte a tecla e para a tela ficar vermelha", 20, 220);
    text("Aperte a tecla f para a tela ficar vermelha", 20, 250);
  }
  if (cor == "cores"){
    if(keyDown("a")){
      background("red")
    }
    if(keyDown("b")){
      background("blue")
    }
    if(keyDown("c")){
      background("yellow")
    }
    if(keyDown("d")){
      background("green")
    }
    if (keyDown("e")) {
      background("orange");
    }
    if (keyDown("f")) {
      background("purple");
    }
  }
}