var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
function LiftingTheRocks(item) {
    var element = document.querySelector(".rockElem");
    console.log(item);
    item.style.top = rope.style.top + "px";
}
function getElementToPlayer(item) {
    var playerPosition = {
        x: goldMiner.getBoundingClientRect().left,
        y: goldMiner.getBoundingClientRect().top
    };
    //   const offsetY = item.getBoundingClientRect.top - playerPosition.y;
    //   const offsetX = item.getBoundingClientRect.left - playerPosition.x;
    item.style.position = "absolute";
    item.style.top = -50 + "%";
    item.style.left = 50 + "%";
}
function checkCollision(ropeY, ropeX, ropeWidth, ropeHeight) {
    var rocks = document.querySelectorAll(".rockElem");
    for (var i = 0; i < rocks.length; i++) {
        var rockWidth = rocks[i].getBoundingClientRect().width;
        var rockHeight = rocks[i].getBoundingClientRect().height;
        var rockX = rocks[i].getBoundingClientRect().x;
        var rocklY = rocks[i].getBoundingClientRect().y;
        var item = rocks[i];
        if (ropeX < rockX + rockWidth &&
            ropeX + ropeWidth > rockX &&
            rocklY < ropeY + rockHeight &&
            rocklY + ropeHeight > ropeY) {
            // console.log(ropeBottom, ropeLeft);
            // LiftingTheRocks(item, ropeBottom, ropeLeft);
            getElementToPlayer(item);
            rope.style.width = "40px";
            rope.classList.remove("active");
            // console.log(ropeTop, ropeLeft)
        }
    }
}
setInterval(function () {
    var ropeX = rope.getBoundingClientRect().x;
    var ropeY = rope.getBoundingClientRect().y;
    var ropeWidth = rope.getBoundingClientRect().width;
    var ropeHeight = rope.getBoundingClientRect().height;
    // console.log(ropeBottom, ropeLeft, ropeRect)
    checkCollision(ropeX, ropeY, ropeWidth, ropeHeight);
    // console.log(ropeRect)
}, 10);
// first.x < second.x + second.width &&
//   first.x + first.width > second.x &&
//   first.y < second.y + second.height &&
//   first.y + first.height > second.y
