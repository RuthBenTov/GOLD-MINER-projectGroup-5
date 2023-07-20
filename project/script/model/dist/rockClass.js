var Rocks = /** @class */ (function () {
    function Rocks(type, //gold, stone, bag
    value, //how much it worth
    width, position, id) {
        if (id === void 0) { id = createUniqId(); }
        this.type = type;
        this.value = value;
        this.width = width;
        this.position = position;
        this.id = id;
        if (this.type === "gold")
            this.imgSrc = "../image/gold.png";
        if (this.type === "stone")
            this.imgSrc = "../image/stone.png";
        if (this.type === "bag")
            this.imgSrc = "../image/bag.png";
    }
    Rocks.prototype.renderRock = function () {
        var game = document.querySelector(".container__footer");
        if (game) {
            game.innerHTML += "\n      <img class=\"rockElem\" \n          id=\"" + this.id + "\" src=\"" + this.imgSrc + "\" alt=\"goldImg\" \n          style=\"width:" + this.width + "px; top: " + this.position.yPos + "px; \"left: " + this.position.xPos + "px\"\">";
        }
    };
    return Rocks;
}());
var rockMapLevel1 = [
    new Rocks("stone", 7, 30, { xPos: 200, yPos: 100 }),
    new Rocks("stone", 11, 30, { xPos: 100, yPos: 100 }),
    new Rocks("gold", 9, 90, { xPos: 100, yPos: 100 }),
    new Rocks("stone", 3, 30, { xPos: 100, yPos: 100 }),
    new Rocks("bag", 7, 40, { xPos: 100, yPos: 100 }),
    new Rocks("stone", 14, 30, { xPos: 100, yPos: 100 }),
    new Rocks("stone", 7, 30, { xPos: 100, yPos: 100 }),
    new Rocks("stone", 7, 30, { xPos: 100, yPos: 100 }),
    new Rocks("stone", 7, 30, { xPos: 100, yPos: 100 }),
];
rockMapLevel1.forEach(function (elem) { return elem.renderRock(); });
function createUniqId() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
