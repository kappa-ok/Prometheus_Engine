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
    if (object2.x > obect1.w + object1.x || object1.x > object2.w + object2.x || object2.y > object1.h + object1.y || object1.y > object2.h + object2.y){
        return false;
    }
    return true;
}

function detectCollisions(){
    let obj1;
    let obj2;

    // Reset collision state of all objects
    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].isColliding = false;
    }

    // Start checking for collisions
    for (let i = 0; i < gameObjects.length; i++)
    {
        obj1 = gameObjects[i];
        for (let j = i + 1; j < gameObjects.length; j++)
        {
            obj2 = gameObjects[j];

            // Compare object1 with object2
            if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)){
                obj1.isColliding = true;
                obj2.isColliding = true;
            }
        }
    }
}