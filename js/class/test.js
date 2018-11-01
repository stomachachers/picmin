class Test {
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = "rgb(200, 0, 0)";
        this.ctx.fillRect(10, 10, 50, 50);
    }
}
