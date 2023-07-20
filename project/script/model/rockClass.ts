class Rocks {
  public imgSrc: string;
  constructor(
    public type: string, //gold, stone, bag
    public value: number, //how much it worth
    public width: number,
    public position: { xPos: number; yPos: number },
    public id = createUniqId(),
  ) {
    if (this.type === "gold") this.imgSrc = "../image/gold.png";
    if (this.type === "stone") this.imgSrc = "../image/stone.png";
    if (this.type==="bag") this.imgSrc = "../image/bag.png";
  }

  renderRock() {
    const game = document.querySelector(".container__footer") as HTMLDivElement;
    if (game) {
      game.innerHTML += `
      <img class="rockElem" 
          id="${this.id}" src="${this.imgSrc}" alt="goldImg" 
          style="width:${this.width}px; top: ${this.position.yPos}px; "left: ${this.position.xPos}px"">`;
    }
  }
}

const rockMapLevel1 = [
  new Rocks("stone", 7, 30, { xPos: 200, yPos: 100 }),
  new Rocks("stone", 11, 30, { xPos: 100, yPos: 100 }),
  new Rocks("gold", 9, 90, { xPos: 100, yPos: 100 }),
  new Rocks("stone", 3, 30, { xPos: 100, yPos: 100 }),
  new Rocks("bag", 7, 40, { xPos: 100, yPos: 100 }),
  new Rocks("stone", 14, 30, { xPos: 100, yPos: 100 }),
  new Rocks("stone", 7, 30, { xPos: 100, yPos: 100 }),
  new Rocks("stone", 7, 30, { xPos: 100, yPos: 100 }),
  new Rocks("stone", 7, 30, { xPos: 100, yPos: 100 }),
];

rockMapLevel1.forEach((elem) => elem.renderRock());

function createUniqId(): string {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}
