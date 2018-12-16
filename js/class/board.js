class Board extends GameObject {
  constructor(parent) {
    super(parent);

    this.lenX = 13;
    this.lenY = 20;

    this.width = this.lenX * CELL_WIDTH;
    this.height = this.lenY * CELL_HEIGHT;
    this.x = 0;
    this.y = this.parent.statusBar.height;

    this.cells = [];
    this.createCells();
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

    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(MAP_COLOR[this.type]);
    this.shape.graphics.drawRect(0, 0, CELL_WIDTH, CELL_HEIGHT);
    this.shape.graphics.endFill();
    this.addChild(this.shape);
  }
}
