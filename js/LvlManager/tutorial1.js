function tutorial1(game) {
	this.game = game;
  this.murGroup = this.game.add.group();
	this.plateform1 = null;
	this.plateform2 = null;
	this.murGauche = null;

  this.lvlManager = null;
  this.exit = null;
};

tutorial1.prototype.create = function create() {

	//mur center
	this.plateform1 = this.game.add.sprite(150, 20, 'plateform');
	this.game.physics.enable(this.plateform1);
	this.plateform1.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform1.enableBody = true;
	this.plateform1.body.immovable = true;
	this.plateform1.body.setSize(150, 20, 0, 0);
  this.murGroup.add(this.plateform1);

	//mur Droite
	this.plateform2 = this.game.add.sprite(200, 20, 'plateform');
	this.game.physics.enable(this.plateform2);
	this.plateform2.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform2.enableBody = true;
	this.plateform2.body.immovable = true;
	this.plateform2.body.setSize(150, 20, 0, 0);
	this.murGroup.add(this.plateform2);

	//mur Gauche
	this.murGauche = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murGauche);
	this.murGauche.physicsBodyType = Phaser.Physics.ARCADE;
	this.murGauche.enableBody = true;
	this.murGauche.body.immovable = true;
	this.murGauche.body.setSize(10, 600, 0, 0);
	this.murGroup.add(this.murGauche);

  this.exit = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  this.exit.onDown.add(this.lvlEnding, this);


};



tutorial1.prototype.update = function update() {


};

tutorial1.prototype.lvlEnding = function lvlEnding(){

    this.lvlManager = new lvlManager(this.game, 1);
    this.lvlManager.create();
};

tutorial1.prototype._getMur = function _getMur() {
  return this.murGroup;
};
