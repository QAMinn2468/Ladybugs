/*******************************************************************************
                        ENTITY OBJECT
*******************************************************************************/


class Entity {
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
  }

  update(dt){
    this.isOutOfBoundsX = this.x > 5;                                           // WORKS - player stays in bounds
    this.isOutOfBoundsY = this.y < 1;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);       //  Adjusted vertical placement of entities. - more centered in the squares.
  }

  checkCollisions(playerOrEnemy) {
    if (this.y === playerOrEnemy.y) {
      if (this.x >= playerOrEnemy.x - 1 && this.x <= (playerOrEnemy.x + 1)) {  // WORKS fine.   Collision!!
        return true;
      } else {
        return false;
      }
    }
  }
};

/*******************************************************************************
                        PLAYER OBJECT
*******************************************************************************/

class Player extends Entity {
  constructor() {
    super();
    this.sprite += 'char-boy-hat.png';
  }
    handleInput(input) {
      switch (input) {
        case 'left':
          this.x = this.x > 0 ? this.x - 1 : this.x;                            // Left WORKS
          break;
        case 'up':
          this.y = this.y > 0 ? this.y - 1 : this.y;                            // Up WORKS
          break;
        case 'right':
          this.x = this.x < 4 ? this.x + 1 : this.x;                            // Right WORKS
          break;
        case 'down':
          this.y = this.y < 5 ? this.y + 1 : this.y;                            // Down WORKS
          break;
        default:
          break;
      }
    }
}

/*******************************************************************************
                        ENEMY OBJECT
*******************************************************************************/

class Enemy extends Entity {
  constructor(x,y) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
    // changePace() {
    //   switch(this.y) {
    //     case 1:
    //       this.x += 2 * dt;
    //       break;
    //
    //     case 2:
    //       this.x += 1.5 * dt;
    //       break;
    //
    //     case 3:
    //       this.x += 1.25 * dt;
    //       break;
    //
    //     case 4:
    //       this.x += dt;
    //       break;
    //
    //     default:
    //       break;
    //   }
    // }                                 // TODO:  change speed of bugs
  }
  update(dt) {
    super.update();
    if(this.isOutOfBoundsX){
      this.x = -1;                                                              // WORKS - wraps ladybugs around to other side.
    } else {
      this.x += 1.5 * dt;
    }
  }
}

/*******************************************************************************
                        REWARD OBJECT
*******************************************************************************/

class Reward extends Entity {
  constructor() {
    super();
    this.sprite += 'Heart.png';                                                 // WORKS - heart is shown  // TODO: fix z-index so bug is over heart.
    this.x = 2;                                                                 // Fixed! life for touch and disappear.
    this.y = 1;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }
}
