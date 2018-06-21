/*******************************************************************
                       MY CODE
*******************************************************************/
const player = new Player();
const allEnemies = [...Array(4)].map((_, i)=> new Enemy(0, i+1));

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
