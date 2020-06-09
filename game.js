let prizes_config = {
    count:12,
    prize_names : ["3000 Credits","35% Off","Hard Luck","70% OFF","Swagpack","100% OFF","Netflix Subs","50% Off","Amazon Voucher","2 Extra Spin", "CB Tshirt","CB Book"]
}    

var config = {
    
  width: 1500,
  height: 750,
  scene: [Scene1, Scene2],
  pixelArt: true,
audio: {
        disableWebAudio: true
    }
    
}

var game = new Phaser.Game(config);