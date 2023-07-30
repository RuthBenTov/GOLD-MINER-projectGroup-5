var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
var gameBoard = document.querySelector(".container");
var gameBoardLeft = gameBoard.getBoundingClientRect().left;
var gameBoardRight = gameBoard.getBoundingClientRect().right;
var gameBoardBottom = gameBoard.getBoundingClientRect().bottom;
function getElementToPlayer(item) {
    var playerPosition = {
        x: goldMiner.getBoundingClientRect().left,
        y: rope.getBoundingClientRect().top
    };
    item.style.position = "absolute";
    item.style.top = -50 + "%";
    item.style.left = 50 + "%";
    IdentifyTheStone(item);
}
function checkCollision(ropeLeft, ropeRight, ropeBottom) {
    var rocks = document.querySelectorAll(".rockElem");
    for (var i = 0; i < rocks.length; i++) {
        var rockLeft = rocks[i].getBoundingClientRect().left;
        var rockRight = rocks[i].getBoundingClientRect().right;
        var rockTop = rocks[i].getBoundingClientRect().top;
        var rockBottom = rocks[i].getBoundingClientRect().bottom;
        var item = rocks[i];
        if ((ropeRight < rockRight &&
            ropeRight > rockLeft &&
            ropeBottom < rockBottom &&
            ropeBottom > rockTop) ||
            (ropeLeft < rockRight &&
                ropeLeft > rockLeft &&
                ropeBottom < rockBottom &&
                ropeBottom > rockTop)) {
            rope.style.width = "40px";
            rope.classList.remove("active");
            getElementToPlayer(item);
            // removingTheStone(item)
            // rope.style.animation = "gettingDown 5s linear infinite"
        }
    }
    if (ropeLeft <= gameBoardLeft ||
        ropeRight >= gameBoardRight ||
        ropeBottom >= gameBoardBottom) {
        rope.style.width = "40px";
        rope.classList.remove("active");
    }
}
setInterval(function () {
    var ropeLeft = rope.getBoundingClientRect().left;
    var ropeRight = rope.getBoundingClientRect().right;
    var ropeBottom = rope.getBoundingClientRect().bottom;
    checkCollision(ropeLeft, ropeRight, ropeBottom);
}, 0.5);
function IdentifyTheStone(item) {
    console.log(item);
    var thisLevel = levels.find(function (level) { return level.isActive === true; });
    var thisMap = thisLevel.map;
    var currentElem = thisMap.find(function (elem) { return elem.id === item.id; });
    thisLevel.score += currentElem.getScore();
    document.querySelector("#scoreValue").innerHTML = thisLevel.score.toString();
    setLevelsInLs(levels);
}
