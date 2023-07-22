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
            game.innerHTML += "\n      <img class=\"rockElem\" \n          id=\"" + this.id + "\" src=\"" + this.imgSrc + "\" alt=\"goldImg\" \n          style=\"width:" + this.width + "px; top: " + this.position.yPos + "%; left: " + this.position.xPos + "%\">";
        }
    };
    return Rocks;
}());
;
var rockMap1Level1 = [
    new Rocks("stone", 7, 30, { xPos: 50, yPos: 50 }),
    new Rocks("stone", 11, 30, { xPos: 60, yPos: 70 }),
    new Rocks("stone", 9, 30, { xPos: 40, yPos: 20 }),
    new Rocks("stone", 3, 30, { xPos: 30, yPos: 30 }),
    new Rocks("stone", 14, 30, { xPos: 80, yPos: 20 }),
    new Rocks("stone", 7, 30, { xPos: 20, yPos: 70 }),
    new Rocks("bag", 7, 20, { xPos: 70, yPos: 50 }),
    new Rocks("gold", 600, 90, { xPos: 30, yPos: 55 }),
    new Rocks("gold", 650, 90, { xPos: 5, yPos: 70 }),
    new Rocks("gold", 300, 70, { xPos: 70, yPos: 70 }),
    new Rocks("gold", 90, 30, { xPos: 10, yPos: 29 }),
    new Rocks("gold", 90, 30, { xPos: 12, yPos: 10 }),
];
rockMap1Level1.forEach(function (elem) { return elem.renderRock(); });
function createUniqId() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
// timer
var timer = document.querySelector("h1");
var timeSecond = 70;
displayTime(timeSecond);
var countDown = setInterval(function () {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond <= 0) {
        clearInterval(countDown);
        alert("game over");
        // window.location.href = "/project/view/gameOver.html";
    }
}, 1000);
function displayTime(second) {
    var min = Math.floor(second / 60);
    var sec = Math.floor(second % 60);
    if (timer) {
        timer.innerHTML = "" + (min < 10 ? '0' : '') + min + ":" + (sec < 10 ? '0' : '') + sec;
    }
}
