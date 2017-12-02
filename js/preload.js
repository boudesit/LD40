var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet
		this.game.load.spritesheet('explosion', 'assets/img/explode.png', 128, 128);

		this.game.load.spritesheet('gametitle', 'assets/img/game_start.png', 800, 600,2);
		this.game.load.spritesheet('gameover', 'assets/img/gameover.png', 800, 600,3);
		this.game.load.spritesheet('gamewin', 'assets/img/gamewin.png',800, 600,2);

		this.game.load.spritesheet('ressource_1', 'assets/img/ressource_1.png', 50, 50,2);//water
		this.game.load.spritesheet('ressource_2', 'assets/img/ressource_2.png', 50, 50,2); //food
		this.game.load.spritesheet('ressource_3', 'assets/img/ressource_3.png', 50, 50,2);//Rock

		this.game.load.spritesheet('warriorComputer', 'assets/img/unite1_run_enemy.png', 50, 50,3);
		this.game.load.spritesheet('archerComputer', 'assets/img/unite3_run_enemy1.png', 50, 50,3);

		this.game.load.spritesheet('warrior', 'assets/img/unite1_run.png', 50, 50,3);
		this.game.load.spritesheet('archer', 'assets/img/unite3_run.png', 50, 50,3);

		this.game.load.spritesheet('miner', 'assets/img/unite2_mine.png', 50, 50,3);

		this.game.load.spritesheet('spriteCastlePlay', 'assets/img/castle.png',200,200,3);
		this.game.load.spritesheet('spriteCastleComp', 'assets/img/castle_enemy.png',200,200,3);

		this.game.load.spritesheet('playerDeath', 'assets/img/unite1_death.png',50,50,4);
		this.game.load.spritesheet('computerDeath', 'assets/img/unite_death_enemy.png',50,50,4);


		//Image
		this.game.load.image('background', 'assets/img/game_background.png');
		this.game.load.image('gamewin', 'assets/img/gamewin.jpg');

		this.game.load.image('buttonWarrior', 'assets/img/icone_epee.png');
		this.game.load.image('buttonArcher', 'assets/img/icone_hache.png');

		this.game.load.image('buttonUnitWater', 'assets/img/icone_ressource_1.png');
		this.game.load.image('buttonUnitFood', 'assets/img/icone_ressource_2.png');
		this.game.load.image('buttonUnitRock', 'assets/img/icone_ressource_3.png');



		//Sound
     		game.load.audio('gameSound', 'assets/sound/game.mp3');
     		game.load.audio('introSound', 'assets/sound/intro.mp3');
     		game.load.audio('loseSound', 'assets/sound/loose.mp3');
				game.load.audio('winSound', 'assets/sound/winSound.mp3');
  	   	game.load.audio('explosionSound', 'assets/sound/explodeSound.mp3');
				game.load.audio('deathSound', 'assets/sound/unitedeath.mp3');

	},
  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},
	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
