var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
var gameBoard = document.querySelector(".container");
var gameBoardLeft = gameBoard.getBoundingClientRect().left;
var gameBoardRight = gameBoard.getBoundingClientRect().right;
var gameBoardBottom = gameBoard.getBoundingClientRect().bottom;
function getElementToPlayer(item) {
    console.log("hi");
    var playerPosition = {
        x: goldMiner.getBoundingClientRect().left,
        y: goldMiner.getBoundingClientRect().top
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
            ropeBottom > rockTop)
            ||
                (ropeLeft < rockRight &&
                    ropeLeft > rockLeft &&
                    ropeBottom < rockBottom &&
                    ropeBottom > rockTop)) {
            getElementToPlayer(item);
            rope.style.width = "40px";
            rope.classList.remove("active");
            // removingTheStone(item)
        }
    }
    if (ropeLeft <= gameBoardLeft || ropeRight >= gameBoardRight || ropeBottom >= gameBoardBottom) {
        rope.style.width = "40px";
        rope.classList.remove("active");
    }
}
setInterval(function () {
    var ropeLeft = rope.getBoundingClientRect().left;
    var ropeRight = rope.getBoundingClientRect().right;
    var ropeBottom = rope.getBoundingClientRect().bottom;
    checkCollision(ropeLeft, ropeRight, ropeBottom);
}, 10);
function IdentifyTheStone(item) {
    // console.log(item.width, item.value, item.id, item.alt, item.src)
    console.log(item);
    console.log(item.id);
    console.log(__rockMap1Level1);
    var currentElem = __rockMap1Level1.find(function (elem) { return elem.id === item.id; });
    console.log(currentElem);
    // console.log("value:"+ currentElem.value);
    // console.log("id:" + currentElem.id);
    var money;
    if (item.src == "http://127.0.0.1:5500/project/image/gold.png") {
        console.log("gold");
    }
    if (item.src == "http://127.0.0.1:5500/project/image/stone.png") {
        console.log("stone");
    }
    if (item.src == "http://127.0.0.1:5500/project/image/bag.png") {
        console.log("bag");
    }
    // if(__rockMap1Level1.find(element => element.id == item.id)) {
}
// function removingTheStone(item) {
//   if ()
//     item.style.display = "none"
// }
