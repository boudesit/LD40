function Fight(game, player, computer) {
	this.game = game;
	this.player = player;
	this.computer = computer;
  this.finnish = false;
	this.playerDeath = null ;
	this.computerDeath = null ;
};

Fight.prototype.create = function create() {
	this.deathSound = game.add.audio('deathSound');
	this.playerDeath  = game.add.sprite(-100,-100, 'playerDeath');
	this.computerDeath  = game.add.sprite(-100,-100, 'computerDeath');
  this.player.body.velocity.x = 0;
  this.computer.body.velocity.x = 0;
  this.timer = game.time.create(false);
  this.timer.loop(100, this.fight, this);
  this.timer.start();
};



Fight.prototype.update = function update() {
};


Fight.prototype.fight = function fight() {

		this.player.life -= this.computer.damage;
		this.computer.life -= this.player.damage;

	if(this.player.life <= 0){
		this.player.kill();
		this.deathSound.play();
		this.playerDeath.reset(this.player.x -25 , this.player.y -50);
		this.playerDeath.animations.add('playerDeath');
		this.playerDeath.play('playerDeath', 5, false , true);
    this.finnish = true;
  	this.timer.stop();
	}

	if(this.computer.life <= 0){
		this.computer.kill();
		this.deathSound.play();
		this.computerDeath.reset(this.computer.x -25 , this.computer.y -50);
		this.computerDeath.animations.add('computerDeath');
		this.computerDeath.play('computerDeath', 5, false , true);
    this.finnish = true;
		this.timer.stop();
	}
};

Fight.prototype.isFinnish = function isFinnish() {
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
