var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
var rocks = document.querySelectorAll(".rockElem");
var gameBoard = document.querySelector(".container");
var gameBoardLeft = gameBoard.getBoundingClientRect().left;
var gameBoardRight = gameBoard.getBoundingClientRect().right;
var gameBoardBottom = gameBoard.getBoundingClientRect().bottom;
var addValuePop = document.querySelector("#addScoreDiv h1");
var character = document.querySelector(".header__character img");
function getElementToPlayer(item) {
    var playerPosition = {
        x: goldMiner.getBoundingClientRect().left,
        y: rope.getBoundingClientRect().top
    };
    // item.style.position = "absolute";
    // item.style.top = -50 + "%";
    // item.style.left = 50 + "%";
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
            // rope.style.width = "40px";
            // rope.classList.add("returnRope");
            // setTimeout(() => {}, 7000);
            // rope.classList.remove("active", "returnRope");
            getElementToPlayer(item);
            console.log(item);
        }
    }
    if (ropeLeft <= gameBoardLeft ||
        ropeRight >= gameBoardRight ||
        ropeBottom >= gameBoardBottom) {
        rope.style.width = "40px";
        rope.classList.remove("active");
        ropeGetUp(levels);
    }
    else {
        rope.style.animation = "ropeSideToSide 5s linear infinite; ";
        // rope.classList.remove("returnRope");
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
    changeCharacter(currentElem);
    ropeGetUp(item, thisLevel, currentElem);
    //-----------------------------------------------------------------------------
}
function playPopAnimation() {
    addValuePop.classList.add("popMoveAnimation");
    addValuePop.addEventListener("animationend", function () {
        addValuePop.classList.remove("popMoveAnimation");
    });
}
function changeCharacter(currentElem) {
    if (currentElem.type === "gold" || currentElem.type === "bag") {
        character.src = "/project/image/happy-gold miner.png";
    }
    if (currentElem.type === "stone") {
        character.src = "/project/image/effort- gold miner.png";
    }
}
function ropeGetUp(item, thisLevel, currentElem) {
    if (currentElem === void 0) { currentElem = null; }
    var wait = 3;
    // const rockHtml = document.querySelector(`#${currentElem.id}`) as HTMLElement
    liftTheStone(item);
    if (currentElem) {
        wait = currentElem.width;
    }
    // rockHtml.style.top = "100%"
    // rockHtml.style.left = "50%"
    // rockHtml.style.transition = wait/2 + "s"
    rope.style.width = "40px";
    rope.style.transition = wait / 2 + "s";
    setTimeout(function () {
        rope.style.animationPlayState = "running";
        character.src = "/project/image/gold miner.png";
        addScoreAnimation(currentElem, thisLevel);
    }, wait / 2 * getRopeLength());
}
function getRopeLength() {
    var ropeLeft = rope.getBoundingClientRect().left;
    var ropeRight = rope.getBoundingClientRect().right;
    var ropeBottom = rope.getBoundingClientRect().bottom;
    var ropeTop = rope.getBoundingClientRect().top;
    return Math.round(Math.sqrt(Math.pow(ropeTop - ropeBottom, 2) + Math.pow(ropeRight - ropeLeft, 2)));
}
rope.addEventListener("animationend", handleAnimationEnd);
function handleAnimationEnd(event) {
    console.dir(event);
}
function addScoreAnimation(currentElem, thisLevel) {
    console.log(currentElem);
    thisLevel.score += currentElem.getScore();
    document.querySelector("#scoreValue").innerHTML =
        thisLevel.score.toString();
    addValuePop.innerHTML = currentElem.getScore().toString();
    playPopAnimation();
    setLevelsInLs(levels);
}
function liftTheStone(item) {
    item.classList.add("liftTheStone");
    item.style.transition = "40s";
    console.log(item.id);
    item.addEventListener("animationend", function () {
        addValuePop.classList.remove("liftTheStone");
        item.classList.add("none");
    });
}
