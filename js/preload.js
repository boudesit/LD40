var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet
		// this.game.load.spritesheet('explosion', 'assets/img/explode.png', 128, 128);

		this.game.load.spritesheet('gametitle', 'images/Backgrounds/background-start.png', 800, 600,6);
		this.game.load.spritesheet('gameover', 'images/Backgrounds/background-score.png', 800, 600,3);
		this.game.load.spritesheet('gamewin', 'images/Backgrounds/background-score.png',800, 600,2);
		this.game.load.spritesheet('background', 'images/Backgrounds/background-game.png', 800, 600,12);


		this.game.load.spritesheet('plateform50','images/Items/item-plateform-50px.png',50,20,1);
		this.game.load.spritesheet('plateform100','images/Items/item-plateform-100px.png',100,20,1);
		this.game.load.spritesheet('plateform150','images/Items/item-plateform-150px.png',150,20,1);
		this.game.load.spritesheet('plateform400','images/Items/item-plateform-400px.png',400,20,1);

		this.game.load.spritesheet('scale80','images/Items/item-echelle-80px.png',40,80,1);
		this.game.load.spritesheet('scale100','images/Items/item-echelle-100px.png',40,100,1);
		this.game.load.spritesheet('scale180','images/Items/item-echelle-180px.png',40,180,1);
		this.game.load.spritesheet('scale200','images/Items/item-echelle-200px.png',40,200,1);


		this.game.load.spritesheet('bonus-door','images/Items/item-portebonus.png',40,80,2);
		this.game.load.spritesheet('door','images/Items/item-porte.png',40,80,2);
		this.game.load.spritesheet('burger','images/Items/item-burger.png',34,33,3);
		this.game.load.spritesheet('vegetable','images/Items/item-legume.png',34,33,3);
		this.game.load.spritesheet('wall','images/Items/item-mur.png',40,97,3);

		this.game.load.spritesheet('animation-bonus','images/Items/item-balance-bonus.png',40,80,3);
		this.game.load.spritesheet('animation','images/Items/item-balance.png',40,80,3);

    this.game.load.spritesheet('hero', 'images/Player/player.png',40,100,33);

		//Image
		this.game.load.image('gamewin', 'assets/img/gamewin.jpg');

		//Sound
    game.load.audio('gameSound', 'sound-v1900/game.mp3');
    game.load.audio('introSound', 'sound-v1900/intro.mp3');
    game.load.audio('scoreSound', 'sound-v1900/score.mp3');
		game.load.audio('winSound', 'sound-v1900/winSound.mp3');

		game.load.audio('jumpSound', 'sound-v1900/jump.mp3');
		game.load.audio('break-wallSound', 'sound-v1900/break-wall.mp3');
		game.load.audio('eat-burgerSound', 'sound-v1900/eat-burger.mp3');
		game.load.audio('eat-legumeSound', 'sound-v1900/eat-legume.mp3');
		game.load.audio('porte-nokSound', 'sound-v1900/porte-nok.mp3');
		game.load.audio('porte-okSound', 'sound-v1900/porte-ok.mp3');

	},
  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
