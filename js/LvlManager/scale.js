function scale(game, posX, posY) {
	this.game = game;
  this.scaleSprite = null;
  this.posX = posX;
	this.posY = posY;

};

scale.prototype.create = function create() {

	this.scaleSprite = this.game.add.sprite(this.posX, this.posY, "scale");

	this.scaleSprite.enableBody = true;
	this.game.physics.arcade.enable(this.scaleSprite);
	this.scaleSprite.body.velocity.x = 0;
	this.scaleSprite.body.velocity.y = 0;
	this.scaleSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.scaleSprite.body.immovable = true;
	this.scaleSprite.body.moves = false;
	this.scaleSprite.type = "scale";
	this.scaleSprite.ressource = 10;

};

scale.prototype.update = function update() {
};

scale.prototype.getSprite =function getSprite() {
	return this.scaleSprite;
}
