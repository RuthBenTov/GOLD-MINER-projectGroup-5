class Level {
  constructor(
    public NumLevel: number,
    public targetScore: number,
    public timeToEnd: number,
    public map: number = Math.floor(Math.random() * 3) + 1,
    ) {}
}

const levels: Level[] = [
  new Level(1, 1000, 80),
  new Level(2, 1200, 80),
  new Level(3,1700, 90),
];

