var HeroManager = function(game,level) {

	this.game = game;
	this.level = level;
	this.sprite = null;

	this.posX = 10;
	this.posY = 255;

	this.weight = 3;

  this.jumpTimer = 0;
	this.idleTimer = 0;
	this.isSpacePress = false;


	this.heroFat = null;
	this.heroStraight = null;
	this.heroSkinny = null;
	this.facing = null;

	this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

HeroManager.prototype = {
    create: function() {
		//sound

		//gravity
    this.game.physics.arcade.gravity.y = 500;

		// poids
		this.heroFat = new HeroFat(this.game);
		this.heroFat.create();

		this.heroStraight = new HeroStraight(this.game);
		this.heroStraight.create();

		this.heroSkinny = new HeroSkinny(this.game);
		this.heroSkinny.create();

		//Sprite
		this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero');

		this.sprite.animations.add('hero_light_climb', [0, 1, 2], 10, true);
		this.sprite.animations.add('hero_light_idle', [3, 4, 5], 10, true);
		this.sprite.animations.add('hero_light_jump', [6, 7], 10, true);
		this.sprite.animations.add('hero_light_walk', [8, 9, 10], 10, true);

		this.sprite.animations.add('hero_fat_break', [11, 12], 10, true);
		this.sprite.animations.add('hero_fat_climb', [13, 14, 15], 10, true);
		this.sprite.animations.add('hero_fat_idle', [16, 17,18], 10, true);
		this.sprite.animations.add('hero_fat_walk', [19, 20, 21], 10, true);


		this.sprite.animations.add('hero_semi_climb', [22, 23, 24], 10, true);
		this.sprite.animations.add('hero_semi_idle', [25, 26, 27], 10, true);
		this.sprite.animations.add('hero_semi_jump', [28, 29], 10, true);
		this.sprite.animations.add('hero_semi_walk', [30, 31, 32], 10, true);

		this.game.physics.arcade.enable(this.sprite);
		this.sprite.physicsBodyType = Phaser.Physics.ARCADE;
		this.sprite.enableBody = true;
		this.sprite.body.collideWorldBounds=true;
		this.sprite.body.checkCollision.up = false;
		this.sprite.body.setSize(10, 50, 10, 50);
		this.sprite.anchor.set(0.5);
		this.sprite.scale.setTo(1,1);
		this.sprite.body.bounce.y = 0;

		this._getHeroProperties().getAnimationIdle(this._getSprite());

    },

    update: function() {


 				this.sprite.body.velocity.x = 0;
				//timer pour le idle
        if ( game.time.now > this.idleTimer)
        {
						this._getHeroProperties().getAnimationIdle(this._getSprite());
            this.idleTimer = game.time.now + 500;
        }

			  //Deplacement droite gauche
				if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
						this._getHeroProperties().getAnimationWalk(this._getSprite());
					  this.sprite.scale.x = -1;
						this.sprite.body.velocity.x = - this._getHeroProperties().getSpeed();

				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
						this._getHeroProperties().getAnimationWalk(this._getSprite());
					  this.sprite.scale.x = 1;
						this.sprite.body.velocity.x = this._getHeroProperties().getSpeed();
				}

				//entrer porte et portebonus
				game.physics.arcade.overlap(  this._getSprite() , this.level._getlvl().getDoors() , this._onDoors, null, this);

				//utiliser pouvoire
				// pouvoire 1 - 2 -3


				//collision
				game.physics.arcade.collide(  this._getSprite() , this.level._getlvl().getPlateforms() , this._jump, null, this);
				//ba si tu collide avec le sol ba vas te faire foutre
				//game.physics.arcade.collide(  this._getSprite() , this.game.collideWorldBounds , this._jump, null, this);

				//monter à l'echelle
				game.physics.arcade.overlap(  this._getSprite() , this.level._getlvl().getScales() , this._climbLadder, null, this);

				game.physics.arcade.collide(  this._getSprite() , this.level._getlvl().getWalls() , this._breakWall, null, this);

				//recup des burger
				game.physics.arcade.overlap(  this._getSprite() , this.level._getlvl().getBurgers() , this._eatBurger, null, this);

				//recup des legumes
				game.physics.arcade.overlap(  this._getSprite() , this.level._getlvl().getVegetables() , this._eatVegetable, null, this);

				if(this.sprite.body.onFloor()) {
					this._jump();
				}

				this.isSpacePress = this.spaceKey.isDown;

    },

			_onDoors : function(hero,doors) {

				//add text au dessus de la porte
				if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
				{
					//chargé le niveau suivant
					//this.level.getNextLvl();
				}

			},

			_jump : function(hero,platform) {

				//saut
        if (game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
						this._getHeroProperties().getAnimationJump(this._getSprite());
            this.sprite.body.velocity.y = - this._getHeroProperties().getJump();
						//ajouter un jump timer selon la corpulance
        }

			},

			_climbLadder : function(hero,scale) {
				this.sprite.body.velocity.y = -8.5;
				if (game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
						this._getHeroProperties().getAnimationClimb(this._getSprite());
            this.sprite.body.velocity.y = - this._getHeroProperties().getSpeedLadder();
        }
				if (game.input.keyboard.isDown(Phaser.Keyboard.S))
				{
						this._getHeroProperties().getAnimationClimb(this._getSprite());
						this.sprite.body.velocity.y = this._getHeroProperties().getSpeedLadder();
				}
			},

			_breakWall : function(hero, wall) {

				if (this.spaceKey.isDown && !this.isSpacePress)
				{
						this._getHeroProperties().getAnimationBreak(this._getSprite());
						wall.damage += this._getHeroProperties().getDamageBreak();

				}
			},

		 _eatBurger : function(hero,burger) {
			 this.weight = this.weight + 1;
			 burger.kill();
			 this._getHeroProperties().getAnimationIdle(this._getSprite());
		 },

		 _eatVegetable : function(hero,vegetable) {
			 this.weight = this.weight - 1;
			 vegetable.kill();
			 	this._getHeroProperties().getAnimationIdle(this._getSprite());
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
