var Rocks = /** @class */ (function () {
    function Rocks(id, type, //gold, stone, bag
    goldImg, value, //how much it worth 
    width, position) {
        if (id === void 0) { id = createUniqId(); }
        this.id = id;
        this.type = type;
        this.goldImg = goldImg;
        this.value = value;
        this.width = width;
        this.position = position;
    }
    return Rocks;
}());
function createUniqId() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
