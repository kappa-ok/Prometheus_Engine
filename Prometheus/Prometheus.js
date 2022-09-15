//Basic functions

function tick(){
  clearCanvas();

  for(var i = 0; i < sprites.length; i++){
    sprites[i].draw();
  }

}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function deleteGameObject(object){
  var objToDel = gameObjects.indexOf(object);
  if(objToDel > -1){
    gameObjects.splice(objToDel, 1);
  }
  
}

function deleteSprite(sprite){
  var sprToDel = sprites.indexOf(sprite);
  if(sprToDel > -1){
    sprites.splice(sprToDel, 1);
  }
}

//TODO: Support music

sounds = {};

function addAudio(name, path){
    Name = name;
    audio = new Audio(path);
    Object.assign(sounds, {[Name]: audio});
    sounds[Name].currentTime = 0;
}

function playAudio(audioName){
    //sounds[audioName].currentTime = 0;
    sounds[audioName].play();
}

function pauseAudio(audioName){
    sounds[audioName].pause();
}

function stopAudio(audioName){
    sounds[audioName].currentTime = 0;
    sounds[audioName].pause();
}
