var HeroStraight = function(game) {

	this.game = game;
	this.speed = 200;
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
