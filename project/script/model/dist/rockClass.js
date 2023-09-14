var Rock = /** @class */ (function () {
    function Rock(type, //gold, stone, bag
    width, position, id) {
        if (id === void 0) { id = createUniqId(); }
        this.type = type;
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
    Rock.prototype.getScore = function () {
        if (this.type === "gold") {
            switch (this.width) {
                case 90:
                    this.value = 650;
                    break;
                case 70:
                    this.value = 550;
                    break;
                case 60:
                    this.value = 300;
                    break;
                case 30:
                    this.value = 200;
                    break;
            }
        }
        if (this.type === "stone") {
            switch (this.width) {
                case 90:
                    this.value = 50;
                    break;
                case 60:
                    this.value = 20;
                    break;
                case 30:
                    this.value = 11;
                    break;
            }
        }
        if (this.type === "bag") {
            this.value = Math.round(Math.random() * 1500);
        }
        return this.value;
    };
    Rock.prototype.renderRock = function () {
        var game = document.querySelector(".container__footer");
        if (game) {
            game.innerHTML += "\n      <img class=\"rockElem\" \n          id=\"" + this.id + "\" src=\"" + this.imgSrc + "\" alt=\"goldImg\" \n          style=\"width:" + this.width + "px; top: " + this.position.yPos + "%; left: " + this.position.xPos + "%\">";
        }
    };
    return Rock;
}());
function createUniqId() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
