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

function getElementToPlayer(item) {
  let playerPosition = {
    x: goldMiner.getBoundingClientRect().left,
    y: rope.getBoundingClientRect().top,
  };

  // item.style.position = "absolute";
  // item.style.top = -50 + "%";
  // item.style.left = 50 + "%";

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
      // rope.style.width = "40px";
      // rope.classList.add("returnRope");
      // setTimeout(() => {}, 7000);
      // rope.classList.remove("active", "returnRope");
      getElementToPlayer(item);
      console.log(item)
    }
  }

  if (
    ropeLeft <= gameBoardLeft ||
    ropeRight >= gameBoardRight ||
    ropeBottom >= gameBoardBottom
  ) {
    rope.style.width = "40px";
    rope.classList.remove("active");
    ropeGetUp(levels)


  } else {
    rope.style.animation = "ropeSideToSide 5s linear infinite; ";
    // rope.classList.remove("returnRope");
  }
}

setInterval(() => {
  const ropeLeft = rope.getBoundingClientRect().left;
  const ropeRight = rope.getBoundingClientRect().right;
  const ropeBottom = rope.getBoundingClientRect().bottom;
  const ropeTop = rope.getBoundingClientRect().top;

  checkCollision(ropeLeft, ropeRight, ropeBottom, ropeTop);
}, 0.5);

function IdentifyTheStone(item) {
  // console.log(item);
  // const levels = getLevelsFromLs();
  const thisLevel = levels.find((level) => level.isActive === true)!;
  const thisMap = thisLevel.map;
  const currentElem = thisMap.find((elem) => elem.id === item.id)!;

  changeCharacter(currentElem);
  ropeGetUp(item, thisLevel, currentElem)

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


function ropeGetUp(item, thisLevel: Level, currentElem: Rock = null) {
  let wait = 3
  // const rockHtml = document.querySelector(`#${currentElem.id}`) as HTMLElement
  liftTheStone(item)
  if (currentElem) {
    wait = currentElem.width
  }

  // rockHtml.style.top = "100%"
  // rockHtml.style.left = "50%"
  // rockHtml.style.transition = wait/2 + "s"
  rope.style.width = "40px";
  rope.style.transition = wait / 2 + "s";
  setTimeout(
    () => {
      rope.style.animationPlayState = "running"
      character.src = "/project/image/gold miner.png"
      addScoreAnimation(currentElem, thisLevel)

    }
    , wait / 2 * getRopeLength()
  )
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
  console.log(currentElem);

  thisLevel.score += currentElem.getScore();
  document.querySelector("#scoreValue")!.innerHTML =
    thisLevel.score.toString();

  addValuePop.innerHTML = currentElem.getScore().toString();
  playPopAnimation();

  setLevelsInLs(levels);
}




function liftTheStone(item) {
  item.classList.add("liftTheStone");
  item.style.animationDuration = "5s"; /*לא למחוק*/

  // const targetRect = goldMiner.getBoundingClientRect();
  // document.documentElement.style.setProperty('--target-top', `${targetRect.top}px`);
  // document.documentElement.style.setProperty('--target-left', `${targetRect.left}px`);

  item.addEventListener('animationend', () => {

    item.style.display = 'none';

  });
}

// function liftTheStone(item, targetElement) {
//   const targetRect = goldMiner.getBoundingClientRect();
//   const gettingUpKeyframes = `
//     @keyframes gettingUp {
//       to {
//         top: ${targetRect.top}px;
//         left: ${targetRect.left}px;
//       }
//     }
//   `;

//   const styleTag = document.createElement('style');
//   styleTag.textContent = gettingUpKeyframes;
//   document.head.appendChild(styleTag);

//   item.style.animation = 'gettingUp 2s linear 1';
//   item.style.animationPlayState = 'running';

//   item.addEventListener('animationend', () => {
//     item.style.display = 'none';
//   });
// }
