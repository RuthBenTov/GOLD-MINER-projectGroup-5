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
    //   const offsetY = item.getBoundingClientRect.top - playerPosition.y;
    //   const offsetX = item.getBoundingClientRect.left - playerPosition.x;
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
<<<<<<< HEAD
    var ropeX = rope.getBoundingClientRect().x;
    var ropeY = rope.getBoundingClientRect().y;
    var ropeWidth = rope.getBoundingClientRect().width;
    var ropeHeight = rope.getBoundingClientRect().height;
    console.log(ropeWidth, ropeHeight);
    checkCollision(ropeX, ropeY, ropeWidth, ropeHeight);
    // console.log(ropeRect)
}, 10);
=======
    var ropeLeft = rope.getBoundingClientRect().left;
    var ropeRight = rope.getBoundingClientRect().right;
    var ropeBottom = rope.getBoundingClientRect().bottom;
    checkCollision(ropeLeft, ropeRight, ropeBottom);
}, 0.5);
>>>>>>> main
function IdentifyTheStone(item) {
    console.log(item);
    var thisMap = levels.find(function (level) { return level.isActive === true; }).map;
    var thisLevel = getLevelsFromLs().find(function (level) { return level.isActive === true; });
    var currentElem = thisMap.find(function (elem) { return elem.id === item.id; });
    console.log(currentElem);
    thisLevel.score += currentElem.value;
    document.querySelector("#scoreValue").innerHTML = thisLevel.score.toString();
    setLevelsInLs(levels);
    // if(__rockMap1Level1.find(element => element.id == item.id)) {
}
// function removingTheStone(item) {
//   if ()
//     item.style.display = "none"
// }
