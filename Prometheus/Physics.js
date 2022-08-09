//Physics

let gameObjects = [];

class Body{
  
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.isColliding = false;
    
    gameObjects.push(this);
    
  }
  
}

class KinematicBody extends Body{

  move(nx, ny){
    if(this.isColliding === false){
      this.x = nx;
      this.y = ny;
    }
  }
  
}

function overlap(object1, object2) {
    // Check x and y for overlap
    if (object2.x > object1.w + object1.x || object1.x > object2.w + object2.x || object2.y > object1.h + object1.y || object1.y > object2.h + object2.y){
        return false;
    }
    return true;
}