var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet
		this.game.load.spritesheet('gametitle', 'assets/images/Backgrounds/background-start.png', 800, 600,6);
		this.game.load.spritesheet('gamescore', 'assets/images/Backgrounds/background-score.png',800, 600,2);
		this.game.load.spritesheet('background', 'assets/images/Backgrounds/background-game.png', 800, 600,12);


		this.game.load.spritesheet('plateform50','assets/images/Items/item-plateform-50px.png',50,20,1);
		this.game.load.spritesheet('plateform100','assets/images/Items/item-plateform-100px.png',100,20,1);
		this.game.load.spritesheet('plateform150','assets/images/Items/item-plateform-150px.png',150,20,1);
		this.game.load.spritesheet('plateform400','assets/images/Items/item-plateform-400px.png',400,20,1);

		this.game.load.spritesheet('scale80','assets/images/Items/item-echelle-80px.png',40,80,1);
		this.game.load.spritesheet('scale100','assets/images/Items/item-echelle-100px.png',40,100,1);
		this.game.load.spritesheet('scale180','assets/images/Items/item-echelle-180px.png',40,180,1);
		this.game.load.spritesheet('scale200','assets/images/Items/item-echelle-200px.png',40,200,1);


		this.game.load.spritesheet('bonus-door','assets/images/Items/item-portebonus.png',40,80,2);
		this.game.load.spritesheet('door','assets/images/Items/item-porte.png',40,80,2);
		this.game.load.spritesheet('burger','assets/images/Items/item-burger.png',34,33,3);
		this.game.load.spritesheet('vegetable','assets/images/Items/item-legume.png',34,33,3);
		this.game.load.spritesheet('wall','assets/images/Items/item-mur.png',40,97,3);

		this.game.load.spritesheet('animation-bonus','assets/images/Items/item-balance-bonus.png',40,80,3);
		this.game.load.spritesheet('animation','assets/images/Items/item-balance.png',40,80,3);

    this.game.load.spritesheet('hero', 'assets/images/Player/player.png',40,100,33);

		//Image


		//Sound
    game.load.audio('gameSound', 'assets/sound/game.mp3');
    game.load.audio('introSound', 'assets/sound/intro.mp3');
    game.load.audio('scoreSound', 'assets/sound/score.mp3');
		game.load.audio('winSound', 'assets/sound/winSound.mp3');

		game.load.audio('jumpSound', 'assets/sound/jump.mp3');
		game.load.audio('break-wallSound', 'assets/sound/break-wall.mp3');
		game.load.audio('eat-burgerSound', 'assets/sound/eat-burger.mp3');
		game.load.audio('eat-legumeSound', 'assets/sound/eat-legume.mp3');
		game.load.audio('porte-nokSound', 'assets/sound/porte-nok.mp3');
		game.load.audio('porte-okSound', 'assets/sound/porte-ok.mp3');

	},
  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
