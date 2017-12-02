function map(game) {
	this.game = game;
  this.murGroup = this.game.add.group();
	this.murCenter = null;
	this.murDroite = null;
	this.murGauche = null;
};

map.prototype.create = function create() {

	//mur center
	this.murCenter = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murCenter);
	this.murCenter.physicsBodyType = Phaser.Physics.ARCADE;
	this.murCenter.enableBody = true;
	this.murCenter.body.immovable = true;
	this.murCenter.body.setSize(800, 10, 0, 400);
  this.murGroup.add(this.murCenter);

	//mur Droite
	this.murDroite = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murDroite);
	this.murDroite.physicsBodyType = Phaser.Physics.ARCADE;
	this.murDroite.enableBody = true;
	this.murDroite.body.immovable = true;
	this.murDroite.body.setSize(10, 600, 0, 600);
	this.murGroup.add(this.murCenter);

	//mur Gauche
	this.murGauche = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murGauche);
	this.murGauche.physicsBodyType = Phaser.Physics.ARCADE;
	this.murGauche.enableBody = true;
	this.murGauche.body.immovable = true;
	this.murGauche.body.setSize(10, 600, 0, 0);
	this.murGroup.add(this.murGauche);

};



map.prototype.update = function update() {


};



map.prototype._getMur = function _getMur() {
  return this.murGroup;
};
