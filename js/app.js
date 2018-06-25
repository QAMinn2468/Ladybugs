/*******************************************************************
                       MY CODE
*******************************************************************/
const player = new Player();
const allEnemies = [...Array(4)].map((_, i)=> new Enemy(0, i+1));               // adjusts number of ladybugs
const lifeCounter = document.querySelector('.stars');
const heart = new Reward();
let life;

function updateLifeCounter(Life){                                               // WORKS
  lifeCounter.innerText = `${life}`
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
