
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

const rope = document.querySelector(".header__rope") as HTMLElement;
setInterval(() => {

    const ropeRect = rope.getBoundingClientRect();
    checkCollision(ropeRect);
}, 10);

// בדיקת התנגשות בין האבנים לבין ה-DIV המתארך
function checkCollision(ropeRect) {
    const rocks = document.querySelectorAll(".rockElem");
    for (let i = 0; i < rocks.length; i++) {
        const rocklocation = rocks[i].getBoundingClientRect();
        const item = rocks[i]

        if (
            ropeRect.left < rocklocation.right &&
            ropeRect.right > rocklocation.left &&
            ropeRect.top < rocklocation.bottom &&
            ropeRect.bottom > rocklocation.top
        ) {
            console.log(item);
            LiftingTheRocks(item)
            // setInterval(LiftingTheRocks, 1000);
        }

    }
}

// function LiftingTheRocks(item) {
//     const element = document.querySelector(".rockElem") as HTMLElement;
//     console.log(element);
//     element.style.left = rope.left + "px";
// }