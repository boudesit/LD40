var HeroFat = function(game) {

	this.game = game;
  this.speed = 0;
}

HeroFat.prototype = {

    create: function() {

      this.speed = 100;

    },

    update: function() {

    }

}

HeroFat.prototype.getSpeed = function getSpeed() {
	return this.speed;
};
