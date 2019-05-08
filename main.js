function main(){
    var config = {
        type: Phaser.AUTO,
        width: 900,
        height: 450,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    
    var game = new Phaser.Game(config);
    
    function preload ()
    {
        this.load.image('ground', 'assets/simple_ground.png');
        this.load.spritesheet('test', 
            'assets/sprite_qualquer.png',
            { frameWidth: 64, frameHeight: 96 }
        );
    }
    
    function create ()
    {
        var x = 30;
        var y = config.height - 64;
        this.add.image(x,y,'test');

        platforms = this.physics.add.staticGroup();
        
        //platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    }
    
    function update ()
    {
    }
}