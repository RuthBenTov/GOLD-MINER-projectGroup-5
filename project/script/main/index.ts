


const rope = document.querySelector(".header__rope") as HTMLDivElement;
const goldMiner = document.querySelector(
  ".header__character",
) as HTMLDivElement;

//-----------------------------Event Handlers-----------------------------
document.addEventListener("keydown", handlePress);

function handlePress(ev: any) {
  if (ev.key === "ArrowDown") {
    rope.style.width = "1000px";
    rope.style.transition = "4s"
    rope.style.animationPlayState = "paused"
    rope.classList.add("active");
  }
  // if (ev.key === "ArrowLeft") {
  //   if (Number(goldMiner.style.left.replace("px", "")) > -100)
  //     goldMiner.style.left =
  //       (Number(goldMiner.style.left.replace("px", "")) - 5).toString() + "px";
  // }
  // if (ev.key === "ArrowRight") {
  //   if (Number(goldMiner.style.left.replace("px", "")) < 100)
  //     goldMiner.style.left =
  //       (Number(goldMiner.style.left.replace("px", "")) + 5).toString() + "px";
  // } 
  else if (
    ev.key != "ArrowRight" &&
    ev.key != "ArrowDown" &&
    ev.key != "ArrowLeft"
  ) {
    rope.style.width = "40px";
    rope.classList.remove("active");
}


//------------------------------------------Timer------------------------------------------

// timer
const timer = document.querySelector(".head__rightSide__timer #timerValue");
let timeSecond = 80;

displayTime(timeSecond);
const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0) {
    clearInterval(countDown);
    alert("game over");
    // window.location.href = "/project/view/gameOver.html";
    checkPassLevel(levels.find(l => l.isActive)!.score)
  }
}, 1000);

function displayTime(second: number) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  if (timer) {
    timer.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""
      }${sec}`;
  }
}


// -------------------------Get items from store page to the current page---------------------

document.addEventListener("DOMContentLoaded", () => {
  // Get the stored images inforamation from localStorage
  const clickedImgSrcDynamite = localStorage.getItem("clickedImgSrcDynamite");
  const additionalTimeString = localStorage.getItem("additionalTime");

  // Convert the additionalTimeString to a number
  const additionalTime = parseInt(additionalTimeString || "0");

  if (clickedImgSrcDynamite) {
    // Creating an image ELement
    const imgElement = document.createElement("img");
    imgElement.src = clickedImgSrcDynamite;
    // Append the image element to the header content
    const containerHeader = document.querySelector(".container__header__itemsFromStore") as HTMLDivElement;
    if (containerHeader) {
      containerHeader.append(imgElement);
    }

    // // Clear the stored data to prevent showing the same image again
    localStorage.removeItem("clickedImgSrcDynamite");
  }

  if (additionalTime) {
    // Add more 10 sec to the game
    timeSecond += additionalTime;
    displayTime(timeSecond);


    // // Clear the stored data to prevent showing the extra 10sec to the timer again
    localStorage.removeItem("additionalTime");
  }
});

// timeImg.addEventListener("click", ()=> {
// })

function checkPassLevelFromExitBtn() {
  checkPassLevel(levels.find(l => l.isActive)!.score)
}