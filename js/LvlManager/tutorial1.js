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

	this.wall1 = null;

	this.bonusDoor = null;
	this.door = null;


  this.lvlManager = null;
  this.exit = null;

	this.plateforms = this.game.add.group();
	this.scales = this.game.add.group();
	this.doors = this.game.add.group();

	this.burgers = this.game.add.group();
	this.vegetables = this.game.add.group();

	this.walls = this.game.add.group();

};

tutorial1.prototype.create = function create() {

		this.createPlateforms();
		this.createScales();
		this.createDoors();
		this.createBurger();
		this.createVegetables();
		this.createWalls();

	};


	tutorial1.prototype.createPlateforms = function createPlateforms() {

		this.createFirstLine();
		this.createSecondLine();
		this.createThirdLine();

	};


tutorial1.prototype.createFirstLine = function createFirstLine() {

	// First Line of Plateform
	this.plateform1 = new platform(this.game, 0, 500, 150);
	this.plateform1.create();

	this.plateform2 = new platform(this.game, 150, 500, 150);
	this.plateform2.create();

	this.plateform3 = new platform(this.game, 500, 500, 150);
	this.plateform3.create();

	this.plateform4 = new platform(this.game, 650, 500, 150);
	this.plateform4.create();

	this.plateforms.add(this.plateform1.getSprite());
	this.plateforms.add(this.plateform2.getSprite());
	this.plateforms.add(this.plateform3.getSprite());
	this.plateforms.add(this.plateform4.getSprite());
};



tutorial1.prototype.createSecondLine = function createSecondLine() {
	// Second Line of Plateform

	this.plateform5 = new platform(this.game, 0, 300, 100);
	this.plateform8 = new platform(this.game, 150, 300, 150);
	this.plateform9 = new platform(this.game, 300, 300, 150);
	this.plateform7 = new platform(this.game, 450, 300, 150);
	this.plateform10 = new platform(this.game, 650, 300, 100);
	this.plateform6 = new platform(this.game, 750, 300, 50);


	this.plateform5.create();
	this.plateform6.create();
	this.plateform7.create();
	this.plateform8.create();
	this.plateform9.create();
	this.plateform10.create();


  this.plateforms.add(this.plateform5.getSprite());
	this.plateforms.add(this.plateform6.getSprite());
	this.plateforms.add(this.plateform7.getSprite());
	this.plateforms.add(this.plateform8.getSprite());
	this.plateforms.add(this.plateform9.getSprite());
	this.plateforms.add(this.plateform10.getSprite());
};

tutorial1.prototype.createThirdLine = function createThirdLine() {

	this.plateform11 = new platform(this.game, 0, 100, 400);
	this.plateform12 = new platform(this.game, 400, 100, 150);
	this.plateform13 = new platform(this.game, 550, 100, 150);
	this.plateform15 = new platform(this.game, 750, 100, 50);


	this.plateform11.create();
	this.plateform12.create();
	this.plateform13.create();
	this.plateform15.create();


	this.plateforms.add(this.plateform11.getSprite());
	this.plateforms.add(this.plateform12.getSprite());
	this.plateforms.add(this.plateform13.getSprite());
	this.plateforms.add(this.plateform15.getSprite());

};

tutorial1.prototype.createScales = function createScales() {

	this.scale1 = new scale(this.game, 300, 500, 100);
	this.scale1.create();

	this.scale2 = new scale(this.game, 100, 300, 200);
	this.scale2.create();

	this.scale3 = new scale(this.game, 600, 300, 200);
	this.scale3.create();

	this.scale4 = new scale(this.game, 700, 100, 200);
	this.scale4.create();

	this.scales.add(this.scale1.getSprite());
	this.scales.add(this.scale2.getSprite());
	this.scales.add(this.scale3.getSprite());
	this.scales.add(this.scale4.getSprite());
};

tutorial1.prototype.createDoors = function createDoors() {

	this.bonusDoor = new door(this.game, 0, 20, true);
	this.bonusDoor.create();

	this.door = new door(this.game, 750, 420, false);
	this.door.create();

	this.doors.add(this.bonusDoor.getSprite());
	this.doors.add(this.door.getSprite());

};

tutorial1.prototype.createBurger = function createBurger() {

	this.burger1 = new burger(this.game, 250, 267);
	this.burger1.create();

	this.burger2 = new burger(this.game, 300, 227);
	this.burger2.create();

	this.burger3 = new burger(this.game, 334, 207);
	this.burger3.create();

	this.burger4 = new burger(this.game, 368, 227);
	this.burger4.create();

	this.burger5 = new burger(this.game, 416, 267);
	this.burger5.create();

	this.burgers.add(this.burger1.getSprite());
	this.burgers.add(this.burger2.getSprite());
	this.burgers.add(this.burger3.getSprite());
	this.burgers.add(this.burger4.getSprite());
	this.burgers.add(this.burger5.getSprite());


};

tutorial1.prototype.createVegetables = function createVegetables() {

	this.vegetable1 = new vegetable(this.game, 650, 467);
	this.vegetable1.create();

	this.vegetable2 = new vegetable(this.game, 670, 567);
	this.vegetable2.create();

	this.vegetable3 = new vegetable(this.game, 704, 567);
	this.vegetable3.create();

	this.vegetable4 = new vegetable(this.game, 738, 567);
	this.vegetable4.create();

	this.vegetables.add(this.vegetable1.getSprite());
	this.vegetables.add(this.vegetable2.getSprite());
	this.vegetables.add(this.vegetable3.getSprite());
	this.vegetables.add(this.vegetable4.getSprite());


};

tutorial1.prototype.createWalls = function createWalls() {

	this.wall1 = new wall(this.game, 556, 203);
	this.wall1.create();

	this.walls.add(this.wall1.getSprite());
};


tutorial1.prototype.update = function update() {

	this.wall1.update();
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

tutorial1.prototype.getScales = function getScales() {
	return this.scales;
};

tutorial1.prototype.getPlateforms = function getPlateforms() {
	return this.plateforms;
};

tutorial1.prototype.getWalls = function getWalls() {
	return this.walls;
};

tutorial1.prototype.destroyAll = function destroyAll() {

	this.plateforms.destroy();
	this.scales.destroy();;
	this.doors.destroy();

	this.burgers.destroy();
	this.vegetables.destroy();

	this.walls.destroy();
};
