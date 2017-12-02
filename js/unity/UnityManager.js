function UnityManager(game, unitClans) {
	this.game = game;
	this.unitType = null;
	this.iscreate = false;
	this.unitBattle = null;
	this.unitClans = unitClans;
	this.unitClass = null;
	this.unitGroup = this.game.add.group();
	this.UnitRessource = null;
	this.unitRessourcesRockGroup = this.game.add.group();
	this.unitRessourcesWaterGroup = this.game.add.group();
	this.unitRessourcesFoodGroup = this.game.add.group();
};

UnityManager.prototype.create = function create() {


};

UnityManager.prototype.update = function update() {

	if(this.unitType != null && this.iscreate === true && this.unitClass === 0) {

		this.unitBattle = new UnitBattle(this.game, this.unitType, this.unitClans);
		this.unitBattle.create();
		this.iscreate = false;
		this.unitGroup.add(this.unitBattle.getSprite())
	}

	if(this.unitType != null && this.iscreate === true && this.unitClass === 1) {

		this.UnitRessource = new UnitRessource(this.game, this.unitType, this.unitClans);
		this.UnitRessource.create();
		this.iscreate = false;
		if(this.unitType === "UnitRock")
			this.unitRessourcesRockGroup.add(this.UnitRessource.getSprite());
		}
		if(this.unitType === "UnitFood") {
			this.unitRessourcesFoodGroup.add(this.UnitRessource.getSprite());
		}
		if(this.unitType === "UnitWater") {
			this.unitRessourcesWaterGroup.add(this.UnitRessource.getSprite());
		}
};

UnityManager.prototype.setUnitType = function setUnitType(unitType) {
	this.unitType = unitType;
};

UnityManager.prototype.setUnitClass = function setUnitClass(unitClass) {
	this.unitClass = unitClass;
};

UnityManager.prototype.isCreate = function isCreate(isCreate) {

	this.iscreate = isCreate;
};

UnityManager.prototype._getUnitGroup = function _getUnitGroup(){
	return this.unitGroup;
};

UnityManager.prototype._getUnitRessourcesRockGroup = function _getUnitRessourcesRockGroup(){
	return this.unitRessourcesRockGroup;
};

UnityManager.prototype._getUnitRessourcesWaterGroup = function _getUnitRessourcesWaterGroup(){
	return this.unitRessourcesWaterGroup;
};

UnityManager.prototype._getUnitRessourcesFoodGroup = function _getUnitRessourcesFoodGroup(){
	return this.unitRessourcesFoodGroup;
};
