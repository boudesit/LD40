function door(game, posX, posY, bonus) {
	this.game = game;
  this.doorsSprite = null;
  this.posX = posX;
	this.posY = posY;
  this.bonus = bonus;

};

door.prototype.create = function create() {

  if(this.bonus) {
	   this.doorSprite = this.game.add.sprite(this.posX, this.posY, "bonus-door", 0);
  } else {
    this.doorSprite = this.game.add.sprite(this.posX, this.posY, "door", 0);
		this.doorSprite.animations.add('animation', 'animation');
  }

  this.doorSprite.animations.add('idle');
  this.doorSprite.animations.play('idle', 10, true);

	this.doorSprite.enableBody = true;
	this.game.physics.arcade.enable(this.doorSprite);
	this.doorSprite.body.velocity.x = 0;
	this.doorSprite.body.velocity.y = 0;
	this.doorSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.doorSprite.body.immovable = true;
	this.doorSprite.body.moves = false;
	this.doorSprite.type = "door";
	this.doorSprite.bonus = this.bonus;

};

door.prototype.update = function update() {
};

door.prototype.getSprite =function getSprite() {
	return this.doorSprite;
};

door.prototype.getAnimation = function getAnimation() {
  this.animation.animations.play('animation-bonus', 10, true);
};

door.prototype.getAnimation = function getAnimation() {
	this.animation.animations.play('animation', 10, true);
};

door.prototype.getBonus = function getBonus() {
  return this.doorsSprite.bonus;
};
