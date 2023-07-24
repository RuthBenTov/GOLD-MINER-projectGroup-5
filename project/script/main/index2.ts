
const rope = document.querySelector(".header__rope") as HTMLElement;
const goldMiner = document.querySelector(".header__character") as HTMLDivElement;

function LiftingTheRocks(item) {
    const element = document.querySelector(".rockElem") as HTMLElement;
    console.log(item);
    item.style.top = rope.style.top + "5px";
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
  item.style.left = 50+"%";
}

function checkCollision(ropeBottom, ropeLeft, ropeRect) {
  const rocks = document.querySelectorAll(".rockElem");

  for (let i = 0; i < rocks.length; i++) {
    const rocklocation = rocks[i].getBoundingClientRect();
    const item = rocks[i];

    if (
      ropeRect.left <= rocklocation.right &&
      ropeRect.right >= rocklocation.left &&
      ropeRect.top <= rocklocation.bottom &&
      ropeRect.bottom >= rocklocation.top
    ) {
      getElementToPlayer(item);
      rope.style.width = "40px";
      rope.classList.remove("active");

    }
  }
}
setInterval(() => {
  const ropeBottom = rope.getBoundingClientRect().bottom;
  const ropeLeft = rope.getBoundingClientRect().left;
  const ropeRect = rope.getBoundingClientRect();
  // console.log(ropeBottom, ropeLeft, ropeRect)
  checkCollision(ropeBottom, ropeLeft, ropeRect);

  // console.log(ropeRect)
}, 10);



//----------------------------------------add rock to scoreboard --------------------------------



// const rope = document.querySelector(".header__rope") as HTMLElement;
// const goldMiner = document.querySelector(".header__character")as HTMLDivElement;
// //
// function getElementToPlayer(item) {
//   let playerPosition = {
//     x: goldMiner.getBoundingClientRect().left,
//     y: goldMiner.getBoundingClientRect().top,
//   };
//   item.style.position = "absolute";
//   item.style.top = -10 + "%";
//   item.style.left = 50+"%";
// }

// function LiftingTheRocks(item, ropeBottom, ropeLeft) {
//   item.style.bottom = ropeBottom + "px";
//   item.style.left = ropeLeft + "px";
// }

// function checkCollision(ropeBottom, ropeLeft, ropeRect) {
//   const rocks = document.querySelectorAll(".rockElem");

//   for (let i = 0; i < rocks.length; i++) {
//     const rocklocation = rocks[i].getBoundingClientRect();
//     const item = rocks[i];

//     if (
//       ropeRect.left <= rocklocation.right &&
//       ropeRect.right >= rocklocation.left &&
//       ropeRect.top <= rocklocation.bottom &&
//       ropeRect.bottom >= rocklocation.top
//     ) {
//       getElementToPlayer(item);
//       rope.style.width = "40px";
//       rope.classList.remove("active");
//       // console.log(ropeTop, ropeLeft)
//     }
//   }
// }

// setInterval(() => {
//   const ropeBottom = rope.getBoundingClientRect().bottom;
//   const ropeLeft = rope.getBoundingClientRect().left;
//   const ropeRect = rope.getBoundingClientRect();
//   // console.log(ropeBottom, ropeLeft, ropeRect)
//   checkCollision(ropeBottom, ropeLeft, ropeRect);

// }, 10);
