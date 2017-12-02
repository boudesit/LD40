var gameOver = function(game){
}

gameOver.prototype = {

  	create: function(){

  		loseSound = game.add.audio('loseSound', 1 , true);
        this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'gameover');
        this.spriteBG.animations.add('gameover1');
        this.spriteBG.animations.play('gameover1', 2, true);

  		if (loseSound.isPlaying == false)
  		{
    	    loseSound.play();
    	}else{
    		loseSound.resume();
    	}

		this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.restartButton.onDown.add(this.playTheGame, this);
	},
	playTheGame: function(){
		loseSound.pause();
		this.game.state.start("TheGame");
	}
}
