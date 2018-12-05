class Background extends GameObject {
    constructor() {
        super();

        this.width = stage.canvas.width;
        this.height = stage.canvas.height;
        this.x = 0;
        this.y = 0;

        this.base = new createjs.Bitmap("url");

        

    }

    render() {
        // 未実装
        // できれば、背景画像をスクロールさせたい。
    }
}