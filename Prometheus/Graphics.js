//Graphics

let sprites = []

function setupCanvas(w, h){
    canvas = document.querySelector("canvas");
    pencil = canvas.getContext("2d");
	
    canvas.width = w;
    canvas.height = h;

}

function clearCanvas(){
  pencil.clearRect(0, 0, canvas.width, canvas.height);
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
  
  attach(object){
    this.x = object.x;
    this.y = object.y;
    object.attachedObjects.push(this);
  }
  
  draw(){
    pencil.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  setSprite(image){
    this.img = image;
  }
  
}

function write(text, x, y){
  pencil.font = '30px Arial';
  pencil.fillText(text, x, y);
}
