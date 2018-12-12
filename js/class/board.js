class Board extends GameObject {
  constructor() {
    super();

    this.x = 0;
    this.y = 0;

    this.lenX = game.width / CELL_WIDTH;
    this.lenY = game.height / CELL_HEIGHT;

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
  constructor(board, numX, numY) {
    super();

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
