class Level {
  public map: Rocks[];
  constructor(
    public NumLevel: number,
    public targetScore: number,
    public timeToEnd: number,
  ) {
    let randomMapByLevel = Math.floor(Math.random() * 2);
    if (NumLevel == 1) this.map = mapsLevel1[randomMapByLevel];
    if (NumLevel == 2) this.map = mapsLevel2[randomMapByLevel];
    if (NumLevel == 3) this.map = mapsLevel3[randomMapByLevel];

    
  }

  renderLevel(){
   this.map.forEach(rock => rock.renderRock());

  }
}

const levels: Level[] = [
  new Level(1, 1000, 80),
  new Level(2, 1200, 80),
  new Level(3, 1700, 90),
];






