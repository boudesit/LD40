var HeroStraight = function(game) {

	this.game = game;
	this.speed = 200;
	this.jump = 300;
	this.speedLadder = 100;
	this.jumpDuration = 1400;
	this.portebonus = true;
}

HeroStraight.prototype = {
    create: function() {

    },

    update: function() {
    }

}

HeroStraight.prototype.getSpeed = function getSpeed() {
	return this.speed;
};

HeroStraight.prototype.getJump = function getJump() {
	return this.jump;
};

HeroStraight.prototype.getJumpDuration = function getJumpDuration() {
	return this.jumpDuration;
};

HeroStraight.prototype.getCanPorteBonus = function getCanPorteBonus() {
	return this.portebonus;
};

HeroStraight.prototype.getSpeedLadder = function getSpeedLadder() {
	return this.speedLadder;
};

HeroStraight.prototype.getAnimationIdle = function getAnimationIdle(sprite) {
	   sprite = this.game.add.sprite(sprite.x,sprite.y, 'hero_semi_idle');
	   sprite.animations.add('hero_semi_idle');
		 sprite.animations.play('hero_semi_idle', 5, true);
};
