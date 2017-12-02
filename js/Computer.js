var Computer = function(game) {
	this.game = game;
	this.unityManager = null;
	this.food = 100;
	this.water = 100;
	this.rock = 100;
  this.castle = null;
	this.uptime = true;
	this.rand = null;
	this.timer = null;
	this.computerUnitGroup = null;
}

Computer.prototype = {
  	create: function() {

			this.unityManager = new UnityManager(this.game, "computer");

			this.castle = new Castle(this.game, "computer");
			this.castle.create();
	    //  Ressources
			/*
      game.add.text(590, 10, "Computer Ressources", { font: '20px Arial', fill: '#fff' });
	    game.add.text(640, 40, "Food : " + this.food, { font: '18px Arial', fill: '#00ff00' });
	    game.add.text(640, 60, "Water : " + this.water, { font: '18px Arial', fill: '#0000ff' });
      game.add.text(640, 80, "Rock : " + this.rock, { font: '18px Arial', fill: '#c0c0c0' });
			*/

			this.unityManager = new UnityManager(this.game, "computer");

			this.timer = game.time.create(false);
			this.timer.loop(5000, this.randomCreateUnit, this);
			this.timer.start();

	},

	update: function() {
    this.unityManager.update();
		this.computerUnitGroup = this.unityManager._getUnitGroup();
	},

	randomCreateUnit: function() {
		this.rand = this.getRandomIntInclusive(0 , 1);

			if( this.rand === 0 && this.buy("Archer")) {
				this.actionOnArcher();
			}
			if(this.rand === 1 && this.buy("Warrior")) {
				this.actionOnWarrior();
			}
			this.uptime = true;
		},


		actionOnArcher: function() {

			this.unityManager.setUnitType("Archer");
			this.unityManager.setUnitClass(0);
			this.unityManager.isCreate(true);
		},

		actionOnWarrior: function() {
			this.unityManager.setUnitType("Warrior");
			this.unityManager.setUnitClass(0);
			this.unityManager.isCreate(true);
		},

		getRandomIntInclusive: function(min, max) {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min +1)) + min;
		},

		getComputerUnitGroup: function() {
			return this.computerUnitGroup;
		},

		getComputerCastle: function() {
			return this.castle.getSprite();
		},

		buy: function(type) {
		isbuy = true;
		/*
		// For Archer
		if(this.food >= 20 && this.water >= 10 && this.rock >= 5 && type === "Archer") {
			this.food -= 20;
			this.water -= 10;
			this.rock -= 5;
			isbuy = true;
		}

		// For Warrior
		if(this.food >= 30 && this.water >= 15 && this.rock >= 10 && type === "Warrior") {
			this.food -= 30;
			this.water -= 15;
			this.rock -= 10;
			isbuy = true;
		}
		*/
		return isbuy;

	}
}
