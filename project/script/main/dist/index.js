var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
//-----------------------------Event Handlers-----------------------------
document.addEventListener("keydown", handlePress);
function handlePress(ev) {
    if (ev.key === "ArrowDown") {
        rope.style.width = "1000px";
        rope.style.transition = "4s";
        rope.style.animationPlayState = "paused";
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
    else if (ev.key != "ArrowRight" &&
        ev.key != "ArrowDown" &&
        ev.key != "ArrowLeft") {
        rope.style.width = "40px";
        rope.classList.remove("active");
    }
}
//------------------------------------------Timer------------------------------------------
// timer
var timer = document.querySelector(".head__rightSide__timer #timerValue");
var timeSecond = 80;
displayTime(timeSecond);
var countDown = setInterval(function () {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond <= 0) {
        clearInterval(countDown);
        alert("game over");
        // window.location.href = "/project/view/gameOver.html";
        checkPassLevel(levels.find(function (l) { return l.isActive; }).score);
    }
}, 1000);
function displayTime(second) {
    var min = Math.floor(second / 60);
    var sec = Math.floor(second % 60);
    if (timer) {
        timer.innerHTML = "" + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
    }
}
// -------------------------Get items from store page to the current page---------------------
document.addEventListener("DOMContentLoaded", function () {
    // Get the stored images inforamation from localStorage
    var clickedImgSrc = localStorage.getItem("clickedImgSrc");
    if (clickedImgSrc) {
        // Creating an image ELement
        var imgElement = document.createElement("img");
        imgElement.src = clickedImgSrc;
        // Append the image element to the header content
        var containerHeader = document.querySelector(".container__header__itemsFromStore");
        if (containerHeader) {
            containerHeader.append(imgElement);
        }
        // // Clear the stored data to prevent showing the same image again
        // localStorage.removeItem("clickedImgSrc");
    }
});
