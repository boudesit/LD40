function door(game, posX, posY, bonus) {
	this.game = game;
  this.doorsSprite = null;
  this.posX = posX;
	this.posY = posY;
  this.bonus = bonus;

};

door.prototype.create = function create() {

  // if(this.bonus) {
	//    this.doorSprite = this.game.add.sprite(this.posX, this.posY, "bonus-door", 0);
  // } else {
    this.doorSprite = this.game.add.sprite(this.posX, this.posY, "door", 0);
  // }

  this.doorSprite.animations.add('idle', [0,1,2]);
  this.doorSprite.animations.play('idle', 30, true);

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

door.prototype.getBonus = function getBonus() {
  return this.doorsSprite.bonus;
};
