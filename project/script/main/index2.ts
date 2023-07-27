const rope = document.querySelector(".header__rope") as HTMLElement;
const goldMiner = document.querySelector(
  ".header__character",
) as HTMLDivElement;

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
        ropeBottom > rockTop)||
        
      (ropeLeft < rockRight &&
        ropeLeft > rockLeft &&
        ropeBottom < rockBottom &&
        ropeBottom > rockTop)
    ){
        console.log("collision");
        
      getElementToPlayer(item);

      rope.style.width = "40px";
      rope.classList.remove("active");
      IdentifyTheStone(item);
      // removingTheStone(item)
    }
  }
}

setInterval(() => {
  const ropeLeft = rope.getBoundingClientRect().left;
  const ropeRight = rope.getBoundingClientRect().right;
  const ropeBottom = rope.getBoundingClientRect().bottom;
  //   const ropeWidth = rope.getBoundingClientRect().width;
  //   const ropeHeight = rope.getBoundingClientRect().height;
  console.log(ropeLeft, ropeRight, ropeBottom);
  checkCollision(ropeLeft, ropeRight, ropeBottom);

  // console.log(ropeRect)
}, 50);

function IdentifyTheStone(item) {
  // console.log(item.width, item.value, item.id, item.alt, item.src)
  console.log(item);
  console.log(item.id);
  console.log(__rockMap1Level1);

  const currentElem = __rockMap1Level1.find((elem) => elem.id === item.id)!;
  console.log(currentElem);
  // console.log("value:"+ currentElem.value);
  // console.log("id:" + currentElem.id);

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

  // if(__rockMap1Level1.find(element => element.id == item.id)) {
}

// function removingTheStone(item) {
//   if ()
//     item.style.display = "none"
// }
