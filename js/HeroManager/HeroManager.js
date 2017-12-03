var HeroManager = function(game,level) {

	this.game = game;
	this.level = level;
	this.sprite = null;

	this.posX = 10;
	this.posY = 255;

	this.weight = 3;

  this.jumpTimer = 0;
	this.isSpacePress = false;

	this.heroFat = null;
	this.heroStraight = null;
	this.heroSkinny = null;
}

HeroManager.prototype = {
    create: function() {

		//sound

		//gravity
    this.game.physics.arcade.gravity.y = 500;

		//Sprite
		this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero_idle');
	  this.sprite.animations.add('idle');
    this.sprite.animations.play('idle', 5, true);

		this.game.physics.arcade.enable(this.sprite);
		this.sprite.physicsBodyType = Phaser.Physics.ARCADE;
		this.sprite.enableBody = true;
	  this.sprite.body.collideWorldBounds=true;
		this.sprite.anchor.set(0.5);
		this.sprite.scale.setTo(1,1);
	  this.sprite.body.bounce.y = 0.2;

		// poids
		this.heroFat = new HeroFat(this.game);
		this.heroFat.create();

		this.heroStraight = new HeroStraight(this.game);
		this.heroStraight.create();

		this.heroSkinny = new HeroSkinny(this.game);
		this.heroSkinny.create();

		var key1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    //key1.onDown.add(this._addPhaserDude, this);

    },

    update: function() {

			  //Deplacement droite gauche
 				this.sprite.body.velocity.x = 0;

				if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
					  this.sprite.scale.x = -1;
						this.sprite.body.velocity.x = - this._getHeroProperties().getSpeed();
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
					  this.sprite.scale.x = 1;
						this.sprite.body.velocity.x = this._getHeroProperties().getSpeed();
				}

				//saut
        if (game.input.keyboard.isDown(Phaser.Keyboard.W) && game.time.now > this.jumpTimer)
        {
            this.sprite.body.velocity.y = - this._getHeroProperties().getJump();
						//ajouter un jump timer selon la corpulance
            this.jumpTimer = game.time.now + this._getHeroProperties().getJumpDuration();
        }

				//utiliser pouvoire

				//entrer porte et portebonus
				game.physics.arcade.overlap(  this._getSprite() , this.level._getlvl().getDoors() , this._onDoors, null, this);

				// pouvoire 1 - 2 -3


				//collision
				game.physics.arcade.collide(  this._getSprite() , this.level._getlvl().getPlateforms() , null, null, this);

				//monter à l'echelle
				game.physics.arcade.overlap(  this._getSprite() , this.level._getlvl().getScales() , this._climbLadder, null, this);

				//recup des burger
				game.physics.arcade.overlap(  this._getSprite() , this.level._getlvl().getBurgers() , this._eatBurger, null, this);

				//recup des legumes
				game.physics.arcade.overlap(  this._getSprite() , this.level._getlvl().getVegetables() , this._eatVegetable, null, this);
    },

			_onDoors : function(hero,doors) {

				//add text au dessus de la porte
				if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
				{
					//chargé le niveau suivant
					//this.level.getNextLvl();
				}

			},

			_climbLadder : function(hero,scale) {
				this.sprite.body.velocity.y = -8.5;
				if (game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
            this.sprite.body.velocity.y = - this._getHeroProperties().getSpeedLadder();
        }
				if (game.input.keyboard.isDown(Phaser.Keyboard.S))
				{
						this.sprite.body.velocity.y = this._getHeroProperties().getSpeedLadder();
				}
			},

		 _eatBurger : function(hero,burger) {
			 this.weight = this.weight + 1;
			 burger.kill();
		 },

		 _eatVegetable : function(hero,vegetable) {
			 this.weight = this.weight - 1;
			 vegetable.kill();
		 },

    _getSprite : function() {
    		return this.sprite;
    },

		_getHeroProperties : function() {
				if(this.weight > 6)
				{
					//play sprite fat
					return this.heroFat;
				}
				else if (this.weight < 3)
				{
					return this.heroSkinny;
				}
				else
				{
					return this.heroStraight;
				}
    },

}
