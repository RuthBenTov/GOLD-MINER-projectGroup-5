// setInterval(() => {
//     const rope = document.querySelector(".header__rope") as HTMLElement;;
//     const ropeRect = rope.getBoundingClientRect();
//     checkCollision(ropeRect);
// }, 10);
// // בדיקת התנגשות בין האבנים לבין ה-DIV המתארך
// function checkCollision(ropeRect) {
//     const rocks = document.querySelectorAll(".rockElem");
//     rocks.forEach((rock, index) => {
//         const rockRect = rock.getBoundingClientRect();
//         if (
//             ropeRect.left < rockRect.right &&
//             ropeRect.right > rockRect.left &&
//             ropeRect.top < rockRect.bottom &&
//             ropeRect.bottom > rockRect.top
//         ) {
//             console.log(index);
//             // ניתן להוסיף פעולות נוספות שצריך לבצע במידה ויש התנגשות
//         }
//     });
// }
var rope = document.querySelector(".header__rope");
// setInterval(() => {
//     const ropeRect = rope.getBoundingClientRect();
//     checkCollision(ropeRect);
// }, 10);
// // בדיקת התנגשות בין האבנים לבין ה-DIV המתארך
// function checkCollision(ropeRect) {
//     const rocks = document.querySelectorAll(".rockElem");
//     for (let i = 0; i < rocks.length; i++) {
//         const rocklocation = rocks[i].getBoundingClientRect();
//         const item = rocks[i]
//         if (
//             ropeRect.left < rocklocation.right &&
//             ropeRect.right > rocklocation.left &&
//             ropeRect.top < rocklocation.bottom &&
//             ropeRect.bottom > rocklocation.top
//         ) {
//             console.log(item);
//             LiftingTheRocks(item)
//             // setInterval(LiftingTheRocks, 1000);
//         }
//     }
// }
// function LiftingTheRocks(item) {
//     const element = document.querySelector(".rockElem") as HTMLElement;
//     console.log(item);
//     item.style.top = rope.style.top + "px";
// }
var goldMiner = document.querySelector(".header__character");
//
function getElementToPlayer(item) {
    var playerPosition = {
        x: goldMiner.getBoundingClientRect().left,
        y: goldMiner.getBoundingClientRect().top,
        //   };
        //   const offsetY = item.getBoundingClientRect.top - playerPosition.y;
        //   const offsetX = item.getBoundingClientRect.left - playerPosition.x;
        item: item,
        : .style.position = "absolute",
        item: item,
        : .style.top = -15 + "%",
        item: item,
        : .style.left = 40 + "%"
    };
    function LiftingTheRocks(item, ropeBottom, ropeLeft) {
        item.style.bottom = ropeBottom + "px";
        item.style.left = ropeLeft + "px";
    }
    function checkCollision(ropeBottom, ropeLeft, ropeRect) {
        var rocks = document.querySelectorAll(".rockElem");
        for (var i = 0; i < rocks.length; i++) {
            var rocklocation = rocks[i].getBoundingClientRect();
            var item_1 = rocks[i];
            if (ropeRect.left < rocklocation.right &&
                ropeRect.right > rocklocation.left &&
                ropeRect.top < rocklocation.bottom &&
                ropeRect.bottom > rocklocation.top) {
                // console.log(ropeBottom, ropeLeft);
                // LiftingTheRocks(item, ropeBottom, ropeLeft);
                getElementToPlayer(item_1);
                // console.log(ropeTop, ropeLeft)
            }
        }
    }
    function updateTargetPosition() {
        try {
            var sourceRect = bart.getBoundingClientRect();
            var targetRect = shoot.getBoundingClientRect();
            shoot.style.left =
                parseFloat(getComputedStyle(shoot).left) + offsetX + "px";
            shoot.style.top = parseFloat(getComputedStyle(shoot).top) + offsetY + "px";
        }
        catch (error) {
            console.error(error);
        }
    }
    // function checkCollisionOnRopeMovement(ropeBottom, ropeLeft) {
    //     const rope = document.querySelector(".header__rope") as HTMLElement;
    //     // const ropeRect = rope.getBoundingClientRect();
    //     const ropeStyle = getComputedStyle(rope);
    //     const ropeTop = ropeRect.offsetTop;
    //     const ropeLeft = ropeRect.offsetLeft;
    //     checkCollision(ropeRect, ropeTop, ropeLeft);
    //     // console.log(ropeTop, ropeLeft)
    // }
    // הפעלת הפונקציה כל פרק זמן מסוים
    // setInterval(checkCollisionOnRopeMovement, 10);
    setInterval(function () {
        var ropeBottom = rope.getBoundingClientRect().bottom;
        var ropeLeft = rope.getBoundingClientRect().left;
        var ropeRect = rope.getBoundingClientRect();
        // console.log(ropeBottom, ropeLeft, ropeRect)
        checkCollision(ropeBottom, ropeLeft, ropeRect);
        // console.log(ropeRect)
    }, 10);
}
