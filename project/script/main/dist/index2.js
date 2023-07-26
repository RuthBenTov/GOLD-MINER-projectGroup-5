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
function checkCollision(ropeX, ropeY, ropeWidth, ropeHeight) {
    var rocks = document.querySelectorAll(".rockElem");
    for (var i = 0; i < rocks.length; i++) {
        var rockX = rocks[i].getBoundingClientRect().x;
        var rockY = rocks[i].getBoundingClientRect().y;
        var rockHeight = rocks[i].getBoundingClientRect().height;
        var rockWidth = rocks[i].getBoundingClientRect().width;
        var item = rocks[i];
        if (ropeX < rockX + rockWidth &&
            ropeX + ropeWidth > rockX &&
            ropeY < rockY + rockHeight &&
            ropeY + ropeHeight > rockY) {
            console.log(item);
            getElementToPlayer(item);
            rope.style.width = "40px";
            rope.classList.remove("active");
            // IdentifyTheStone(item)
            // removingTheStone(item)
        }
    }
}
setInterval(function () {
    var ropeX = rope.getBoundingClientRect().x;
    var ropeY = rope.getBoundingClientRect().y;
    var ropeWidth = rope.getBoundingClientRect().width;
    var ropeHeight = rope.getBoundingClientRect().height;
    console.log(ropeWidth, ropeHeight);
    checkCollision(ropeX, ropeY, ropeWidth, ropeHeight);
    // console.log(ropeRect)
}, 10);
function IdentifyTheStone(item) {
    // console.log(item.width, item.value, item.id, item.alt, item.src)
    // console.log(item.src)
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
}
// function removingTheStone(item) {
//   if ()
//     item.style.display = "none"
// }
