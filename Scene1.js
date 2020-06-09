class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload(){
    this.load.image('background',"Assets/back.jpg");
    this.load.image('wheel',"Assets/wheel.png");
    this.load.image('stand',"Assets/stand.png"); 
    this.load.image('pin',"Assets/pin.png");
    this.load.image('logo',"Assets/spin-n-win-logo.png");
      this.load.image('back',"Assets/ba.jpg");
      this.load.audio('theme','Assets/tick.mp3');
      
  }

  create() {
      let W = game.config.width;
    let H = game.config.height;
    this.back = this.add.tileSprite(0,0,W,H,'back').setScale(10);
    this.add.sprite(W/2,H/2-200,"logo").setScale(0.5);

    this.add.text(W/2-145, H/2, "Loading game...",{font: "50px Hobo Std",color: "#ff0000"});
   this.add.text(0 , 0, "Click On Screen To Start",{font: "20px Hobo Std",color: "#ff0000"});
      
    this.input.on('pointerdown', function (event) {
            this.scene.start("playGame");
      },this);
  }
    update(){
        this.back.tilePositionX-=0.5
        this.back.tilePositionY-=0.5;
    }
}
