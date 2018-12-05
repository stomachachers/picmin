// ゲームに登場するすべてのオブジェクトは，GameObjectクラスを継承する
class GameObject extends createjs.Container {
  constructor() {
    super();
    // idを持たせる！
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.belongScene;
  }
}
