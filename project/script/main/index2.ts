const rope = document.querySelector(".header__rope") as HTMLElement;
const goldMiner = document.querySelector(
  ".header__character",
) as HTMLDivElement;
const gameBoard = document.querySelector(".container") as HTMLDivElement;
const gameBoardLeft = gameBoard.getBoundingClientRect().left;
const gameBoardRight = gameBoard.getBoundingClientRect().right;
const gameBoardBottom = gameBoard.getBoundingClientRect().bottom;

function getElementToPlayer(item) {
  let playerPosition = {
    x: goldMiner.getBoundingClientRect().left,
    y: rope.getBoundingClientRect().top,
  };
  //   const offsetY = item.getBoundingClientRect.top - playerPosition.y;
  //   const offsetX = item.getBoundingClientRect.left - playerPosition.x;
  item.style.position = "absolute";
  item.style.top = -50 + "%";
  item.style.left = 50 + "%";

  IdentifyTheStone(item);
}

function checkCollision(ropeLeft, ropeRight, ropeBottom) {
  const rocks = document.querySelectorAll(".rockElem");

  for (let i = 0; i < rocks.length; i++) {
    const rockLeft = rocks[i].getBoundingClientRect().left;
    const rockRight = rocks[i].getBoundingClientRect().right;
    const rockTop = rocks[i].getBoundingClientRect().top;
    const rockBottom = rocks[i].getBoundingClientRect().bottom;
    const item = rocks[i];

    if (
      (ropeRight < rockRight &&
        ropeRight > rockLeft &&
        ropeBottom < rockBottom &&
        ropeBottom > rockTop) ||
      (ropeLeft < rockRight &&
        ropeLeft > rockLeft &&
        ropeBottom < rockBottom &&
        ropeBottom > rockTop)
    ) {
      rope.style.width = "40px";
      rope.classList.remove("active");
      getElementToPlayer(item);
      // removingTheStone(item)
    }
  }
<<<<<<< HEAD
}
setInterval(() => {
  const ropeX = rope.getBoundingClientRect().x;
  const ropeY = rope.getBoundingClientRect().y;
  const ropeWidth = rope.getBoundingClientRect().width;
  const ropeHeight = rope.getBoundingClientRect().height;
  
  console.log(ropeWidth, ropeHeight);
  checkCollision(ropeX, ropeY, ropeWidth, ropeHeight);
=======
>>>>>>> main

  if (
    ropeLeft <= gameBoardLeft ||
    ropeRight >= gameBoardRight ||
    ropeBottom >= gameBoardBottom
  ) {
    rope.style.width = "40px";
    rope.classList.remove("active");
  }
}

setInterval(() => {
  const ropeLeft = rope.getBoundingClientRect().left;
  const ropeRight = rope.getBoundingClientRect().right;
  const ropeBottom = rope.getBoundingClientRect().bottom;

  checkCollision(ropeLeft, ropeRight, ropeBottom);
}, 0.5);

function IdentifyTheStone(item) {
  console.log(item);

  const thisMap = levels.find((level) => level.isActive === true)!.map;
  const thisLevel = getLevelsFromLs().find((level) => level.isActive === true)!;
  const currentElem = thisMap.find((elem) => elem.id === item.id)!;
  console.log(currentElem);

  thisLevel.score += currentElem.value;
  document.querySelector("#scoreValue")!.innerHTML = thisLevel.score.toString();

  setLevelsInLs(levels);
  // if(__rockMap1Level1.find(element => element.id == item.id)) {
}

// function removingTheStone(item) {
//   if ()
//     item.style.display = "none"
// }
