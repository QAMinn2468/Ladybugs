/*******************************************************************
                       MY CODE
*******************************************************************/
const player = new Player();
const allEnemies = [...Array(4)].map((_, i)=> new Enemy(0, i+1));               // adjusts number of ladybugs
const lifeCounter = document.querySelector('.stars');
const heart = new Reward();
let life;
const scoreboard = document.querySelector('.scoreboard');

function updateLifeCounter(Life) {                                              // WORKS
  lifeCounter.innerText = `${life}`;
  if (life === 0) {
    lostAlert();
  }
}

function lostAlert() {                                                          // WORKS function is called.
  alert('You Lost!');                                                           // WORKS game stops while alert is up.  // TODO: clearing alert, restarts game.  init()
}

function wonAlert() {
  alert('YOU WON!');                                                            // WORKS  - // TODO:  called a bit early, game keeps playing and trying to alert., needs reset.
}




document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',                                  // TODO: add ADWS as a choice for movement. or even click
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
