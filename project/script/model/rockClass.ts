class Rocks {
  constructor(
    public id = createUniqId(),
    public type: string, //gold, stone, bag
    public goldImg: string,
    public value: number, //how much it worth
    public width: number,
    public position: { xPos: number; yPos: number },
  ) {}
}

function createUniqId(): string {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}
