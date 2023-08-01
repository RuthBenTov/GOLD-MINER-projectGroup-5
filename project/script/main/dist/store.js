// Adding styles to the dynamite image
var dynamiteImg = document.querySelector(".storeContainer__dynamite img");
var dynamiteInto = document.querySelector(".storeContainer__dynamite p");
dynamiteImg.addEventListener("mouseover", function () {
    dynamiteInto.style.display = "block";
});
dynamiteImg.addEventListener("mouseout", function () {
    dynamiteInto.style.display = "none";
});
dynamiteImg.addEventListener("click", function () {
    dynamiteImg.style.display = "none";
    // Store the clicked image information in localStorage
    localStorage.setItem("clickedImgSrc", dynamiteImg.src);
});
// Adding styles to the pocket watch image
var timeImg = document.querySelector(".storeContainer__time img");
var timeIntro = document.querySelector(".storeContainer__time p");
(timeImg).addEventListener("mouseover", function () {
    timeIntro.style.display = "block";
});
timeImg.addEventListener("mouseout", function () {
    timeIntro.style.display = "none";
});
timeImg.addEventListener("click", function () {
    timeImg.style.display = "none";
    // Store the clicked image information in localSrotage
    localStorage.setItem("clickedImgSrc", timeImg.src);
});
document.addEventListener("DOMContentLoaded", function () {
    var nextLevel = document.querySelector(".storeContainer__nextLevel");
    if (nextLevel) {
        nextLevel.addEventListener("click", function () {
            // Replace the current page with the page of the game
            window.location.href = '../view/index.html';
        });
    }
});
function renderMoney() {
    var moneyFromLs = JSON.parse(localStorage.getItem("playersMoney"));
    var scoreDive = document.querySelector(".playersMoney");
    scoreDive.innerHTML = moneyFromLs + "$";
}
renderMoney();
