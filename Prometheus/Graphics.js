//Graphics

let sprites = []

function setupCanvas(w, h){
    canvas = document.querySelector("canvas");
    pencil = canvas.getContext("2d");
	
    canvas.width = w;
    canvas.height = h;
    
    pencil.imageSmoothingEnabled = false; //Change this dependant on artstyle

}

class Sprite{
  
  constructor(img, x, y, width, height){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    
    sprites.push(this);
    
  }
  
  draw(){
    pencil.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  
}

function Draw(){
  for(var i = 0; i < sprites.length; i++){
    sprites[i].draw();
  }
}