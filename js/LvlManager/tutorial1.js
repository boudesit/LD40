function tutorial1(game) {
	this.game = game;

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

	this.scale1 = null;
	this.scale2 = null;
	this.scale3 = null;
	this.scale4 = null;


	this.burger1 = null;
	this.burger2 = null;
	this.burger3 = null;
	this.burger4 = null;
	this.burger5 = null;

	this.vegetable1 = null;
	this.vegetable2 = null;
	this.vegetable3 = null;
	this.vegetable4 = null;


	this.bonusDoor = null;
	this.door = null;


  this.lvlManager = null;
  this.exit = null;

	this.plateforms = this.game.add.group();
	this.scales = this.game.add.group();
	this.doors = this.game.add.group();

	this.burgers = this.game.add.group();
	this.vegetables = this.game.add.group();
};

tutorial1.prototype.create = function create() {

		this.createPlateforms();
		this.createScales();
		this.createDoors();
		this.createBurger();
		this.createVegetables();
		
	  this.exit = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	  this.exit.onDown.add(this.lvlEnding, this);
	};


	tutorial1.prototype.createPlateforms = function createPlateforms() {

		this.createFirstLine();
		this.createSecondLine();
		this.createThirdLine();

	};


tutorial1.prototype.createFirstLine = function createFirstLine() {

	// First Line of Plateform
	this.plateform1 = new platform(this.game, 0, 500);
	this.plateform1.create();

	this.plateform2 = new platform(this.game, 150, 500);
	this.plateform2.create();

	this.plateform3 = new platform(this.game, 500, 500);
	this.plateform3.create();

	this.plateform4 = new platform(this.game, 650, 500);
	this.plateform4.create();

	this.plateforms.add(this.plateform1.getSprite());
	this.plateforms.add(this.plateform2.getSprite());
	this.plateforms.add(this.plateform3.getSprite());
	this.plateforms.add(this.plateform4.getSprite());
};



tutorial1.prototype.createSecondLine = function createSecondLine() {
	// Second Line of Plateform

	this.plateform5 = new platform(this.game, 0, 300);
	this.plateform6 = new platform(this.game, 150, 300);
	this.plateform7 = new platform(this.game, 400, 300);
	this.plateform10 = new platform(this.game, 650, 300);

	this.plateform5.create();
	this.plateform6.create();
	this.plateform7.create();
	this.plateform10.create();


  this.plateforms.add(this.plateform5.getSprite());
	this.plateforms.add(this.plateform6.getSprite());
	this.plateforms.add(this.plateform7.getSprite());
	this.plateforms.add(this.plateform10.getSprite());
};

tutorial1.prototype.createThirdLine = function createThirdLine() {

	this.plateform11 = new platform(this.game, 0, 100);
	this.plateform12 = new platform(this.game, 150, 100);
	this.plateform13 = new platform(this.game, 300, 100);
	this.plateform14 = new platform(this.game, 450, 100);
	this.plateform15 = new platform(this.game, 600, 100);


	this.plateform11.create();
	this.plateform12.create();
	this.plateform13.create();
	this.plateform14.create();
	this.plateform15.create();


	this.plateforms.add(this.plateform11.getSprite());
	this.plateforms.add(this.plateform12.getSprite());
	this.plateforms.add(this.plateform13.getSprite());
	this.plateforms.add(this.plateform14.getSprite());
	this.plateforms.add(this.plateform15.getSprite());

};

tutorial1.prototype.createScales = function createScales() {

	this.scale1 = new scale(this.game, 250, 440);
	this.scale1.create();

	this.scale2 = new scale(this.game, 100, 320);
	this.scale2.create();

	this.scale3 = new scale(this.game, 600, 320);
	this.scale3.create();

	this.scale4 = new scale(this.game, 700, 80);
	this.scale4.create();

	this.scales.add(this.scale1.getSprite());
	this.scales.add(this.scale2.getSprite());

};

tutorial1.prototype.createDoors = function createDoors() {

	this.bonusDoor = new door(this.game, 0, 0, true);
	this.bonusDoor.create();

	this.door = new door(this.game, 750, 190, false);
	this.door.create();

	this.doors.add(this.bonusDoor.getSprite());
	this.doors.add(this.door.getSprite());

};

tutorial1.prototype.createBurger = function createBurger() {

	this.burger1 = new burger(this.game, 400, 267);
	this.burger1.create();

	this.burger2 = new burger(this.game, 434, 267);
	this.burger2.create();

	this.burger3 = new burger(this.game, 468, 267);
	this.burger3.create();

	this.burger4 = new burger(this.game, 502, 267);
	this.burger4.create();

	this.burger5 = new burger(this.game, 536, 267);
	this.burger5.create();

	this.burgers.add(this.burger1.getSprite());
	this.burgers.add(this.burger2.getSprite());
	this.burgers.add(this.burger3.getSprite());
	this.burgers.add(this.burger4.getSprite());
	this.burgers.add(this.burger5.getSprite());


};

tutorial1.prototype.createVegetables = function createVegetables() {

	this.vegetable1 = new vegetable(this.game, 650, 267);
	this.vegetable1.create();

	this.vegetable2 = new vegetable(this.game, 600, 567);
	this.vegetable2.create();

	this.vegetable3 = new vegetable(this.game, 634, 567);
	this.vegetable3.create();

	this.vegetable4 = new vegetable(this.game, 668, 567);
	this.vegetable4.create();

	this.vegetables.add(this.vegetable1.getSprite());
	this.vegetables.add(this.vegetable2.getSprite());
	this.vegetables.add(this.vegetable3.getSprite());
	this.vegetables.add(this.vegetable4.getSprite());


};


tutorial1.prototype.update = function update() {


};

tutorial1.prototype.lvlEnding = function lvlEnding(){

    this.lvlManager = new lvlManager(this.game, 1);
    this.lvlManager.create();
};

tutorial1.prototype.getDoors = function getDoors() {
	return this.doors;
};

tutorial1.prototype.getBurgers = function getBurgers() {
	return this.burgers;
};

tutorial1.prototype.getVegetables = function getVegetables() {
	return this.vegetables;
};

tutorial1.prototype.getPlateforms = function getPlateforms() {
	return this.plateforms;
};
