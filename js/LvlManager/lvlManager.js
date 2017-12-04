function lvlManager(game, lvlNumber) {
	this.game = game;
  this.murGroup = this.game.add.group();
  this.lvlNumber = lvlNumber;
  this.lvl = null;
	this.murCenter = null;
	this.murDroite = null;
	this.murGauche = null;
	this.isCreated = false;
	this.inactive = false;
};

lvlManager.prototype.create = function create() {

  console.log("launch lvl");
  if(this.lvlNumber === 0) {
    console.log(this.lvlNumber);

    this.lvl = new tutorial2(this.game);
    this.lvl.create();

  }
};



lvlManager.prototype.update = function update() {
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

		this.lvl = new tutorial1(this.game);
		this.lvl.create();

	} else {
		this.inactive = true;
		this.game.state.start("GameWin");
	}
}
};
