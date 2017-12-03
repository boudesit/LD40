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
