var HeroFat = function(game) {

	this.game = game;
  this.speed = 100;
	this.speedLadder = 50;
	this.jump = 0;
	this.jumpDuration = 1500;
	this.portebonus = false;
}

HeroFat.prototype = {

    create: function() {

    },

    update: function() {

    }

}

HeroFat.prototype.getSpeed = function getSpeed() {
	return this.speed;
};

HeroFat.prototype.getJump = function getJump() {
	return this.jump;
};

HeroFat.prototype.getJumpDuration = function getJumpDuration() {
	return this.jumpDuration;
};

HeroFat.prototype.getCanPorteBonus = function getCanPorteBonus() {
	return this.portebonus;
};

HeroFat.prototype.getSpeedLadder = function getSpeedLadder() {
	return this.speedLadder;
};

HeroFat.prototype.getAnimationIdle = function getAnimationIdle(sprite) {
	   sprite = this.game.add.sprite(sprite.x,sprite.y, 'hero_fat_idle');
	   sprite.animations.add('hero_fat_idle');
		 sprite.animations.play('hero_fat_idle', 5, true);
};
