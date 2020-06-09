class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create(){
    //create that image
    let W = game.config.width;
    let H = game.config.height;
    
    this.ba=this.add.sprite(W/2,H/2,'background');
    let pin = this.add.sprite(W/2,H/2-250,'pin').setScale(0.25);
    
    pin.depth = 5;
    
    this.add.sprite(W/2,H/2 + 250,'stand').setScale(0.25);
    
    
    //let create wheels
      
    this.wheel = this.add.sprite(W/2,H/2,"wheel");
    this.wheel.setScale(0.25); 
    this.game_text = this.add.text(10,10,"Welcome to Spin & Win",{font: "40px Ink Free" , color:"Red"});
    console.log(this.wheel.depth);
    this.input.on("pointerdown",this.spinwheel, this)
    
}
update(){
    console.log("In Update");
    this.ba.angle -= 1;
    
}

spinwheel(){
    console.log("Time to spin the wheel");
    let rounds = Phaser.Math.Between(2,4);
    console.log(rounds);
    var music = this.sound.add('theme');

    music.play();
    
    let extra_degrees = Phaser.Math.Between(0,11)*30;
    let total_angle = rounds*360 + extra_degrees;
    let idx = prizes_config.count - 1 - Math.floor(extra_degrees/(360/prizes_config.count));
    
    let tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle,
        ease:"Cubic.easeOut",
        duration: 3000,
        onComplete:function(){
            if(prizes_config.prize_names[idx] == "Hard Luck")
                alert("Better Luck Next Time");
            else
                alert("You Won  "  + prizes_config.prize_names[idx])}
    });
}
   

}