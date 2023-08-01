function checkPassLevel(score:number) {
    const levels = getLevelsFromLs()
  const thisLevel = levels.find((l) => l.isActive === true)!;
  const thisLevelIndex = levels.findIndex(
    (l) => l.isActive === true,
  )!;
  //passed level
  if (thisLevel.score >= thisLevel.targetScore) {
      addMoneyToPlayer(thisLevel);
      alert("you done!");

      window.location.href = "/project/view/store.html";
      levels[thisLevelIndex].isActive = false;
      levels[thisLevelIndex + 1].isActive = true;
      setLevelsInLs(levels)

    if (levels.length ==  thisLevelIndex) {
        alert("you done all level , good job!");
        levels[1].isActive = true;
    } else {
        levels[thisLevelIndex + 1].isActive = true;
    }
  }
  //didn't passed level
  if (thisLevel.score < thisLevel.targetScore) {
    addMoneyToPlayer(thisLevel);
    window.location.href = "/project/view/gameOver.html";
  }
}

let __playersMoney = 0;
function addMoneyToPlayer(thisLevel: Level) {
  let playersMoney = JSON.parse(localStorage.getItem("playersMoney")!);

  if (playersMoney) {
    playersMoney += thisLevel.score;
    localStorage.setItem("playersMoney", JSON.stringify(playersMoney));
  } else {
    __playersMoney += thisLevel.score;
    localStorage.setItem("playersMoney", JSON.stringify(__playersMoney));
  }
}
