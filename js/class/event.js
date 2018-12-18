class EventManager extends GameObject {
  constructor(parent) {
    super(parent);

    this.eventList = [];
  }

  generate(type) {
    this.newEvent = new Object();
    if (type === EVENT.QUAKE) {
      this.newEvent.entity = new Quake(this);
    }
    if (type === EVENT.TSUNAMI) {
      this.newEvent.entity = new Tsunami(this);
    }
    this.newEvent.type = type;

    this.eventList.push(this.newEvent);
    this.root.stage.addChild(this.newEvent.entity);
  }

  delete(type) {
    for (let i = 0; i < this.eventList.length; i++) {
      if (this.eventList[i] !== null) {
        if (this.eventList[i].type === type) {
          this.root.stage.removeChild(this.eventList[i].entity);
          this.eventList[i] = null;
        }
      }
    }
  }

  tick() {
    for (let i = 0; i < this.eventList.length; i++) {
      if (this.eventList[i] !== null) {
        this.eventList[i].entity.tick();
      }
    }
  }
}

class Event extends GameObject {
  constructor(parent) {
    super(parent);

    this.timer = new ChildTimer(this);
  }

  tick() {
    this.timer.tick();
  }
}

class Quake extends Event {
  constructor(parent) {
    super(parent);

    this.type = EVENT.QUAKE;

    this.notice = new EventNotice(this);
    this.addChild(this.notice);
  }

  tick() {
    super.tick();

    if (this.prevTime !== this.time && this.time === 3) {
      this.root.eventManager.delete(EVENT.QUAKE);
    }
  }
}

class Tsunami extends Event {
  constructor(parent) {
    super(parent);

    this.type = EVENT.TSUNAMI;

    this.notice = new EventNotice(this);
    this.addChild(this.notice);
  }

  tick() {
    super.tick();

    if (this.prevTime !== this.time && this.time % 3 === 0) {
      this.root.sceneManager.nowScene.board.update();
    }
    if (this.prevTime !== this.time && this.time === 3) {
      this.removeChild(this.notice);
    }
  }
}
