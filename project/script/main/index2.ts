const rope = document.querySelector(".header__rope") as HTMLElement;
const goldMiner = document.querySelector(
  ".header__character",
) as HTMLDivElement;
const rocks = document.querySelectorAll(".rockElem") as NodeListOf<Element>;
const gameBoard = document.querySelector(".container") as HTMLDivElement;
const gameBoardLeft = gameBoard.getBoundingClientRect().left;
const gameBoardRight = gameBoard.getBoundingClientRect().right;
const gameBoardBottom = gameBoard.getBoundingClientRect().bottom;
const addValuePop = document.querySelector(
  "#addScoreDiv h1",
) as HTMLHeadElement;
const character = document.querySelector(
  ".header__character img",
) as HTMLImageElement;

// soundEffect-----------------------------------
const soundEffectStone = new Audio(
  "/project/image/soundsEffect/catchStone.mp3",
);
const soundEffectGold = new Audio("/project/image/soundsEffect/catchGold.mp3");
const soundEffectRope = new Audio(
  "/project/image/soundsEffect/ropeRolling.mp3",
);
const soundEffectGaming = new Audio(
  "/project/image/soundsEffect/musicBackground.mp3",
);

document.addEventListener("DOMContentLoaded", () => {
  soundEffectGaming.play();
});

function getElementToPlayer(item) {
  IdentifyTheStone(item);
}

function checkCollision(ropeLeft, ropeRight, ropeBottom, ropeTop) {
  const rocks = document.querySelectorAll(".rockElem");

  for (let i = 0; i < rocks.length; i++) {
    const rockLeft = rocks[i].getBoundingClientRect().left;
    const rockRight = rocks[i].getBoundingClientRect().right;
    const rockTop = rocks[i].getBoundingClientRect().top;
    const rockBottom = rocks[i].getBoundingClientRect().bottom;
    const item = rocks[i];

    if (
      (ropeTop != ropeRight &&
        ropeRight < rockRight &&
        ropeRight > rockLeft &&
        ropeBottom < rockBottom &&
        ropeBottom > rockTop) ||
      (ropeTop != ropeLeft &&
        ropeLeft < rockRight &&
        ropeLeft > rockLeft &&
        ropeBottom < rockBottom &&
        ropeBottom > rockTop)
    ) {
      clearInterval(checkCollisionInterval);
      getElementToPlayer(item);
      liftTheStone(item);
    }
  }

  if (
    ropeLeft <= gameBoardLeft ||
    ropeRight >= gameBoardRight ||
    ropeRight <= gameBoardBottom ||
    ropeBottom >= gameBoardBottom
  ) {
    // clearInterval(checkCollisionInterval)

    rope.style.width = "40px";
    rope.classList.remove("active");
    ropeGetUp(levels);
  } else {
    rope.style.animation = "ropeSideToSide 5s linear infinite; ";
    // rope.classList.remove("returnRope");
  }
}

let checkCollisionInterval;

function startCollisionInterval() {
  checkCollisionInterval = setInterval(() => {
    const ropeLeft = rope.getBoundingClientRect().left;
    const ropeRight = rope.getBoundingClientRect().right;
    const ropeBottom = rope.getBoundingClientRect().bottom;
    const ropeTop = rope.getBoundingClientRect().top;

    checkCollision(ropeLeft, ropeRight, ropeBottom, ropeTop);
  }, 0.5);
}

function IdentifyTheStone(item) {
  const thisLevel = levels.find((level) => level.isActive === true)!;
  const thisMap = thisLevel.map;
  const currentElem = thisMap.find((elem) => elem.id === item.id)!;

  changeCharacter(currentElem);
  ropeGetUp(thisLevel, currentElem);

  //-----------------------------------------------------------------------------
}

function playPopAnimation() {
  addValuePop.classList.add("popMoveAnimation");

  addValuePop.addEventListener("animationend", function () {
    addValuePop.classList.remove("popMoveAnimation");
  });
}

function changeCharacter(currentElem: Rock) {
  if (currentElem.type === "gold" || currentElem.type === "bag") {
    character.src = "/project/image/happy-gold miner.png";
  }

  if (currentElem.type === "stone") {
    character.src = "/project/image/effort- gold miner.png";
  }
}

function ropeGetUp(thisLevel: Level, currentElem: Rock = null) {
  let wait = 5;
  // const rockHtml = document.querySelector(`#${currentElem.id}`) as HTMLElement
  if (currentElem) {
    wait = currentElem.width;
  }

  rope.style.width = "40px";
  rope.style.transition = wait / 2 + "s";

  document.removeEventListener("keydown", handlePress)

  soundEffectRope.play();
  setTimeout(() => {
    rope.style.animationPlayState = "running";
    character.src = "/project/image/gold miner.png";
    addScoreAnimation(currentElem, thisLevel);
    startCollisionInterval();
    soundEffectRope.pause();
    playSoundEffect(currentElem);
    document.addEventListenerEventListener("keydown", handlePress)
  }, (wait / 2) * getRopeLength());
}

function getRopeLength() {
  const ropeLeft = rope.getBoundingClientRect().left;
  const ropeRight = rope.getBoundingClientRect().right;
  const ropeBottom = rope.getBoundingClientRect().bottom;
  const ropeTop = rope.getBoundingClientRect().top;

  return Math.round(
    Math.sqrt(
      Math.pow(ropeTop - ropeBottom, 2) + Math.pow(ropeRight - ropeLeft, 2),
    ),
  );
}

rope.addEventListener("animationend", handleAnimationEnd);

function handleAnimationEnd(event) {
  console.dir(event);
}

function addScoreAnimation(currentElem: Rock, thisLevel: Level) {
  console.log("currentElem");

  thisLevel.score += currentElem.getScore();
  document.querySelector("#scoreValue")!.innerHTML = thisLevel.score.toString();

  addValuePop.innerHTML = currentElem.getScore().toString();
  playPopAnimation();

  setLevelsInLs(levels);
}

function liftTheStone(item) {
  let timeToTransition = item.width;
  item.style.top = "0px";
  item.style.left = `calc(48% - ${timeToTransition / 2}px)`;
  item.style.transition = timeToTransition / 10 + "s"; /*לא למחוק*/

  setTimeout(() => {
    item.style.display = "none";
  }, (timeToTransition / 2) * getRopeLength());
}

// function liftTheStone(item) {
//   // item.classList.add("liftTheStone");

//  let timeToDuration = item.width/getRopeLength()

//  item.style.top = "0%";
//  item.style.left ='calc (50% - ${item.width}px)';
//   item.style.animationDuration = timeToDuration/2 +"s"; /*לא למחוק*/

//   // const targetRect = goldMiner.getBoundingClientRect();
//   // document.documentElement.style.setProperty('--target-top', `${targetRect.top}px`);
//   // document.documentElement.style.setProperty('--target-left', `${targetRect.left}px`);

//   item.addEventListener('animationend', () => {

//     item.style.display = 'none';

//   });
// }

startCollisionInterval();

function playSoundEffect(item) {
  if (item.type === "gold") {
    soundEffectGold.play();
  }
  if (item.type === "stone") {
    soundEffectStone.play();
  }
  if (item.type === "bag") {
    soundEffectGold.play();
  }
}

soundEffectGaming.addEventListener("ended", () => soundEffectGaming.play());
