class Rock {
  public imgSrc: string;
  public value: number; //how much it worth
  constructor(
    public type: string, //gold, stone, bag
    public width: number,
    public position: { xPos: number; yPos: number },
    public id = createUniqId(),
  ) {
    if (this.type === "gold") this.imgSrc = "../image/gold.png";
    if (this.type === "stone") this.imgSrc = "../image/stone.png";
    if (this.type === "bag") this.imgSrc = "../image/bag.png";
  }

  getScore() {
    if (this.type === "gold") {
      switch (this.width) {
        case 90:
          this.value = 650;
          break;
        case 70:
          this.value = 550;
          break;
        case 60:
          this.value = 300;
          break;
        case 30:
          this.value = 200;
          break;
      }
    }
    if (this.type === "stone") {
      switch (this.width) {
        case 90:
          this.value = 50;
          break;
        case 60:
          this.value = 20;
          break;
        case 30:
          this.value = 11;
          break;
      }
    }
    if (this.type === "bag") {
      this.value = Math.round(Math.random() * 1500);
    }

    return this.value;
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

function createUniqId(): string {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}
