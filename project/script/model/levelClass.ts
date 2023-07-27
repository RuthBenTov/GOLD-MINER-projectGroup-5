
class Level {
  public map: Rocks[];
  constructor(
    public numLevel: number,
    public targetScore: number,
    public timeToEnd: number,
    public isActive: boolean = false,
    public score: number = 0,
  ) {
    let randomMapByLevel = Math.floor(Math.random() * 2);
    if (numLevel == 1) this.map = mapsLevel1[randomMapByLevel];
    if (numLevel == 2) this.map = mapsLevel2[randomMapByLevel];
    if (numLevel == 3) this.map = mapsLevel3[randomMapByLevel];
  }

  renderLevel() {
    
    document.querySelector("#levelValue")!.innerHTML = this.numLevel.toString();
    document.querySelector("#scoreValue")!.innerHTML = this.score.toString();
    document.querySelector("#targetValue")!.innerHTML = this.targetScore.toString();

    this.map.forEach((rock) => rock.renderRock());
  }
}

const __levels: Level[] = [
  new Level(1, 1000, 80),
  new Level(2, 1200, 80, true),
  new Level(3, 1700, 90),
];

let levels: Level[];

function getLevelsFromLs() {
  
  const levelsFromLs = JSON.parse(localStorage.getItem("levels")!);
  if (levelsFromLs) {
    
    levels = levelsFromLs.map((levelFromLs) => {
       return new Level(
        levelFromLs.numLevel,
        levelFromLs.targetScore,
        levelFromLs.timeToEnd,
        levelFromLs.isActive,
        levelFromLs.score,
      );
    });
  } else {
    localStorage.setItem("levels", JSON.stringify(__levels));
    levels = __levels;
  }  
  return levels;
}

function setLevelsInLs(levels:Level[]){
  localStorage.setItem("levels", JSON.stringify(levels));
}

function renderCurrentLevel(){
  getLevelsFromLs().find((level) => level.isActive == true)!.renderLevel();
}
renderCurrentLevel()