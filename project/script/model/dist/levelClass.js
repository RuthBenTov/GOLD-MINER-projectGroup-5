var Level = /** @class */ (function () {
    function Level(NumLevel, targetScore, timeToEnd) {
        this.NumLevel = NumLevel;
        this.targetScore = targetScore;
        this.timeToEnd = timeToEnd;
        var randomMapByLevel = Math.floor(Math.random() * 3);
        this.map = mapsLevel1[randomMapByLevel];
    }
    return Level;
}());
var levels = [
    new Level(1, 1000, 80),
    new Level(2, 1200, 80),
    new Level(3, 1700, 90),
];
