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
    this.newEvent.type = type;

    this.eventList.push(this.newEvent);
    this.root.stage.addChild(this.newEvent.entity);
  }

  delete(type) {
    for (let i = 0; i < this.eventList.length; i++) {
      if (this.eventList[i].type === type) {
        this.root.stage.removeChild(this.eventList[i].entity);
        this.eventList[i] = null;
      }
    }
  }

  tick() {}
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

    this.notice = new EventNotice(this);
    this.addChild(this.notice);
  }
}
