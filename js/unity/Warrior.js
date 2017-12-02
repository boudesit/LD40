function Warrior(game, unitClans) {
	this.game = game;
	this.life = 10;
	this.warriorSprite = null;
  this.dead = false;
	this.unitClans = unitClans;
	if(this.unitClans === "player") {
		this.velocityX = 60;
		this.posX = 100;
	} else {
		this.velocityX = -60;
		this.posX = 700;
	}
};

Warrior.prototype.create = function create() {
	if(this.unitClans === "player") {
	this.warriorSprite = this.game.add.sprite(this.posX, 370, "warrior", 0);
	} else {
	this.warriorSprite = this.game.add.sprite(this.posX, 370, "warriorComputer", 0);
	}

	this.warriorSprite.animations.add('idle', [0,1,2]);
	this.warriorSprite.animations.play('idle', 5, true);
	this.game.physics.arcade.enable(this.warriorSprite);
	this.warriorSprite.enableBody = true;
	this.warriorSprite.body.velocity.x = this.velocityX;
	this.warriorSprite.body.velocity.y = 0;
	this.warriorSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.warriorSprite.body.collideWorldBounds=true;
	this.warriorSprite.anchor.set(0.5);
	this.warriorSprite.scale.setTo(2,2);
	this.warriorSprite.life = this.life;
	this.warriorSprite.damage = 1;
};

Warrior.prototype.getSprite = function getSprite() {
	return this.warriorSprite;
};

Warrior.prototype.update = function update() {
};

Warrior.prototype.destroy = function destroy() {
	this.warriorSprite.destroy();
};

Warrior.prototype.isDead = function isDead() {
	return this.dead;
};

Warrior.prototype.die = function die() {
	this.dead = true;
};

Warrior.prototype.getLife = function getLife() {
	return this.life;
};

Warrior.prototype.setLife = function setLife(life) {
	this.life = life;
};
