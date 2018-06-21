class Entity {
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
  }
  update(dt){
    this.isOutOfBoundsX = this.x > 5;
    this.isOutOfBoundsY = this.y < 1;

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);       //  Adjusted vertical placement of entities. - more centered in the squares.
  }

  // checkCollision() {
  //
  // }
};

class Player extends Entity {
  constructor() {
    super();
    this.sprite += 'char-cat-girl.png';
    // handleInput();
    // checkWin();
  }
}

class Enemy extends Entity {
  constructor(x,y) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
    // changePace();
  }
  update(dt) {
    super.update();
    if(this.isOutOfBoundsX){
      this.x = -1;
    } else {
      this.x += dt;
    }
  }
}
