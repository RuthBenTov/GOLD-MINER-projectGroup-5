function checkPassLevel(score) {
    var thisLevel = getLevelsFromLs().find(function (l) { return l.isActive === true; });
    console.log(thisLevel.score);
    var thisLevelIndex = getLevelsFromLs().findIndex(function (l) { return l.isActive === true; });
    //passed level
    if (thisLevel.score >= thisLevel.targetScore) {
        window.location.href = "/project/view/betweenLevels.html";
        getLevelsFromLs()[thisLevelIndex].isActive = false;
        addMoneyToPlayer(thisLevel);
        if (getLevelsFromLs.length == thisLevelIndex) {
            console.log(thisLevelIndex);
            console.log(getLevelsFromLs.length);
            alert("you done all level , good job!");
            getLevelsFromLs()[1].isActive = true;
        }
        else {
            getLevelsFromLs()[thisLevelIndex + 1].isActive = true;
        }
    }
    //didn't passed level
    if (thisLevel.score < thisLevel.targetScore) {
        addMoneyToPlayer(thisLevel);
        window.location.href = "/project/view/gameOver.html";
    }
}
var __playersMoney = 0;
function addMoneyToPlayer(thisLevel) {
    var playersMoney = JSON.parse(localStorage.getItem("playersMoney"));
    if (playersMoney) {
        playersMoney += thisLevel.score;
        localStorage.setItem("playersMoney", JSON.stringify(playersMoney));
    }
    else {
        __playersMoney += thisLevel.score;
        localStorage.setItem("playersMoney", JSON.stringify(__playersMoney));
    }
}
