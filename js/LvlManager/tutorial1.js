function tutorial1(game) {
	this.game = game;
  this.firstLine = null;
	this.secondLine = null;
	this.thirdLine = null;

	this.plateform1 = null;
	this.plateform2 = null;
	this.plateform3 = null;
	this.plateform4 = null;

	this.plateform5 = null;
	this.plateform6 = null;
	this.plateform7 = null;
	this.plateform8 = null;
	this.plateform9 = null;
	this.plateform10 = null;

	this.plateform11 = null;
	this.plateform12 = null;
	this.plateform13 = null;
	this.plateform14 = null;

  this.lvlManager = null;
  this.exit = null;
};

tutorial1.prototype.create = function create() {


	createFirstLine();
	createSecondLine();
	createThirdLine();


  this.exit = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  this.exit.onDown.add(this.lvlEnding, this);


};


var createFirstLine = function() {

	this.firstLine = this.game.add.group();
	// First Line of Plateform
	this.plateform1 = this.game.add.sprite(0, 500, 'plateform');
	this.game.physics.enable(this.plateform1);
	// this.plateform1.scale.setTo(1.5,1.5);
	this.plateform1.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform1.enableBody = true;
	this.plateform1.body.immovable = true;
	this.plateform1.body.setSize(150, 20, 0, 0);
	this.firstLine.add(this.plateform1);

	this.plateform2 = this.game.add.sprite(150, 500, 'plateform');
	this.game.physics.enable(this.plateform2);
	this.plateform2.physicsBodyType = Phaser.Physics.ARCADE;
	// this.plateform2.scale.setTo(1.5,1.5);
	this.plateform2.enableBody = true;
	this.plateform2.body.immovable = true;
	this.plateform2.body.setSize(150, 20, 0, 0);
	this.firstLine.add(this.plateform2);


	this.plateform3 = this.game.add.sprite(650, 500, 'plateform');
	this.game.physics.enable(this.plateform3);
	this.plateform3.physicsBodyType = Phaser.Physics.ARCADE;
	// this.plateform3.scale.setTo(1.5,1.5);
	this.plateform3.enableBody = true;
	this.plateform3.body.immovable = true;
	this.plateform3.body.setSize(150, 20, 0, 0);
	this.firstLine.add(this.plateform3);

	this.plateform4 = this.game.add.sprite(500, 500, 'plateform');
	this.game.physics.enable(this.plateform4);
	this.plateform4.physicsBodyType = Phaser.Physics.ARCADE;
	// this.platform4.scale.setTo(1.5,1.5);
	this.plateform4.enableBody = true;
	this.plateform4.body.immovable = true;
	this.plateform4.body.setSize(150, 20, 0, 0);
	this.firstLine.add(this.plateform4);
}


var createSecondLine = function() {
	// Second Line of Plateform
	this.secondLine = this.game.add.group();

	this.plateform5 = this.game.add.sprite(0, 300, 'plateform');
	this.game.physics.enable(this.plateform5);
	// this.plateform5.scale.setTo(1.5,1.5);
	this.plateform5.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform5.enableBody = true;
	this.plateform5.body.immovable = true;
	this.plateform5.body.setSize(150, 20, 0, 0);
  this.secondLine.add(this.plateform5);

	this.plateform6 = this.game.add.sprite(150, 300, 'plateform');
	this.game.physics.enable(this.plateform6);
	this.plateform6.physicsBodyType = Phaser.Physics.ARCADE;
	// this.plateform6.scale.setTo(1.5,1.5);
	this.plateform6.enableBody = true;
	this.plateform6.body.immovable = true;
	this.plateform6.body.setSize(150, 20, 0, 0);
	this.secondLine.add(this.plateform6);

	this.plateform7 = this.game.add.sprite(400, 300, 'plateform');
	this.game.physics.enable(this.plateform7);
	this.plateform7.physicsBodyType = Phaser.Physics.ARCADE;
	// this.plateform7.scale.setTo(1.5,1.5);
	this.plateform7.enableBody = true;
	this.plateform7.body.immovable = true;
	this.plateform7.body.setSize(150, 20, 0, 0);
	this.secondLine.add(this.plateform7);

	// this.plateform9 = this.game.add.sprite(500, 300, 'plateform');
	// this.game.physics.enable(this.plateform9);
	// this.plateform9.physicsBodyType = Phaser.Physics.ARCADE;
	// // this.plateform9.scale.setTo(1.5,1.5);
	// this.plateform9.enableBody = true;
	// this.plateform9.body.immovable = true;
	// this.plateform9.body.setSize(150, 20, 0, 0);
	// this.secondLine.add(this.plateform9);

	this.plateform10 = this.game.add.sprite(650, 300, 'plateform');
	this.game.physics.enable(this.plateform10);
	this.plateform10.physicsBodyType = Phaser.Physics.ARCADE;
	// this.plateform10.scale.setTo(1.5,1.5);
	this.plateform10.enableBody = true;
	this.plateform10.body.immovable = true;
	this.plateform10.body.setSize(150, 20, 0, 0);
	this.secondLine.add(this.plateform10);
}

var createThirdLine = function() {

	this.thirdLine = this.game.add.group();

	this.plateform11 = this.game.add.sprite(0, 100, 'plateform');
	this.game.physics.enable(this.plateform11);
	// this.plateform5.scale.setTo(1.5,1.5);
	this.plateform11.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform11.enableBody = true;
	this.plateform11.body.immovable = true;
	this.plateform11.body.setSize(150, 20, 0, 0);
	this.thirdLine.add(this.plateform11);

	this.plateform12 = this.game.add.sprite(150, 100, 'plateform');
	this.game.physics.enable(this.plateform12);
	// this.plateform5.scale.setTo(1.5,1.5);
	this.plateform12.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform12.enableBody = true;
	this.plateform12.body.immovable = true;
	this.plateform12.body.setSize(150, 20, 0, 0);
	this.thirdLine.add(this.plateform12);

	this.plateform13 = this.game.add.sprite(300, 100, 'plateform');
	this.game.physics.enable(this.plateform13);
	// this.plateform5.scale.setTo(1.5,1.5);
	this.plateform13.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform13.enableBody = true;
	this.plateform13.body.immovable = true;
	this.plateform13.body.setSize(150, 20, 0, 0);
	this.thirdLine.add(this.plateform13);

	this.plateform14 = this.game.add.sprite(450, 100, 'plateform');
	this.game.physics.enable(this.plateform14);
	// this.plateform5.scale.setTo(1.5,1.5);
	this.plateform14.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform14.enableBody = true;
	this.plateform14.body.immovable = true;
	this.plateform14.body.setSize(150, 20, 0, 0);
	this.thirdLine.add(this.plateform14);

	this.plateform15 = this.game.add.sprite(600, 100, 'plateform');
	this.game.physics.enable(this.plateform15);
	// this.plateform5.scale.setTo(1.5,1.5);
	this.plateform15.physicsBodyType = Phaser.Physics.ARCADE;
	this.plateform15.enableBody = true;
	this.plateform15.body.immovable = true;
	this.plateform15.body.setSize(150, 20, 0, 0);
	this.thirdLine.add(this.plateform15);

}

tutorial1.prototype.update = function update() {


};

tutorial1.prototype.lvlEnding = function lvlEnding(){

    this.lvlManager = new lvlManager(this.game, 1);
    this.lvlManager.create();
};
