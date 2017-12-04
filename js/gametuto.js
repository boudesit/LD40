var gameTuto = function(game){}

gameTuto.prototype = {
  	create: function(){

      this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'gametuto');


  		this.startButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		  this.startButton.onDown.add(this.playTheGame, this);

  		if (this.game.introSound.isPlaying == false)
  		{
  			this.game.introSound.loop = true;
    	  this.game.introSound.play();
    	}else{
    		this.game.introSound.resume();
    	}
	},
	playTheGame: function(){
		this.game.introSound.pause();
		this.game.state.start("TheGame");
	}
}
