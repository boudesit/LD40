function lvlManager(game, lvlNumber) {
	this.game = game;
  this.murGroup = this.game.add.group();
  this.lvlNumber = lvlNumber;
  this.lvl = null;
	this.murCenter = null;
	this.murDroite = null;
	this.murGauche = null;
};

lvlManager.prototype.create = function create() {

  console.log("launch lvl");
  if(this.lvlNumber === 0) {
    console.log(this.lvlNumber);

    this.lvl = new tutorial1(this.game);
    this.lvl.create();

  } else if (this.lvlNumber == 1) {
    console.log(this.lvlNumber);

  }

};



lvlManager.prototype.update = function update() {

};



lvlManager.prototype._getMur = function _getMur() {
  return this.murGroup;
};
