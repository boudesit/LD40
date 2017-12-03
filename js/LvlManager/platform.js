function platform(game, posX, posY) {
	this.game = game;
  this.platformSprite = null;
  this.posX = posX;
	this.posY = posY;

};

platform.prototype.create = function create() {

	this.platformSprite = this.game.add.sprite(this.posX, this.posY, 'plateform');
	this.game.physics.enable(this.platformSprite);
	// this.plateform1.scale.setTo(1.5,1.5);
	this.platformSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.platformSprite.enableBody = true;
	this.platformSprite.body.immovable = true;
	this.platformSprite.body.moves = false;
	this.platformSprite.body.setSize(150, 20, 0, 0);


};

platform.prototype.update = function update() {
};

platform.prototype.getSprite =function getSprite() {
	return this.platformSprite;
}
