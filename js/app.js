/*******************************************************************************
                       MY CODE
*******************************************************************************/
const player = new Player();
const allEnemies = [...Array(4)].map((_, i)=> new Enemy(0, i+1));               // adjusts number of ladybugs
const lifeCounter = document.querySelector('.stars');
const heart = new Reward();
let life;
const scoreboard = document.querySelector('.scoreboard');
let winNow = false;




/*******************************************************************************
                My FUNCTIONS
*******************************************************************************/

function updateLifeCounter(Life) {                                              // WORKS
  lifeCounter.innerText = `${life}`;
  if (life === 0) {
    lostAlert();
  }
}

function lostAlert() {                                                          // WORKS function is called.
  alert('You Lost!');                                                           // WORKS game stops.
  main();
}

function wonAlert() {
  winNow = true;
  // move = false;
  alert('YOU WON!');                                                            // WORKS shown once and game is ended. // TODO: shown before enters water, then player enters water.
  main();
}



document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',                                  
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
