var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
//
function getElementToPlayer(item) {
    var playerPosition = {
        x: goldMiner.getBoundingClientRect().left,
        y: goldMiner.getBoundingClientRect().top
    };
    item.style.position = "absolute";
    item.style.top = -10 + "%";
    item.style.left = 50 + "%";
}
function LiftingTheRocks(item, ropeBottom, ropeLeft) {
    item.style.bottom = ropeBottom + "px";
    item.style.left = ropeLeft + "px";
}
function checkCollision(ropeBottom, ropeLeft, ropeRect) {
    var rocks = document.querySelectorAll(".rockElem");
    for (var i = 0; i < rocks.length; i++) {
        var rocklocation = rocks[i].getBoundingClientRect();
        var item = rocks[i];
        if (ropeRect.left <= rocklocation.right &&
            ropeRect.right >= rocklocation.left &&
            ropeRect.top <= rocklocation.bottom &&
            ropeRect.bottom >= rocklocation.top) {
            getElementToPlayer(item);
            rope.style.width = "40px";
            rope.classList.remove("active");
            // console.log(ropeTop, ropeLeft)
        }
    }
}
setInterval(function () {
    var ropeBottom = rope.getBoundingClientRect().bottom;
    var ropeLeft = rope.getBoundingClientRect().left;
    var ropeRect = rope.getBoundingClientRect();
    // console.log(ropeBottom, ropeLeft, ropeRect)
    checkCollision(ropeBottom, ropeLeft, ropeRect);
}, 10);
