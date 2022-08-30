//Basic functions

function tick(){
  clearCanvas();
  Draw();
  //physicsLoop();
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//TODO: Support music

sounds = {};

function addAudio(name, path){
    Name = name;
    audio = new Audio(path);
    Object.assign(sounds, {[Name]: audio});
}

function playSound(soundName){
    sounds[soundName].currentTime = 0;
    sounds[soundName].play();
}
