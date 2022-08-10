//Basic functions

pencil.imageSmoothingEnabled = false; //Change this dependant on artstyle

function tick(){
  clearCanvas();
  Draw();
}

function write(text, x, y){
    pencil.font = '30px Arial';
    pencil.fillText(text, x, y);
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}