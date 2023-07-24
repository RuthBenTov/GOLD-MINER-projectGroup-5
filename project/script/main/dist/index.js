var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
//--------------------------------------------key press------------------------------------------------------------------------
document.addEventListener("keydown", handlePress);
function handlePress(ev) {
    if (ev.key === "ArrowDown") {
        rope.style.width = "400px";
        rope.classList.add("active");
    }
    if (ev.key === "ArrowLeft") {
        if (Number(goldMiner.style.left.replace("px", "")) > -100)
            goldMiner.style.left =
                (Number(goldMiner.style.left.replace("px", "")) - 5).toString() + "px";
    }
    if (ev.key === "ArrowRight") {
        if (Number(goldMiner.style.left.replace("px", "")) < 100)
            goldMiner.style.left =
                (Number(goldMiner.style.left.replace("px", "")) + 5).toString() + "px";
    }
    else if (ev.key != "ArrowRight" && ev.key != "ArrowDown" && ev.key != "ArrowLeft") {
        rope.style.width = "40px";
        rope.classList.remove("active");
    }
}
// -------------------------------------timer-------------------------------------------------------------------------------------------
var timer = document.querySelector(".head__rightSide__timer #timerValue");
var timeSecond = 8000;
displayTime(timeSecond);
var countDown = setInterval(function () {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond <= 0) {
        clearInterval(countDown);
        alert("game over");
        // window.location.href = "/project/view/gameOver.html";
    }
}, 1000);
function displayTime(second) {
    var min = Math.floor(second / 60);
    var sec = Math.floor(second % 60);
    if (timer) {
        timer.innerHTML = "" + (min < 10 ? '0' : '') + min + ":" + (sec < 10 ? '0' : '') + sec;
    }
}
