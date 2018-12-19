class Board extends GameObject {
  constructor(parent) {
    super(parent);

    this.lenX = 13;
    this.lenY = 20;

    this.width = this.lenX * CELL_WIDTH;
    this.height = this.lenY * CELL_HEIGHT;
    this.x = (this.root.width - this.width) / 2;
    this.y = this.parent.statusBar.height;

    this.cells = [];
    this.createCells();

    this.grid = new Grid(this);
    this.addChild(this.grid);
  }

  createCells() {
    for (let i = 0; i < this.lenY; i++) {
      let temp_array = [];
      for (let j = 0; j < this.lenX; j++) {
        temp_array[j] = new Cell(this, j, i);
      }
      this.cells[i] = temp_array;
    }

    for (let i = 0; i < this.lenY; i++) {
      for (let j = 0; j < this.lenX; j++) {
        this.addChild(this.cells[i][j]);
      }
    }
  }

  update() {
    let buff = new Array(this.lenY);

    for (let i = 0; i < this.lenY; i++) {
      buff[i] = new Array(this.lenX);
    }

    for (let i = 0; i < this.lenY; i++) {
      for (let j = 0; j < this.lenX; j++) {
        if (this.cells[i][j].state === MAP_STATE.FLOOD) {
          if (i - 1 >= 0) {
            buff[i-1][j] = MAP_STATE.FLOOD;
          }
          if (i + 1 < this.lenY) {
            buff[i+1][j] = MAP_STATE.FLOOD;
          }
          if (j - 1 >= 0) {
            buff[i][j-1] = MAP_STATE.FLOOD;
          }
          if (j + 1 < this.lenX) {
            buff[i][j+1] = MAP_STATE.FLOOD;
          }
        }
      }
    }

    for (let i = 0; i < this.lenY; i++) {
      for (let j = 0; j < this.lenX; j++) {
        this.cells[i][j].state = buff[i][j];
        this.cells[i][j].update();
      }
    }
  }
}

class Cell extends GameObject {
  constructor(parent, numX, numY) {
    super(parent);

    this.numX = numX;
    this.numY = numY;

    this.width = CELL_WIDTH;
    this.height = CELL_HEIGHT;
    this.x = numX * CELL_WIDTH;
    this.y = numY * CELL_HEIGHT;

    this.type = MAP[numY][numX];

    if (this.type === MAP_TYPE.SEA) {
      this.state = MAP_STATE.FLOOD;
    }
    else {
      this.state = MAP_STATE.NONE;
    }

    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(MAP_COLOR[this.type]);
    this.shape.graphics.drawRect(0, 0, CELL_WIDTH, CELL_HEIGHT);
    this.shape.graphics.endFill();
    this.addChild(this.shape);
  }

  update() {
    this.removeChild(this.overlay);
    this.overlay = new createjs.Shape();
    if (this.type === MAP_TYPE.SEA) {
      this.overlay.color = MAP_OVERCOLOR[MAP_STATE.NONE];
    }
    else {
      this.overlay.color = MAP_OVERCOLOR[this.state];
    }
    this.overlay.graphics.beginFill(this.overlay.color);
    this.overlay.graphics.drawRect(0, 0, CELL_WIDTH, CELL_HEIGHT);
    this.overlay.graphics.endFill();
    this.addChild(this.overlay);
  }
}

class Grid extends GameObject {
  constructor(parent) {
    super(parent);

    this.x = 0;
    this.y = 0;
    this.width = this.parent.width;
    this.height = this.parent.height;

    this.lenX = this.parent.lenX;
    this.lenY = this.parent.lenY;

    this.line = new createjs.Shape();
    this.line.graphics.beginStroke('#999999aa');
    this.line.graphics.setStrokeStyle(3);

    for (let i = 0; i < this.lenX + 1; i++) {
      this.line.graphics.moveTo(i * CELL_WIDTH, 0);
      this.line.graphics.lineTo(i * CELL_WIDTH, this.height);
    }
    for (let i = 0; i < this.lenY + 1; i++) {
      this.line.graphics.moveTo(0, i * CELL_HEIGHT);
      this.line.graphics.lineTo(this.width, i * CELL_HEIGHT);
    }

    this.addChild(this.line);
  }
}