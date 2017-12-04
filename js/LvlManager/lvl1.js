function lvl1(game) {
	this.game = game;

	this.plateform1 = null;
	this.plateform2 = null;
	this.plateform3 = null;
	this.plateform4 = null;
	this.plateform100 = null;
	this.plateform101 = null;
	this.plateform102 = null;

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
	this.burger6 = null;


	this.vegetable1 = null;
	this.vegetable2 = null;
	this.vegetable3 = null;
	this.vegetable4 = null;

	this.wall1 = null;
	this.wall2 = null;
	this.wall3 = null;

	this.wall11 = null;
	this.wall12 = null;
	this.wall13 = null;

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

lvl1.prototype.create = function create() {

		this.createPlateforms();
		this.createScales();
		this.createDoors();
		this.createBurger();
		this.createVegetables();
		this.createWalls();
	};


	lvl1.prototype.createPlateforms = function createPlateforms() {

		this.createFirstLine();
		this.createSecondLine();
		this.createThirdLine();

	};


lvl1.prototype.createFirstLine = function createFirstLine() {

	// First Line of Plateform
	this.plateform1 = new platform(this.game, 0, 100, 150);
	this.plateform1.create();

	this.plateform2 = new platform(this.game, 150, 100, 150);
	this.plateform2.create();

	this.plateform3 = new platform(this.game, 500, 100, 150);
	this.plateform3.create();

	this.plateform100 = new platform(this.game, 650, 100, 150);
	this.plateform100.create();



	this.plateforms.add(this.plateform1.getSprite());
	this.plateforms.add(this.plateform2.getSprite());
	this.plateforms.add(this.plateform3.getSprite());
	this.plateforms.add(this.plateform100.getSprite());
};



lvl1.prototype.createSecondLine = function createSecondLine() {
	// Second Line of Plateform

	this.plateform5 = new platform(this.game, 150, 250, 100);
	this.plateform8 = new platform(this.game, 250, 250, 150);
	this.plateform9 = new platform(this.game, 400, 250, 150);
	this.plateform7 = new platform(this.game, 550, 250, 100);
	this.plateform101 = new platform(this.game, 0, 400, 150);
	this.plateform102 = new platform(this.game, 150, 400, 150);
	this.plateform10 = new platform(this.game, 650, 400, 150);
	this.plateform6 = new platform(this.game, 500, 400, 150);

	this.plateform5.create();
	this.plateform6.create();
	this.plateform7.create();
	this.plateform8.create();
	this.plateform9.create();
	this.plateform10.create();
	this.plateform101.create();
	this.plateform102.create();


  this.plateforms.add(this.plateform5.getSprite());
	this.plateforms.add(this.plateform6.getSprite());
	this.plateforms.add(this.plateform7.getSprite());
	this.plateforms.add(this.plateform8.getSprite());
	this.plateforms.add(this.plateform9.getSprite());
	this.plateforms.add(this.plateform10.getSprite());
	this.plateforms.add(this.plateform101.getSprite());
	this.plateforms.add(this.plateform102.getSprite());


};

lvl1.prototype.createThirdLine = function createThirdLine() {

	// this.plateform11 = new platform(this.game, 0, 100, 400);
	// this.plateform12 = new platform(this.game, 550, 100, 50);
	// // this.plateform13 = new platform(this.game, 550, 100, 150);
	// this.plateform15 = new platform(this.game, 750, 100, 50);
  //
  //
	// this.plateform11.create();
	// this.plateform12.create();
	// // this.plateform13.create();
	// this.plateform15.create();
  //
  //
	// this.plateforms.add(this.plateform11.getSprite());
	// this.plateforms.add(this.plateform12.getSprite());
	// // this.plateforms.add(this.plateform13.getSprite());
	// this.plateforms.add(this.plateform15.getSprite());

};

lvl1.prototype.createScales = function createScales() {

	this.scale1 = new scale(this.game, 0, 400, 200);
	this.scale1.create();

	this.scale2 = new scale(this.game, 0, 200, 200);
	this.scale2.create();
  //
	this.scale3 = new scale(this.game, 0, 0, 200);
	this.scale3.create();
  //
	// this.scale4 = new scale(this.game, 700, 100, 200);
	// this.scale4.create();

	this.scales.add(this.scale1.getSprite());
	this.scales.add(this.scale2.getSprite());
	this.scales.add(this.scale3.getSprite());
	// this.scales.add(this.scale4.getSprite());
};

lvl1.prototype.createDoors = function createDoors() {

	this.bonusDoor = new door(this.game, 300, 520, true);
	this.bonusDoor.create();

	this.door = new door(this.game, 480, 520, false);
	this.door.create();

	this.doors.add(this.bonusDoor.getSprite());
	this.doors.add(this.door.getSprite());

};

lvl1.prototype.createBurger = function createBurger() {

	this.burger1 = new burger(this.game, 180, 217);
	this.burger1.create();

	this.burger2 = new burger(this.game, 248, 217);
	this.burger2.create();

	this.burger3 = new burger(this.game, 316, 217);
	this.burger3.create();

	this.burger4 = new burger(this.game, 130, 367);
	this.burger4.create();

	this.burger5 = new burger(this.game, 198, 367);
	this.burger5.create();

	this.burger6 = new burger(this.game, 266, 367);
	this.burger6.create();

	this.burgers.add(this.burger1.getSprite());
	this.burgers.add(this.burger2.getSprite());
	this.burgers.add(this.burger3.getSprite());
	this.burgers.add(this.burger4.getSprite());
	this.burgers.add(this.burger5.getSprite());
	this.burgers.add(this.burger6.getSprite());



};

lvl1.prototype.createVegetables = function createVegetables() {

	this.vegetable1 = new vegetable(this.game, 586, 217);
	this.vegetable1.create();

	this.vegetable2 = new vegetable(this.game, 518, 217);
	this.vegetable2.create();

	this.vegetable3 = new vegetable(this.game, 450, 217);
	this.vegetable3.create();

	this.vegetable4 = new vegetable(this.game, 636, 367);
	this.vegetable4.create();

	this.vegetable5 = new vegetable(this.game, 568, 367);
	this.vegetable5.create();

	this.vegetable6 = new vegetable(this.game, 500, 367);
	this.vegetable6.create();


	this.vegetables.add(this.vegetable1.getSprite());
	this.vegetables.add(this.vegetable2.getSprite());
	this.vegetables.add(this.vegetable3.getSprite());
	this.vegetables.add(this.vegetable4.getSprite());
	this.vegetables.add(this.vegetable5.getSprite());
	this.vegetables.add(this.vegetable6.getSprite());
	// this.vegetables.add(this.vegetable7.getSprite());



};

lvl1.prototype.createWalls = function createWalls() {

	this.wall1 = new wall(this.game, 390, 503);
	this.wall1.create();

	this.walls.add(this.wall1.getSprite());

	this.wall2 = new wall(this.game, 390, 406);
	this.wall2.create();

	this.walls.add(this.wall2.getSprite());

	this.wall3 = new wall(this.game, 390, 309);
	this.wall3.create();

	this.walls.add(this.wall3.getSprite());

	this.wall11 = new wall(this.game, 390, 153);
	this.wall11.create();

	this.walls.add(this.wall11.getSprite());

	// this.wall3 = new wall(this.game, 150, 403);
	// this.wall3.create();
  //
	// this.walls.add(this.wall3.getSprite());
};


lvl1.prototype.update = function update() {

	this.wall1.update();
	this.wall2.update();
	this.wall3.update();
	this.wall11.update();
	// this.wall12.update();
	// this.wall13.update();

};

lvl1.prototype.getDoors = function getDoors() {
	return this.doors;
};

lvl1.prototype.getBurgers = function getBurgers() {
	return this.burgers;
};

lvl1.prototype.getVegetables = function getVegetables() {
	return this.vegetables;
};

lvl1.prototype.getScales = function getScales() {
	return this.scales;
};

lvl1.prototype.getPlateforms = function getPlateforms() {
	return this.plateforms;
};

lvl1.prototype.getWalls = function getWalls() {
	return this.walls;
};

lvl1.prototype.destroyAll = function destroyAll() {

	this.plateforms.destroy();
	this.scales.destroy();;
	this.doors.destroy();

	this.burgers.destroy();
	this.vegetables.destroy();

	this.walls.destroy();
};
