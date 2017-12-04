function lvlManager(game, lvlNumber) {
	this.game = game;
  this.lvlNumber = lvlNumber;
	this.murGroup = this.game.add.group();
  this.lvl = null;
	this.murCenter = null;
	this.murDroite = null;
	this.murGauche = null;
	this.isCreated = false;
	this.inactive = false;
	this.music = null;
};

lvlManager.prototype.create = function create() {

	this.music = game.add.audio('gameSound', 1, true);
	if (this.music.isPlaying == false)
	{
		this.music.play();
	}else{
	 this.music.resume();
	}


  if(this.lvlNumber === 0) {
    this.lvl = new tutorial1(this.game);
    this.lvl.create();
  }
};



lvlManager.prototype.update = function update() {

	/*if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
		this.music.pause();
		this.game.state.start("GameScore");
	}
*/
	this.lvl.update();
};



lvlManager.prototype._getMur = function _getMur() {
  return this.murGroup;
};

lvlManager.prototype._getlvl = function _getlvl() {
  return this.lvl;
};

lvlManager.prototype._getNextLvl = function _getNextLvl() {

	if (!this.inactive) {
		this.lvl.destroyAll();

	  this.lvlNumber++;

		if (this.lvlNumber == 1) {

			this.lvl = new tutorial2(this.game);
			this.lvl.create();

		}	else if (this.lvlNumber == 2) {

				this.lvl = new lvl1(this.game);
				this.lvl.create();

			} else if (this.lvlNumber == 3) {

				this.lvl = new lvl2(this.game);
				this.lvl.create();
			} else {
			this.inactive = true;
			this.music.pause();
			this.game.state.start("GameScore");
		}
	}
};
