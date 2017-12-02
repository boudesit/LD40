function HUD(game) {
	this.game = game;
	this.ressourcesManager = null;
	this.player = null;
	this.computer = null;
	this.map = null;
  this.music = null;
	this.music = null;
  this.spriteBG = null;
	this.fight = null;
	this.fightCastle = null;
	this.computeRessourcesTkt = null;
	this.timeDelay = 0;
};

HUD.prototype.create = function create() {

	this.timeDelay = 0;
   this.spriteBG =  game.add.tileSprite(0 , 0, 800, 600, 'background');

	 this.ressourcesManager = new RessourcesManager(this.game);
   this.ressourcesManager.create();

	 this.player = new Player(this.game);
   this.player.create();

	 this.computer = new Computer(this.game);
   this.computer.create();


	 this.map = new map(this.game);
 	 this.map.create();

	 this.explosionSound = game.add.audio('explosionSound');
 	 this.explosion  = game.add.sprite(-100,-100, 'explosion');

   this.music = game.add.audio('gameSound', 1, true);
	 if (this.music.isPlaying == false)
	 {
	 	 this.music.play();
	 }else{
	 	this.music.resume();
	 }

	// this.spriteBG.animations.add('backgroundAnime');
	// this.spriteBG.animations.play('backgroundAnime', 10, true);

	this.explosionSound = game.add.audio('explosionSound');
	this.explosion  = game.add.sprite(-100,-100, 'explosion');
};



HUD.prototype.update = function update() {
  this.player.update();
	this.computer.update();

	this.player.getPlayerUnitRockGroupRessource().forEach(this.moveUnitRockTowardRessources, this);
	this.player.getPlayerUnitWaterGroupRessource().forEach(this.moveUnitWaterTowardRessources, this);
	this.player.getPlayerUnitFoodGroupRessource().forEach(this.moveUnitFoodTowardRessources, this);


	//  Run collision
	game.physics.arcade.collide(  this.player.getPlayerUnitGroup() , this.player.getPlayerUnitGroup()  , null, null, this);
	game.physics.arcade.collide(  this.computer.getComputerUnitGroup() , this.computer.getComputerUnitGroup()  , null, null, this);

	// collision Castle
	game.physics.arcade.collide(  this.player.getPlayerUnitGroup() , this.computer.getComputerCastle() , this.computeFightCastle, null, this);
	game.physics.arcade.collide(  this.computer.getComputerUnitGroup() , this.player.getPlayerCastle() , this.computeFightCastle, null, this);

	//Fight unit
	game.physics.arcade.overlap(  this.player.getPlayerUnitGroup() , this.computer.getComputerUnitGroup() , this.computeFight, null, this);

	// collide ressources
	game.physics.arcade.collide(this.player.getPlayerUnitRockGroupRessource(), this.ressourcesManager.getRockSprite(),this.computeRessources, null, this);
	game.physics.arcade.collide(this.player.getPlayerUnitWaterGroupRessource(), this.ressourcesManager.getWaterSprite(),this.computeRessources, null, this);
	game.physics.arcade.collide(this.player.getPlayerUnitFoodGroupRessource(), this.ressourcesManager.getFoodSprite(),this.computeRessources, null, this);

	// game.physics.arcade.collide(this.player.getPlayerUnitRockGroupRessource(), this.player.getPlayerCastle() , this.addRessources, null, this);
	// game.physics.arcade.collide(this.player.getPlayerUnitWaterGroupRessource(), this.player.getPlayerCastle() , this.addRessources, null, this);
	// game.physics.arcade.collide(this.player.getPlayerUnitFoodGroupRessource(), this.player.getPlayerCastle() , this.addRessources, null, this);


	if((this.fight != null && this.fight.isFinnish()) || (this.fightCastle != null && this.fightCastle.isFinnish())) {
		if(this.player.getPlayerUnitGroup() != null)
		{
			this.player.getPlayerUnitGroup().setAll("body.velocity.x", 60);
		}

		if(this.computer.getComputerUnitGroup() != null)
		{
			this.computer.getComputerUnitGroup().setAll("body.velocity.x", -60);
		}
	}



	if (this.shakeWorld > 0)
	{
		var rand1 = game.rnd.integerInRange(-2,2);
		var rand2 = game.rnd.integerInRange(-2,2);
		game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
		this.shakeWorld--;
	}

	if (this.shakeWorld == 0) {
		game.world.setBounds(0, 0, game.width,game.height);
	}
};

HUD.prototype.computeFight = function computeFight(player,computer) {

		if (game.time.now > this.timeDelay){
			//debugger;
			this.fight = new Fight(this.game, player, computer);
			this.fight.create();
			// wait 1 second
			this.timeDelay = game.time.now + 1000;
	  }

};

HUD.prototype.computeFightCastle = function computeFightCastle(castle,unit) {
		this.shakeWorld = 10;
		if((this.fightCastle != null && this.fightCastle.isFinnish())) {
			this.explosion.reset(castle.body.x, castle.body.y + 50);
			this.explosion.animations.add('boom');
			this.explosion.play('boom', 30, false , true);
			this.explosionSound.play();
			castle.kill();
			if(castle.whois === "computer") {
				this.win();
			} else {
				this.lose();
			}
		}
		if(this.fightCastle === null || (this.fightCastle != null && this.fightCastle.isFinnish() && this.fightCastle.getUnitSprite() != unit)) {
			this.fightCastle = new FightCastle(this.game, unit, castle);
			this.fightCastle.create();
		}


};

HUD.prototype.moveUnitRockTowardRessources = function moveUnitRockTowardRessources(sprite) {

	if(!sprite.isDestination && sprite.ressources != 100) {
		game.physics.arcade.moveToObject(sprite, this.ressourcesManager.getRockSprite(), 60);
	} else if (sprite.isDestination && sprite.ressources === 100) {
		if(sprite.unitClans === "player") {
			game.physics.arcade.moveToObject(sprite, this.player.getPlayerCastle(), 60);
			game.physics.arcade.collide(sprite, this.player.getPlayerCastle() , this.addRessources, null, this);

		} else {
			game.physics.arcade.moveToObject(sprite, this.computer.getComputerCastle(), 60);
			game.physics.arcade.collide(sprite, this.player.getComputerCastle() , this.addRessources, null, this);

		}
	}

};

HUD.prototype.moveUnitWaterTowardRessources = function moveUnitWaterTowardRessources(sprite) {
	if(!sprite.isDestination && sprite.ressources != 100) {
		game.physics.arcade.moveToObject(sprite, this.ressourcesManager.getWaterSprite(), 60);
	} else if (sprite.isDestination && sprite.ressources === 100) {
		if(sprite.unitClans === "player") {
			game.physics.arcade.moveToObject(sprite, this.player.getPlayerCastle(), 60);
			game.physics.arcade.collide(sprite, this.player.getPlayerCastle() , this.addRessources, null, this);

		} else {
			game.physics.arcade.moveToObject(sprite, this.computer.getComputerCastle(), 60);
			game.physics.arcade.collide(sprite, this.player.getComputerCastle() , this.addRessources, null, this);
		}
	}
};

HUD.prototype.moveUnitFoodTowardRessources = function moveUnitFoodTowardRessources(sprite) {
	if(!sprite.isDestination && sprite.ressources != 100) {
		game.physics.arcade.moveToObject(sprite, this.ressourcesManager.getFoodSprite(), 60);
	} else if (sprite.isDestination && sprite.ressources >= 100) {
		if(sprite.unitClans === "player") {
			game.physics.arcade.moveToObject(sprite, this.player.getPlayerCastle(), 60);
			game.physics.arcade.collide(sprite, this.player.getPlayerCastle() , this.addRessources, null, this);

		} else {
			game.physics.arcade.moveToObject(sprite, this.computer.getComputerCastle(), 60);
			game.physics.arcade.collide(sprite, this.player.getComputerCastle() , this.addRessources, null, this);
		}
	}
};

HUD.prototype.addRessources = function addRessources(unit, castle) {
	if(unit.type === "Rock" && unit.unitClans === "player") {
		this.player.setRock(unit.ressources);
	} else if(unit.type === "Rock"){

	}

	if(unit.type === "Water" && unit.unitClans === "player") {
		this.player.setWater(unit.ressources);
	} else if(unit.type === "Water"){

	}

	if(unit.type === "Food" && unit.unitClans === "player") {
		this.player.setFood(unit.ressources);
	} else if (unit.type === "Food") {

	}
	unit.kill();
};

HUD.prototype.computeRessources = function computeRessources(sprite, ressource) {

		this.computeRessourcesTkt = new ComputeRessources(this.game, sprite, ressource);
		this.computeRessourcesTkt.create();
		sprite.isDestination = true;

};


HUD.prototype.lose = function lose() {
	this.music.pause();
	this.game.state.start("GameOver");
};

HUD.prototype.win = function win() {
	this.music.pause();
	this.game.state.start("GameWin");
}
