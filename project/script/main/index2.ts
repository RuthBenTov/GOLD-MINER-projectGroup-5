const rope = document.querySelector(".header__rope") as HTMLElement;
const goldMiner = document.querySelector(
  ".header__character",
) as HTMLDivElement;
const gameBoard = document.querySelector(".container") as HTMLDivElement;
const gameBoardLeft = gameBoard.getBoundingClientRect().left;
const gameBoardRight = gameBoard.getBoundingClientRect().right;
const gameBoardBottom = gameBoard.getBoundingClientRect().bottom;
const addValuePop =document.querySelector("#addScoreDiv h1") as HTMLHeadElement;

function getElementToPlayer(item) {
  let playerPosition = {
    x: goldMiner.getBoundingClientRect().left,
    y: rope.getBoundingClientRect().top,
  };

  item.style.position = "absolute";
  item.style.top = -50 + "%";
  item.style.left = 50 + "%";

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
      rope.style.width = "40px";
      rope.classList.add("returnRope");
      setTimeout(() => {}, 7000);
      rope.classList.remove("active", "returnRope");
      getElementToPlayer(item);
    }
  }

  if (
    ropeLeft <= gameBoardLeft ||
    ropeRight >= gameBoardRight ||
    ropeBottom >= gameBoardBottom
  ) {
    rope.style.width = "40px";
    rope.classList.add("returnRope");
    rope.classList.remove("active");
  } else {
    // rope.style.animation = "ropeSideToSide 5s linear infinite; ";
    rope.classList.remove("returnRope");
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
  console.log(item);
  // const levels = getLevelsFromLs();
  const thisLevel = levels.find((level) => level.isActive === true)!;
  const thisMap = thisLevel.map;
  const currentElem = thisMap.find((elem) => elem.id === item.id)!;
  
  if (currentElem) {
    thisLevel.score += currentElem.getScore();
    document.querySelector("#scoreValue")!.innerHTML =
      thisLevel.score.toString();
  
      addValuePop.innerHTML = currentElem.getScore().toString();
      playPopAnimation()
  
    setLevelsInLs(levels);
  }
}

function resetRope(item) {
  const itemWight = parseInt(item.style.width);
  setInterval(() => {
    if (parseInt(rope.style.width) > 40) {
      rope.style.width = "40px";
      rope.style.transition = `all ${itemWight / 10}s`;
      rope.style.animationPlayState = "paused";
    }
  }, itemWight);
  rope.style.animationPlayState = "running";
}



function playPopAnimation() {
  addValuePop.classList.add('popMoveAnimation');
  // Remove the animation class after the animation completes
  addValuePop.addEventListener('animationend', function() {
    addValuePop.classList.remove('popMoveAnimation');
  });
}
