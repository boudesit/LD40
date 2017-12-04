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
		sprite.animations.play('hero_fat_idle');
};

HeroFat.prototype.getAnimationWalk = function getAnimationWalk(sprite) {
		sprite.animations.play('hero_fat_walk');
};

HeroFat.prototype.getAnimationJump = function getAnimationJump(sprite) {
		sprite.animations.play('hero_fat_idle');
};

HeroFat.prototype.getAnimationPower = function getAnimationJump(sprite) {
		sprite.animations.play('hero_fat_break');
};

HeroFat.prototype.getAnimationClimb = function getAnimationClimb(sprite) {
		sprite.animations.play('hero_fat_climb');
};

HeroFat.prototype.getAnimationBreak = function getAnimationClimb(sprite) {
		sprite.animations.play('hero_fat_break');
};

HeroFat.prototype.getDamageBreak = function getDamageBreak(sprite) {
	return 1;
};
