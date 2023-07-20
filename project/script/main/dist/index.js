var rope = document.querySelector(".header__rope");
// rope.animate({transform: "rotate:180deg"})
document.addEventListener("keydown", handleDown);
function handleDown() {
    rope.classList.toggle("active");
    rope.style.width = "150px";
}
