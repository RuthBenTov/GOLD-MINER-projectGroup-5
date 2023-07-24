var Level = /** @class */ (function () {
    function Level(NumLevel, targetScore, timeToEnd, map) {
        if (map === void 0) { map = Math.floor(Math.random() * 3) + 1; }
        this.NumLevel = NumLevel;
        this.targetScore = targetScore;
        this.timeToEnd = timeToEnd;
        this.map = map;
    }
    return Level;
}());
var levels = [
    new Level(1, 1000, 80),
    new Level(2, 1200, 80),
    new Level(3, 1700, 90),
];
