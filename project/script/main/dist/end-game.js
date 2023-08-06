function checkPassLevel(score) {
    var levels = getLevelsFromLs();
    var thisLevel = levels.find(function (l) { return l.isActive === true; });
    var thisLevelIndex = levels.findIndex(function (l) { return l.isActive === true; });
    //passed level
    if (thisLevel.score >= thisLevel.targetScore) {
        addMoneyToPlayer(thisLevel);
        alert("you done!");
        window.location.href = "/project/view/store.html";
        levels[thisLevelIndex].isActive = false;
        levels[thisLevelIndex + 1].isActive = true;
        setLevelsInLs(levels);
        if (levels.length == thisLevelIndex) {
            alert("you done all level , good job!");
            levels[1].isActive = true;
        }
        else {
            levels[thisLevelIndex + 1].isActive = true;
        }
    }
    //didn't passed level
    if (thisLevel.score < thisLevel.targetScore) {
        addMoneyToPlayer(thisLevel);
        window.location.href = "/project/view/store.html";
        document.querySelector("storeContainer__nextLevel a").innerHTML = "retry level";
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
