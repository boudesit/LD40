function vegetable(game, posX, posY) {
	this.game = game;
  this.vegetablesSprite = null;
  this.posX = posX;
	this.posY = posY;

};

vegetable.prototype.create = function create() {


  this.vegetableSprite = this.game.add.sprite(this.posX, this.posY, "vegetable", 0);

  this.vegetableSprite.animations.add('idle', [0,1,2]);
  this.vegetableSprite.animations.play('idle', 10, true);

	this.vegetableSprite.enableBody = true;
	this.game.physics.arcade.enable(this.vegetableSprite);
	this.vegetableSprite.body.velocity.x = 0;
	this.vegetableSprite.body.velocity.y = 0;
	this.vegetableSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.vegetableSprite.body.immovable = true;
	this.vegetableSprite.body.moves = false;
	this.vegetableSprite.type = "vegetable";

};

vegetable.prototype.update = function update() {
};

vegetable.prototype.getSprite =function getSprite() {
	return this.vegetableSprite;
};
