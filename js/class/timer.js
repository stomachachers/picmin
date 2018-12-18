class Timer extends GameObject {
  constructor(parent) {
    super(parent);

    this.originSecond = Math.floor(Date.now() / 1000);
    this.time = 0;
  }

  tick() {
    this.nowSecond = Math.floor(Date.now() / 1000);
    this.prevTime = this.time;
    this.time = this.nowSecond - this.originSecond;

    this.parent.prevTime = this.prevTime;
    this.parent.time = this.time;
  }
}

class ChildTimer extends GameObject {
  constructor(parent) {
    super(parent);

    this.originSecond = this.root.time;
    this.time = 0;
  }

  tick() {
    this.nowSecond = this.root.time;
    this.prevTime = this.time;
    this.time = this.nowSecond - this.originSecond;

    this.parent.prevTime = this.prevTime;
    this.parent.time = this.time;
  }
}

