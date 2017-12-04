var gameScore = function(game){
}

gameScore.prototype = {
  create: function(){
      scoreSound = game.add.audio('scoreSound', 1 , true);
      this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'gamescore');
      this.spriteBG.animations.add('gamescore');
      this.spriteBG.animations.play('gamescore', 2, true);
      if (scoreSound.isPlaying == false)
      {
          scoreSound.play();
      }else{
          scoreSound.resume();
      }

    var style = { font: "32px Comic Sans MS", fill: "#000000", align: "center" };
    text = game.add.text(450, 325, this.game.score, style);

    this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.restartButton.onDown.add(this.playTheGame, this);
  },

  playTheGame: function(){
    scoreSound.pause();
    this.game.state.start("TheGame");
  }
}
