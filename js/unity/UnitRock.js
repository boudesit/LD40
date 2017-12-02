function UnitRock(game, unitClans) {
	this.game = game;
	this.life = 4;
	this.unitRockSprite = null;
  this.dead = false;
  this.unitClans = unitClans;

	if(unitClans === "player") {
		this.velocityX = 60;
		this.posX = 100;
	} else {
		this.velocityX = -120;
		this.posX = 700;
	}
};

UnitRock.prototype.create = function create() {

	this.unitRockSprite = this.game.add.sprite(this.posX, 450, "miner", 0);
	this.unitRockSprite.animations.add('idle', [0,1,2]);
	this.unitRockSprite.animations.play('idle', 5, true);
	this.game.physics.arcade.enable(this.unitRockSprite);
	this.unitRockSprite.enableBody = true;
	this.unitRockSprite.body.velocity.x = 0;
	this.unitRockSprite.body.velocity.y = 0;
	this.unitRockSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.unitRockSprite.body.collideWorldBounds=true;
	this.unitRockSprite.anchor.set(0.5);
	this.unitRockSprite.scale.setTo(2,2);
	this.unitRockSprite.life = this.life;
	this.unitRockSprite.damage = 1;
  this.unitRockSprite.type = "Rock";
  this.unitRockSprite.isDestination = false;
  this.unitRockSprite.ressources = 0;
  this.unitRockSprite.unitClans = this.unitClans;

};

UnitRock.prototype.getSprite = function getSprite() {
	return this.unitRockSprite;
};

UnitRock.prototype.update = function update() {
};

UnitRock.prototype.destroy = function destroy() {
	this.unitRockSprite.destroy();
};

UnitRock.prototype.isDead = function isDead() {
	return this.dead;
};

UnitRock.prototype.die = function die() {
	this.dead = true;
};

UnitRock.prototype.getLife = function getLife() {
	return this.life;
};

UnitRock.prototype.setLife = function setLife(life) {
	this.life = life;
};
