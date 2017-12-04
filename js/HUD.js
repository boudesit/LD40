function HUD(game) {
	this.game = game;
	this.ressourcesManager = null;
	this.player = null;
	this.computer = null;
	this.lvlManager = null;
  this.music = null;
	this.music = null;
  this.spriteBG = null;
	this.fight = null;
	this.fightCastle = null;
	this.computeRessourcesTkt = null;
	this.hero = null;
	this.timeDelay = 0;
	this.score = 0;
  this.scoreText = '';
};

HUD.prototype.create = function create() {



	 this.timeDelay = 0;
   this.spriteBG =  this.game.add.tileSprite(0 , 0, 800, 600, 'background');

	 this.spriteBG.animations.add('background', [0,1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,0]);
   this.spriteBG.animations.play('background', 4, true);

	 this.lvlManager = new lvlManager(this.game, 0);
 	 this.lvlManager.create();

	 this.hero = new HeroManager(this.game,this.lvlManager);
   this.hero.create();

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
	//  The score
	this.scoreText = game.add.text(710, 10, this.score, { font: '30px Arial', fill: '#00FF00' });
	this.scoreText2 = game.add.text(610, 9, 'score :', { font: '30px Arial', fill: '#00FF00' });

	this.explosionSound = game.add.audio('explosionSound');
	this.explosion  = game.add.sprite(-100,-100, 'explosion');
};



HUD.prototype.update = function update() {

  this.hero.update();
	this.lvlManager.update();
	this.scoreText.setText(this.hero._getScore());

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


HUD.prototype.lose = function lose() {
	this.music.pause();
	this.game.scoreTotal = 	this.hero._getScore();
	this.game.state.start("GameOver");
};

HUD.prototype.win = function win() {
	this.music.pause();
	this.game.state.start("GameWin");
}
