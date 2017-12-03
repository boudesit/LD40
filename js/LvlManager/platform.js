function platform(game, posX, posY, length) {
	this.game = game;
  this.platformSprite = null;
  this.posX = posX;
	this.posY = posY;
	this.length = length;

};

platform.prototype.create = function create() {

	this.platformSprite = this.game.add.sprite(this.posX, this.posY, 'plateform' + this.length);
	this.game.physics.enable(this.platformSprite);
	// this.plateform1.scale.setTo(1.5,1.5);
	this.platformSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.platformSprite.enableBody = true;
	this.platformSprite.body.immovable = true;
	this.platformSprite.body.moves = false;
	this.platformSprite.body.checkCollision.up = true;
	this.platformSprite.body.checkCollision.down = false;
	this.platformSprite.body.checkCollision.right = false;
	this.platformSprite.body.checkCollision.left = false;

	this.platformSprite.body.setSize(this.length, 20, 0, 0);


};

platform.prototype.update = function update() {
};

platform.prototype.getSprite =function getSprite() {
	return this.platformSprite;
}
