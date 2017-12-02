function UnitRessource(game, type, unitClans) {
	this.game = game;
	this.unit = null;
	this.isDead = null;
	this.type = type;
  this.unitClans = unitClans;
};



UnitRessource.prototype.create = function create() {
	this.createUnitRessource();
};

UnitRessource.prototype.update = function update() {
	this.unit.update();
};

UnitRessource.prototype.die = function die() {
	this.unit.die();
};

UnitRessource.prototype.getSprite = function getSprite() {
	return this.unit.getSprite();
};

UnitRessource.prototype.createUnitRessource = function createUnitRessource(){
	if(this.type === "UnitRock"){
		this.unit = new UnitRock(this.game, this.unitClans);
		this.unit.create();
	}else if(this.type === "UnitWater"){
		this.unit = new UnitWater(this.game, this.unitClans);
		this.unit.create();
  } else if (this.type === "UnitFood") {
    this.unit = new UnitFood(this.game, this.unitClans);
    this.unit.create();
  }
};

UnitRessource.prototype.chooseDoor = function chooseDoor(){
	if(this.door === "door1"){
		return door1;
	}else if(this.door === "door2"){
		return door2;
	}else if(this.door === "door3"){
		return door3;
	}else if(this.door === "door4"){
		return door4;
	}
};

UnitRessource.prototype.destroy = function destroy() {
	this.unit.destroy();
};
