const rope = document.querySelector(".header__rope") as HTMLElement;
const goldMiner = document.querySelector(
  ".header__character",
) as HTMLDivElement;

function LiftingTheRocks(item) {
  const element = document.querySelector(".rockElem") as HTMLElement;
  console.log(item);
  item.style.top = rope.style.top + "px";
}

function getElementToPlayer(item) {
  let playerPosition = {
    x: goldMiner.getBoundingClientRect().left,
    y: goldMiner.getBoundingClientRect().top,
  };
  //   const offsetY = item.getBoundingClientRect.top - playerPosition.y;
  //   const offsetX = item.getBoundingClientRect.left - playerPosition.x;
  item.style.position = "absolute";
  item.style.top = -50 + "%";
  item.style.left = 50 + "%";
}

function checkCollision(ropeX, ropeY, ropeWidth, ropeHeight) {
  const rocks = document.querySelectorAll(".rockElem");

  for (let i = 0; i < rocks.length; i++) {
    const rockX = rocks[i].getBoundingClientRect().x;
    const rockY = rocks[i].getBoundingClientRect().y;
    const rockHeight = rocks[i].getBoundingClientRect().height;
    const rockWidth = rocks[i].getBoundingClientRect().width;
    const item = rocks[i];

    if (
      ropeX < rockX + rockWidth &&
      ropeX + ropeWidth > rockX &&
      ropeY < rockY + rockHeight &&
      ropeY + ropeHeight > rockY
    ) {
      console.log(item);
      getElementToPlayer(item);
      rope.style.width = "40px";
      rope.classList.remove("active");
      // IdentifyTheStone(item)
      // removingTheStone(item)
    }
  }
}
setInterval(() => {
  const ropeX = rope.getBoundingClientRect().x;
  const ropeY = rope.getBoundingClientRect().y;
  const ropeWidth = rope.getBoundingClientRect().width;
  const ropeHeight = rope.getBoundingClientRect().height;
  
  console.log(ropeWidth, ropeHeight);
  checkCollision(ropeX, ropeY, ropeWidth, ropeHeight);

  // console.log(ropeRect)
}, 10);

function IdentifyTheStone(item) {
  // console.log(item.width, item.value, item.id, item.alt, item.src)
  // console.log(item.src)
  let money: number;
  if (item.src == "http://127.0.0.1:5500/project/image/gold.png") {
    console.log("gold");
  }
  if (item.src == "http://127.0.0.1:5500/project/image/stone.png") {
    console.log("stone");
  }
  if (item.src == "http://127.0.0.1:5500/project/image/bag.png") {
    console.log("bag");
  }
}

// function removingTheStone(item) {
//   if ()
//     item.style.display = "none"
// }
