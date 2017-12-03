function wall(game, posX, posY) {
	this.game = game;
  this.wallsSprite = null;
  this.posX = posX;
	this.posY = posY;

};

wall.prototype.create = function create() {


  this.wallSprite = this.game.add.sprite(this.posX, this.posY, "wall", 0);

  this.wallSprite.animations.add('idle', [0]);

	this.wallSprite.enableBody = true;
	this.game.physics.arcade.enable(this.wallSprite);
	this.wallSprite.body.velocity.x = 0;
	this.wallSprite.body.velocity.y = 0;
	this.wallSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.wallSprite.body.immovable = true;
	this.wallSprite.body.moves = false;
	this.wallSprite.type = "wall";
	this.wallSprite.damage = 0;

};

wall.prototype.update = function update() {
  if(this.wallSprite.damage === 1) {

    this.wallSprite.loadTexture('wall', 1);

  } else if(this.wallSprite.damage === 2) {

    this.wallSprite.loadTexture('wall', 2);

  } else if(this.wallSprite.damage === 3) {

    this.wallSprite.kill();
  }
};

wall.prototype.getSprite =function getSprite() {
	return this.wallSprite;
};

wall.prototype.getBonus = function getBonus() {
  return this.wallsSprite.bonus;
};
