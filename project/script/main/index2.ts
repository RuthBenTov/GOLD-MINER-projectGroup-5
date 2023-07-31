const rope = document.querySelector(".header__rope") as HTMLElement;
const goldMiner = document.querySelector(
  ".header__character",
) as HTMLDivElement;
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
      // rope.style.width = "40px";
      // rope.classList.add("returnRope");
      // setTimeout(() => {}, 7000);
      // rope.classList.remove("active", "returnRope");
      getElementToPlayer(item);
    }
  }

  if (
    ropeLeft <= gameBoardLeft ||
    ropeRight >= gameBoardRight ||
    ropeBottom >= gameBoardBottom
  ) {
    rope.style.width = "40px";
    rope.classList.remove("active");
    ropeGetUp()

    
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
  console.log(item);
  // const levels = getLevelsFromLs();
  const thisLevel = levels.find((level) => level.isActive === true)!;
  const thisMap = thisLevel.map;
  const currentElem = thisMap.find((elem) => elem.id === item.id)!;

  changeCharacter(currentElem);
  // ropeGetUp(currentElem)
  ropeGetUp(currentElem)

  if (currentElem) {
    thisLevel.score += currentElem.getScore();
    document.querySelector("#scoreValue")!.innerHTML =
      thisLevel.score.toString();

    addValuePop.innerHTML = currentElem.getScore().toString();
    playPopAnimation();

    setLevelsInLs(levels);
  }
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

  //reset ------------------------------------------------------------------------????
}
function ropeGetUp(currentElem:Rock = null) {
  let wait = 3
  if(currentElem){
    wait = currentElem.width
  }
  console.log("get up!!");
  rope.style.width = "40px";
  rope.style.transition = wait/2 + "s"; 
  setTimeout(
  ()=> { rope.style.animationPlayState = "running"}
    , wait/2*getRopeLength()
  )
}

  // rope.classList.add("returnRope")

  //   var id = null;
  //   var width = getRopeLength();

  //  rope.style.transition = "0s"
  //   clearInterval(id);
  //   id = setInterval(move, 30);

  //   function move() {
  //     if (width  <= 40) {
  //       clearInterval(id);
  //       // console.log("finished!");
  //       callback(); // Call the callback function once the animation is finished.
  //     } else {
  //       width--;
  //       rope.style.width = width + 'px';
  //     }
  //   }
}


// Your animation code goes here.
// This code will only be executed after the "finished!" message is printed.

// function ropeGetUp(currentElem: Rock){

//   console.log("get up!!");

//   var id = null;
//     var width = getRopeLength()
//     clearInterval(id);
//     id = setInterval(move, 10);
//     function move() {
//       if (width  <= 40) {
//         clearInterval(id);
//         console.log("finished!");
//       } else {
//         width --;
//         rope.style.width = width + 'px';
//       }
//       // rope.classList.remove("active")
//     }
// }

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
