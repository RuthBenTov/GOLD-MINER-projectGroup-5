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
};
const rockMap1Level1 = [
  new Rocks("stone", 7, 30, { xPos: 50, yPos: 50 }),
  new Rocks("stone", 11, 30,{ xPos: 60, yPos: 70 }),
  new Rocks("stone", 9, 30, { xPos: 40, yPos: 20 }),
  new Rocks("stone", 3, 30, { xPos: 30, yPos: 30 }),
  new Rocks("stone", 14, 30, { xPos: 80, yPos: 20 }),
  new Rocks("stone", 7, 30, { xPos: 20, yPos: 70 }),
  new Rocks("bag", 7, 20, { xPos: 70, yPos: 50 }),
  new Rocks("gold", 600, 90, { xPos: 30, yPos: 55 }),
  new Rocks("gold", 650, 90, { xPos: 5, yPos: 70 }),
  new Rocks("gold", 300, 70, { xPos: 70, yPos: 70 }),
  new Rocks("gold", 90, 30, { xPos: 10, yPos: 29 }),
  new Rocks("gold", 90, 30, { xPos: 12, yPos: 10 }),
];
rockMap1Level1.forEach((elem) => elem.renderRock());

function createUniqId(): string {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}


// timer
const timer = document.querySelector(".head__rightSide__timer #timerValue");
let timeSecond = 8000;

displayTime(timeSecond);

const countDown = setInterval (()=> {
  timeSecond -- ;
  displayTime(timeSecond);
  if(timeSecond <= 0) {
    clearInterval(countDown);
    alert("game over")
    // window.location.href = "/project/view/gameOver.html";
  }
},1000)

function displayTime(second:number){
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  if(timer){
    timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
  }
}