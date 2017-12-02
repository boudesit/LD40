function Rock(game, posX, posY) {
	this.game = game;
  this.rockSprite = null;
  this.posX = posX;
	this.posY = posY;
};

Rock.prototype.create = function create() {

  	this.rockSprite = this.game.add.sprite(this.posX, this.posY, "ressource_3", 0);
		this.rockSprite.animations.add('idle', [0,1]);
		this.rockSprite.animations.play('idle', 5, true);

		this.rockSprite.enableBody = true;
		this.game.physics.arcade.enable(this.rockSprite);
		this.rockSprite.body.velocity.x = 0;
		this.rockSprite.body.velocity.y = 0;
		this.rockSprite.physicsBodyType = Phaser.Physics.ARCADE;
		this.rockSprite.body.immovable = true;
		this.rockSprite.body.moves = false;
		this.rockSprite.type = "Rock";
		this.rockSprite.ressource = 10;

};

Rock.prototype.update = function update() {
};

Rock.prototype.getSprite =function getSprite() {
	return this.rockSprite;
}
