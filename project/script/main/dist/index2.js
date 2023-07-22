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
setInterval(function () {
    var ropeRect = rope.getBoundingClientRect();
    checkCollision(ropeRect);
}, 10);
// בדיקת התנגשות בין האבנים לבין ה-DIV המתארך
function checkCollision(ropeRect) {
    var rocks = document.querySelectorAll(".rockElem");
    for (var i = 0; i < rocks.length; i++) {
        var rocklocation = rocks[i].getBoundingClientRect();
        var item = rocks[i];
        if (ropeRect.left < rocklocation.right &&
            ropeRect.right > rocklocation.left &&
            ropeRect.top < rocklocation.bottom &&
            ropeRect.bottom > rocklocation.top) {
            console.log(item);
            LiftingTheRocks(item);
            // setInterval(LiftingTheRocks, 1000);
        }
    }
}
// function LiftingTheRocks(item) {
//     const element = document.querySelector(".rockElem") as HTMLElement;
//     console.log(element);
//     element.style.left = rope.left + "px";
// }
