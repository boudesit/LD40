function Food(game, posX, posY) {
	this.game = game;
  this.foodSprite = null;
  this.posX = posX;
	this.posY = posY;

};

Food.prototype.create = function create() {

	this.foodSprite = this.game.add.sprite(this.posX, this.posY, "ressource_2", 0);
	this.foodSprite.animations.add('idle', [0,1]);
	this.foodSprite.animations.play('idle', 5, true);

	this.foodSprite.enableBody = true;
	this.game.physics.arcade.enable(this.foodSprite);
	this.foodSprite.body.velocity.x = 0;
	this.foodSprite.body.velocity.y = 0;
	this.foodSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.foodSprite.body.immovable = true;
	this.foodSprite.body.moves = false;
	this.foodSprite.type = "Food";
	this.foodSprite.ressource = 10;

};

Food.prototype.update = function update() {
};

Food.prototype.getSprite =function getSprite() {
	return this.foodSprite;
}
