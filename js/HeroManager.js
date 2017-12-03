var HeroManager = function(game) {

	this.game = game;
	this.sprite = null;

	this.posX = 10;
	this.posY = 260;

	this.isDead = false;
	this.life = 3;

  this.fireButton = null;
  this.jumpTimer = 0;
  this.power1 = null;
	this.power2 = null;
	this.switch_power = false;
	this.isSpacePress = false;

	this.live = null;
	this.renardhitSound = null;
	this.oeufSound  = null;
}

HeroManager.prototype = {
    create: function() {
		//sound


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
/*
    //  Arme 1
    this.power1 = this.game.add.power1(5, 'bullet');
    this.power1.bulletKillType = Phaser.power1.KILL_WORLD_BOUNDS;
    this.power1.bulletSpeed = 500;
		this.power1.fireRate = 900;
    this.power1.trackSprite(this.sprite, 4, 4);

		//Arme 2
		this.power2 = this.game.add.power1(50, 'bullet2');
		//this.power2.bulletKillType = Phaser.power1.KILL_WORLD_BOUNDS;
		this.power2.bulletKillType = Phaser.power1.KILL_DISTANCE;
		this.power2.bulletKillDistance = 200;
		this.power2.bulletSpeed = 900;
		this.power2.fireRate = 200;
		this.power2.bulletAngleVariance = 10;
		this.power2.trackSprite(this.sprite, 4, 4);
*/
		var key1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    key1.onDown.add(this._addPhaserDude, this);

		this.live = 3;
    },

    update: function() {

			//Deplacement

 				this.sprite.body.velocity.x = 0;

				if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
					  this.sprite.scale.x = -1;
						this.sprite.body.velocity.x = -200;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
					  this.sprite.scale.x = 1;
						this.sprite.body.velocity.x = 200;
				}

        if (game.input.keyboard.isDown(Phaser.Keyboard.W) && game.time.now > this.jumpTimer)
        {
            this.sprite.body.velocity.y = -300;
            this.jumpTimer = game.time.now + 1500;
        }
/*
        if ( game.input.activePointer.leftButton.isDown )
        {
					if(this.switch_power1 == false)
					{
						this.power1.fireAngle = (( game.physics.arcade.angleToPointer(this.sprite) * 180) / Math.PI);
						this.power1.fire();
					}
					if(this.switch_power1 == true)
					{
						if (this.oeufSound.isPlaying == false)
						{
							 this.oeufSound.play();
						}

						this.power2.fireAngle = (( game.physics.arcade.angleToPointer(this.sprite) * 180) / Math.PI);
						this.power2.fire();
					}
        }
        */
    },

		 _addPhaserDude : function() {
			 //change power
			 if(this.switch_power1 == false)
			 {
				 this.switch_power1 = true;
			 }
			 else if(this.switch_power1 == true)
			 {
				 this.switch_power1 = false;
			 }
			 console.log( this.switch_power1);
		},

    _getSprite : function() {
    		return this.sprite;
    },

    _setIsDead : function(isDead) {
    	this.isDead = isDead;
    },

    _getIsDead : function() {
    	return this.isDead;
    },

		_getpower1s1 : function() {
				return this.power1.bullets;
		},

		_getpower1s2 : function() {
				return this.power2.bullets;
		},

}
