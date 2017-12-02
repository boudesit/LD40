function ComputeRessources(game, ressources, unit) {
	this.game = game;
	this.unit = unit;
  this.unit.isDestination = true;
	this.ressources = ressources;
  this.finnish = false;
};

ComputeRessources.prototype.create = function create() {
  this.unit.body.velocity.x = 0;
  this.ressources.body.velocity.x = 0;
  this.timer = game.time.create(false);
  this.timer.loop(1000, this.computeRessources, this);
  this.timer.start();
};



ComputeRessources.prototype.update = function update() {
};


ComputeRessources.prototype.computeRessources = function computeRessources() {

  if(this.unit.ressources < 100) {
    this.unit.ressources += 10;
  } else {
    this.finnish = true;
		this.timer.stop();
  }
};

ComputeRessources.prototype.isFinnish = function isFinnish() {
  return this.finnish;
};
//
// ComputeRessources.prototype.lose = function lose() {
// 	this.game.scoreTotal = 	this.score;
// 	this.game.state.start("GameOver");
// };
//
// ComputeRessources.prototype._incrementScore = function _incrementScore() {
// 		this.score += 50;
// 		this.scoreText.text = this.score;
// };
