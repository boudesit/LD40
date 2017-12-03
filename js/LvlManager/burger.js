function burger(game, posX, posY) {
	this.game = game;
  this.burgersSprite = null;
  this.posX = posX;
	this.posY = posY;

};

burger.prototype.create = function create() {


  this.burgerSprite = this.game.add.sprite(this.posX, this.posY, "burger", 0);

  this.burgerSprite.animations.add('idle', [0,1,2]);
  this.burgerSprite.animations.play('idle', 10, true);

	this.burgerSprite.enableBody = true;
	this.game.physics.arcade.enable(this.burgerSprite);
	this.burgerSprite.body.velocity.x = 0;
	this.burgerSprite.body.velocity.y = 0;
	this.burgerSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.burgerSprite.body.immovable = true;
	this.burgerSprite.body.moves = false;
	this.burgerSprite.type = "burger";

};

burger.prototype.update = function update() {
};

burger.prototype.getSprite =function getSprite() {
	return this.burgerSprite;
};
