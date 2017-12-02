function FightCastle(game, unit, castle) {
	this.game = game;
	this.unit = unit;
	this.castle = castle;
  this.finnish = false;
};

FightCastle.prototype.create = function create() {
  this.unit.body.velocity.x = 0;
  this.timer = game.time.create(false);
  this.timer.loop(1000, this.fight, this);
  this.timer.start();
};



FightCastle.prototype.update = function update() {
	if (this.shakeWorld > 0)
	{
		var rand1 = game.rnd.integerInRange(-2,2);
		var rand2 = game.rnd.integerInRange(-2,2);
		game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
		this.shakeWorld--;
	}

	if (this.shakeWorld == 0) {
		game.world.setBounds(0, 0, game.width,game.height);
	}
};


FightCastle.prototype.fight = function fight() {

  this.castle.life -= this.unit.damage;
	this.shakeWorld =2;
  if(this.castle.life <= 0) {
    this.finnish = true;
  }
};

FightCastle.prototype.getUnitSprite = function getUnitSprite() {
  return this.unit;
};

FightCastle.prototype.isFinnish = function isFinnish() {
  return this.finnish;
};
//
// Fight.prototype.lose = function lose() {
// 	this.game.scoreTotal = 	this.score;
// 	this.game.state.start("GameOver");
// };
//
// Fight.prototype._incrementScore = function _incrementScore() {
// 		this.score += 50;
// 		this.scoreText.text = this.score;
// };
