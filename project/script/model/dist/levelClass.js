var Level = /** @class */ (function () {
    function Level(NumLevel, targetScore, timeToEnd) {
        this.NumLevel = NumLevel;
        this.targetScore = targetScore;
        this.timeToEnd = timeToEnd;
        var randomMapByLevel = Math.floor(Math.random() * 2);
        if (NumLevel == 1)
            this.map = mapsLevel1[randomMapByLevel];
        if (NumLevel == 2)
            this.map = mapsLevel2[randomMapByLevel];
        if (NumLevel == 3)
            this.map = mapsLevel3[randomMapByLevel];
    }
    Level.prototype.renderLevel = function () {
        this.map.forEach(function (rock) { return rock.renderRock(); });
    };
    return Level;
}());
var levels = [
    new Level(1, 1000, 80),
    new Level(2, 1200, 80),
    new Level(3, 1700, 90),
];
