var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet
		// this.game.load.spritesheet('explosion', 'assets/img/explode.png', 128, 128);

		this.game.load.spritesheet('gametitle', 'images/Backgrounds/background-start.png', 800, 600,2);
		this.game.load.spritesheet('gameover', 'images/Backgrounds/background-score.png', 800, 600,3);
		this.game.load.spritesheet('gamewin', 'images/Backgrounds/background-score.png',800, 600,2);

		this.game.load.spritesheet('plateform50','images/Items/item-plateform-50px.png',50,20,1);
		this.game.load.spritesheet('plateform100','images/Items/item-plateform-100px.png',100,20,1);
		this.game.load.spritesheet('plateform150','images/Items/item-plateform-150px.png',150,20,1);
		this.game.load.spritesheet('plateform400','images/Items/item-plateform-400px.png',400,20,1);

		this.game.load.spritesheet('scale','images/Items/item-echelle-180px.png',40,180,1);
		this.game.load.spritesheet('bonus-door','images/Items/item-portebonus.png',40,80,3);
		this.game.load.spritesheet('door','images/Items/item-porte.png',40,80,3);
		this.game.load.spritesheet('burger','images/Items/item-burger.png',34,33,3);
		this.game.load.spritesheet('vegetable','images/Items/item-legume.png',34,33,3);
		this.game.load.spritesheet('wall','images/Items/item-mur.png',40,97,3);


		//le normale
    this.game.load.spritesheet('hero_climb', 'images/Player/semi/player-semi-climb.png',30,80,3);
		this.game.load.spritesheet('hero_idle', 'images/Player/semi/player-semi-idle.png',30,80,3);
		this.game.load.spritesheet('hero_walk', 'images/Player/semi/player-semi-walk.png',30,80,3);
		this.game.load.spritesheet('hero_jump', 'images/Player/semi/player-semi-jump.png',30,80,2);

		//le gros cul
		this.game.load.spritesheet('hero_break', 'images/Player/fat/player-fat-break.png',30,80,2);
		this.game.load.spritesheet('hero_idle', 'images/Player/fat/player-fat-idle.png',40,100,3);
		this.game.load.spritesheet('hero_walk', 'images/Player/fat/player-fat-walk.png',40,100,3);
		this.game.load.spritesheet('hero_climb', 'images/Player/fat/player-fat-climb.png',30,80,3);

		// le vieul maigre
		this.game.load.spritesheet('hero_climb', 'images/Player/light/player-light-climb.png',30,80,3);
		this.game.load.spritesheet('hero_idle', 'images/Player/light/player-light-idle.png',30,80,3);
		this.game.load.spritesheet('hero_walk', 'images/Player/light/player-light-walk.png',30,80,3);
		this.game.load.spritesheet('hero_jump', 'images/Player/light/player-light-jump.png',30,80,2);

		//Image
		this.game.load.image('background', 'images/Backgrounds/background-game.png');
		this.game.load.image('gamewin', 'assets/img/gamewin.jpg');

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
