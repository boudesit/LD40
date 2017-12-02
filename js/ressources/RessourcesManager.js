function RessourcesManager(game) {
	this.game = game;
  this.food = null;
  this.rock = null;
  this.water = null;
};
var posY = [535, 515, 555];
var posX= [40, 400, 680];


RessourcesManager.prototype.create = function create() {

	this.rand = this.getRandomIntInclusive(0 , 2);

  this.food = new Food(this.game, posX[this.rand], posY[this.rand]);
  this.food.create();

	this.rand++;

	if(this.rand >= posX.length) {
		this.rand = 0;
	}

  this.rock = new Rock(this.game, posX[this.rand], posY[this.rand] );
  this.rock.create();

	this.rand++;

	if(this.rand >= posX.length) {
		this.rand = 0;
	}

  this.water = new Water(this.game, posX[this.rand], posY[this.rand] );
  this.water.create();

};

RessourcesManager.prototype.update = function update() {
};


RessourcesManager.prototype.getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
};

RessourcesManager.prototype.getWaterSprite = function getWaterSprite() {
	return this.water.getSprite();
};

RessourcesManager.prototype.getRockSprite = function getRockSprite() {
	return this.rock.getSprite();
};

RessourcesManager.prototype.getFoodSprite = function getFoodSprite() {
	return this.food.getSprite();
};
