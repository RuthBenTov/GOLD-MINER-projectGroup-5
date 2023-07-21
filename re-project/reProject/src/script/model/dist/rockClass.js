"use strict";
exports.__esModule = true;
exports.Rocks = void 0;
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
            game.innerHTML += "\n        <img class=\"rockElem\" \n            id=\"" + this.id + "\" src=\"" + this.imgSrc + "\" alt=\"goldImg\" \n            style=\"width:" + this.width + "px; top: " + this.position.yPos + "%; left: " + this.position.xPos + "%\">";
        }
    };
    return Rocks;
}());
exports.Rocks = Rocks;
;
var maps_js_1 = require("../maps/dist/maps.js");
maps_js_1.rockMap1Level1.forEach(function (elem) { return elem.renderRock(); });
function createUniqId() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
