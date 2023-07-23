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
function LiftingTheRocks(item, ropeBottom, ropeLeft) {
    item.style.bottom = ropeBottom + "px";
    item.style.left = ropeLeft + "px";
}
function checkCollision(ropeBottom, ropeLeft, ropeRect) {
    var rocks = document.querySelectorAll(".rockElem");
    for (var i = 0; i < rocks.length; i++) {
        var rocklocation = rocks[i].getBoundingClientRect();
        var item = rocks[i];
        if (ropeRect.left < rocklocation.right &&
            ropeRect.right > rocklocation.left &&
            ropeRect.top < rocklocation.bottom &&
            ropeRect.bottom > rocklocation.top) {
            // console.log(ropeBottom, ropeLeft);
            LiftingTheRocks(item, ropeBottom, ropeLeft);
            // console.log(ropeTop, ropeLeft)
        }
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
