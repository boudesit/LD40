var HeroStraight = function(game) {

	this.game = game;
	this.speed = 200;
	this.jump = 200;
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
		if(sprite.animations)
		sprite.animations.play('hero_semi_idle');
};

HeroStraight.prototype.getAnimationWalk = function getAnimationWalk(sprite) {
		sprite.animations.play('hero_semi_walk');
};

HeroStraight.prototype.getAnimationJump = function getAnimationJump(sprite) {
		sprite.animations.play('hero_semi_jump');
};

HeroStraight.prototype.getAnimationClimb = function getAnimationClimb(sprite) {
		sprite.animations.play('hero_semi_climb');
};
HeroStraight.prototype.getAnimationBreak = function getAnimationClimb(sprite) {
		sprite.animations.play('hero_semi_idle');
};

HeroStraight.prototype.getDamageBreak = function getDamageBreak(sprite) {
	return 0;
};
