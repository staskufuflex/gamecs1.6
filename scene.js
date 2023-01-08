'use strict';

const bgScene = ['./img/map1.jpg', './img/map2.jpg', './img/map3.jpg', './img/map4.jpg', './img/map5.jpg'];
const botName = ['bot1', 'bot2', 'bot3'];

let level;
let botOnLevel;
let playerGame;
let menuWeapon;
let startTime;
let countMap = 0;
let countBot = -1;

class Scene {
    constructor(value, mapLevel) {
        this.value = value;
        this.scene = document.createElement('section');
        this.scene.classList.add('scene');
        this.scene.setAttribute('id', 'scene');
        this.scene.style.backgroundImage = `url(${bgScene[mapLevel - 1]})`;
        body.append(this.scene);

        this.delScene = function () {
            this.scene.remove();
        }
    }
}

const openNewGame = () => {
    if (countMap === 5) {
        countMap = 1;
    } else {
        countMap += 1;
    }
    if (countBot === 2) {
        countBot = 0;
    } else {
        countBot += 1;
    }
    level = new Scene(`level${countMap}`, countMap);
    let observer = new Observer(); // M
    botOnLevel = new CreateBot(botName[countBot]);
    observer.subscribe(botOnLevel.damageBot);
    console.log(observer);
    setTimeout(observer.unsubscribe(botOnLevel.damageBot), 3000);
    setTimeout(console.log(observer), 3000);
    ;
    document.querySelector('.bot-duck').addEventListener('click', (event) => { observer.broadcast(event)}); // add Listener for observer
    playerGame = new Player('./img/ak471.png');
    menuWeapon = new MenuWeapon();
    new sceneTextMenu;
    audio.audioMenu.pause();
    audio.audioGame.volume = '0.1';
    audio.audioGame.play();
    audio.audioGame.loop = true;
    audio.gogogo.play();
    body.addEventListener('keydown', closeMap);
    body.removeEventListener('keydown', newsGame);
    scene.addEventListener('click', hit);
    startTime = setTimeout(() => playerGame.huckPlayer(), 1000);
}

const closeMap = (event) => {
    if (event.key !== 'Escape') {
        return;
    } else {
        level.delScene();
        audio.audioGame.pause();
        audio.audioMenu.play();
        clearTimeout(timerId);
        clearTimeout(startTime);
        body.removeEventListener('mousemove', aim);
        endGame.style.display = 'none';
    }
}

newGame.addEventListener('click', openNewGame); // new game button (LoadScrean)






