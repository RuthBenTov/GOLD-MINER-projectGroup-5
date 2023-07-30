var Level = /** @class */ (function () {
    function Level(numLevel, targetScore, timeToEnd, isActive, score) {
        if (isActive === void 0) { isActive = false; }
        if (score === void 0) { score = 0; }
        this.numLevel = numLevel;
        this.targetScore = targetScore;
        this.timeToEnd = timeToEnd;
        this.isActive = isActive;
        this.score = score;
        var randomMapByLevel = Math.floor(Math.random() * 3);
        if (numLevel == 1)
            this.map = mapsLevel1[randomMapByLevel];
        if (numLevel == 2)
            this.map = mapsLevel2[randomMapByLevel];
        if (numLevel == 3)
            this.map = mapsLevel3[randomMapByLevel];
    }
    Level.prototype.renderLevel = function () {
        document.querySelector("#levelValue").innerHTML = this.numLevel.toString();
        document.querySelector("#scoreValue").innerHTML = this.score.toString();
        document.querySelector("#targetValue").innerHTML = this.targetScore.toString();
        this.map.forEach(function (rock) { return rock.renderRock(); });
    };
    return Level;
}());
var __levels = [
    new Level(1, 1000, 80, true),
    new Level(2, 1200, 80),
    new Level(3, 1700, 90),
];
var levels;
function getLevelsFromLs() {
    var levelsFromLs = JSON.parse(localStorage.getItem("levels"));
    if (levelsFromLs) {
        levelsFromLs.forEach(function (level) { return level.score = 0; });
        localStorage.setItem("levels", JSON.stringify(levelsFromLs));
        levels = levelsFromLs.map(function (levelFromLs) {
            return new Level(levelFromLs.numLevel, levelFromLs.targetScore, levelFromLs.timeToEnd, levelFromLs.isActive, levelFromLs.score);
        });
    }
    else {
        localStorage.setItem("levels", JSON.stringify(__levels));
        levels = __levels;
    }
    return levels;
}
function setLevelsInLs(levels) {
    localStorage.setItem("levels", JSON.stringify(levels));
}
function renderCurrentLevel() {
    getLevelsFromLs().find(function (level) { return level.isActive == true; }).renderLevel();
}
renderCurrentLevel();
