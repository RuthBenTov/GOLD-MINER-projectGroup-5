 const rope = document.querySelector(".header__rope") as HTMLDivElement;
// rope.animate({transform: "rotate:180deg"})

document.addEventListener("keydown", handleDown);

function handleDown(ev: any) {
  if (ev.key === "ArrowDown") {
    rope.style.width = "400px";
    rope.classList.add("active");
  }
  else {
    rope.style.width = "30px";
    rope.classList.remove("active");
  }
}
