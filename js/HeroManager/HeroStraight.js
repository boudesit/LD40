var HeroStraight = function(game) {

	this.game = game;
  this.speed = 0;
}

HeroStraight.prototype = {
    create: function() {
      this.speed = 200;
    },

    update: function() {
    }

}

HeroStraight.prototype.getSpeed = function getSpeed() {
	return this.speed;
};
