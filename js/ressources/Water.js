function Water(game, posX, posY) {
	this.game = game;
  this.waterSprite = null;
  this.posX = posX;
	this.posY = posY;
};

Water.prototype.create = function create() {

  	this.waterSprite = this.game.add.sprite(this.posX, this.posY, "ressource_1", 0);
		this.waterSprite.animations.add('idle', [0,1]);
		this.waterSprite.animations.play('idle', 5, true);

		this.waterSprite.enableBody = true;
		this.game.physics.arcade.enable(this.waterSprite);
		this.waterSprite.body.velocity.x = 0;
		this.waterSprite.body.velocity.y = 0;
		this.waterSprite.physicsBodyType = Phaser.Physics.ARCADE;
		this.waterSprite.body.immovable = true;
		this.waterSprite.body.moves = false;
		this.waterSprite.type = "Water";
		this.waterSprite.ressource = 10;
};

Water.prototype.update = function update() {
};

Water.prototype.getSprite =function getSprite() {
	return this.waterSprite;
}
