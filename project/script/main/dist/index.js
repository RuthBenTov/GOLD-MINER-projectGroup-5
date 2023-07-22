var rope = document.querySelector(".header__rope");
var goldMiner = document.querySelector(".header__character");
document.addEventListener("keydown", handlePress);
function handlePress(ev) {
    if (ev.key === "ArrowDown") {
        rope.style.width = "400px";
        rope.classList.add("active");
    }
    if (ev.key === "ArrowLeft") {
        if (Number(goldMiner.style.left.replace("px", "")) > -240)
            goldMiner.style.left =
                (Number(goldMiner.style.left.replace("px", "")) - 5).toString() + "px";
    }
    if (ev.key === "ArrowRight") {
        if (Number(goldMiner.style.left.replace("px", "")) < 240)
            goldMiner.style.left =
                (Number(goldMiner.style.left.replace("px", "")) + 5).toString() + "px";
    }
    else {
        rope.style.width = "30px";
        rope.classList.remove("active");
    }
}
