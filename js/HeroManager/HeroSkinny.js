var HeroSkinny = function(game) {

	this.game = game;
  this.speed = 400;
	this.speedLadder = 150;
	this.jump = 400;
	this.jumpDuration = 1700;
	this.portebonus = true;
}

HeroSkinny.prototype = {
    create: function() {

    },

    update: function() {
    }

}

HeroSkinny.prototype.getSpeed = function getSpeed() {
	return this.speed;
};

HeroSkinny.prototype.getJump = function getJump() {
	return this.jump;
};

HeroSkinny.prototype.getJumpDuration = function getJumpDuration() {
	return this.jumpDuration;
};

HeroSkinny.prototype.getCanPorteBonus = function getCanPorteBonus() {
	return this.portebonus;
};

HeroSkinny.prototype.getSpeedLadder = function getSpeedLadder() {
	return this.speedLadder;
};

HeroSkinny.prototype.getAnimationIdle = function getAnimationIdle(sprite) {
		sprite.animations.play('hero_light_idle');
};

HeroSkinny.prototype.getAnimationWalk = function getAnimationWalk(sprite) {
		sprite.animations.play('hero_light_walk');
};

HeroSkinny.prototype.getAnimationJump = function getAnimationJump(sprite) {
		sprite.animations.play('hero_light_jump');
};

HeroSkinny.prototype.getAnimationClimb = function getAnimationClimb(sprite) {
		sprite.animations.play('hero_light_climb');
};
