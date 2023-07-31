var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
var gameBoard = document.querySelector(".container");
var gameBoardLeft = gameBoard.getBoundingClientRect().left;
var gameBoardRight = gameBoard.getBoundingClientRect().right;
var gameBoardBottom = gameBoard.getBoundingClientRect().bottom;
var addValuePop = document.querySelector("#addScoreDiv h1");
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
function checkCollision(ropeLeft, ropeRight, ropeBottom, ropeTop) {
    var rocks = document.querySelectorAll(".rockElem");
    for (var i = 0; i < rocks.length; i++) {
        var rockLeft = rocks[i].getBoundingClientRect().left;
        var rockRight = rocks[i].getBoundingClientRect().right;
        var rockTop = rocks[i].getBoundingClientRect().top;
        var rockBottom = rocks[i].getBoundingClientRect().bottom;
        var item = rocks[i];
        if ((ropeTop != ropeRight &&
            ropeRight < rockRight &&
            ropeRight > rockLeft &&
            ropeBottom < rockBottom &&
            ropeBottom > rockTop) ||
            (ropeTop != ropeLeft &&
                ropeLeft < rockRight &&
                ropeLeft > rockLeft &&
                ropeBottom < rockBottom &&
                ropeBottom > rockTop)) {
            rope.style.width = "40px";
            rope.classList.add("returnRope");
            setTimeout(function () { }, 7000);
            rope.classList.remove("active", "returnRope");
            getElementToPlayer(item);
        }
    }
    if (ropeLeft <= gameBoardLeft ||
        ropeRight >= gameBoardRight ||
        ropeBottom >= gameBoardBottom) {
        rope.style.width = "40px";
        rope.classList.add("returnRope");
        rope.classList.remove("active");
    }
    else {
        // rope.style.animation = "ropeSideToSide 5s linear infinite; ";
        rope.classList.remove("returnRope");
    }
}
setInterval(function () {
    var ropeLeft = rope.getBoundingClientRect().left;
    var ropeRight = rope.getBoundingClientRect().right;
    var ropeBottom = rope.getBoundingClientRect().bottom;
    var ropeTop = rope.getBoundingClientRect().top;
    checkCollision(ropeLeft, ropeRight, ropeBottom, ropeTop);
}, 0.5);
function IdentifyTheStone(item) {
    console.log(item);
    // const levels = getLevelsFromLs();
    var thisLevel = levels.find(function (level) { return level.isActive === true; });
    var thisMap = thisLevel.map;
    var currentElem = thisMap.find(function (elem) { return elem.id === item.id; });
    if (currentElem) {
        thisLevel.score += currentElem.getScore();
        document.querySelector("#scoreValue").innerHTML =
            thisLevel.score.toString();
        addValuePop.innerHTML = currentElem.getScore().toString();
        playPopAnimation();
        setLevelsInLs(levels);
    }
}
function resetRope(item) {
    var itemWight = parseInt(item.style.width);
    setInterval(function () {
        if (parseInt(rope.style.width) > 40) {
            rope.style.width = "40px";
            rope.style.transition = "all " + itemWight / 10 + "s";
            rope.style.animationPlayState = "paused";
        }
    }, itemWight);
    rope.style.animationPlayState = "running";
}
function playPopAnimation() {
    addValuePop.classList.add('popMoveAnimation');
    // Remove the animation class after the animation completes
    addValuePop.addEventListener('animationend', function () {
        addValuePop.classList.remove('popMoveAnimation');
    });
}
