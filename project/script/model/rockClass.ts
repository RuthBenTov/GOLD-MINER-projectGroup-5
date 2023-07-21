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
    if (this.type === "bag") this.imgSrc = "../image/bag.png";
  }

  renderRock() {
    const game = document.querySelector(".container__footer") as HTMLDivElement;
    if (game) {
      game.innerHTML += `
      <img class="rockElem" 
          id="${this.id}" src="${this.imgSrc}" alt="goldImg" 
          style="width:${this.width}px; top: ${this.position.yPos}%; left: ${this.position.xPos}%">`;
    }
  }
}

rockMap1Level1.forEach((elem) => elem.renderRock());

function createUniqId(): string {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}
