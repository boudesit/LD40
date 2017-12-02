function UnitBattle(game, type, unitClans) {
	this.game = game;
	this.unit = null;
	this.isDead = null;
	this.type = type;
  this.unitClans = unitClans;
};



UnitBattle.prototype.create = function create() {
	this.createUnitBattle();
};

UnitBattle.prototype.update = function update() {
	this.unit.update();
};

UnitBattle.prototype.die = function die() {
	this.unit.die();
};

UnitBattle.prototype.getSprite = function getSprite() {
	return this.unit.getSprite();
};

UnitBattle.prototype.createUnitBattle = function createUnitBattle(){
	if(this.type === "Warrior"){
		this.unit = new Warrior(this.game, this.unitClans);
		this.unit.create();
	}else if(this.type === "Archer"){
		this.unit = new Archer(this.game, this.unitClans);
		this.unit.create();
  }
};

UnitBattle.prototype.chooseDoor = function chooseDoor(){
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

UnitBattle.prototype.destroy = function destroy() {
	this.unit.destroy();
};
