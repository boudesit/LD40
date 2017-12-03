var HeroSkinny = function(game) {

	this.game = game;
  this.speed = 0;
}

HeroSkinny.prototype = {
    create: function() {
      this.speed = 500;
    },

    update: function() {
    }

}

HeroSkinny.prototype.getSpeed = function getSpeed() {
	return this.speed;
};
