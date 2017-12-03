var HeroFat = function(game) {

	this.game = game;
  this.speed = 100;
	this.jump = 10;
	this.jumpDuration = 50;
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
