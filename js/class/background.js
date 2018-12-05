class Background extends GameObject {
    constructor() {
        super();

        this.width = game.stage.canvas.width;
        this.height = game.stage.canvas.height;
        this.x = 0;
        this.y = 0;
        this.belongScene;

        this.base = new createjs.Bitmap("img/1988.png");

        // TODO createPutternする方法
        this.addChild(this.base);
        
        this.addEventListener('tick', this.render.bind(this))

    }

    render() {
        
        // できれば、背景画像をスクロールさせたい。
        let target = createjs.Tween.get(this.belongScene.titleBg);
        target.to({x: this.belongScene.titleBg.x + 5});
        if(this.belongScene.titleBg.x > game.stage.canvas.width) {
            target.to({x: -480});
        }
        target.to({y: this.belongScene.titleBg.y + 5});
        if(this.belongScene.titleBg.y > game.stage.canvas.height) {
            target.to({y: -480});
        }
    }
}