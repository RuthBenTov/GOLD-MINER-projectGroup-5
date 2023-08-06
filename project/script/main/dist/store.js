// // Adding styles to the dynamite image
// const dynamiteImg = document.querySelector(".storeContainer__dynamite img") as HTMLImageElement;
// const dynamiteInto = document.querySelector(".storeContainer__dynamite p") as HTMLParagraphElement;
// dynamiteImg.addEventListener("mouseover", ()=>{
//     dynamiteInto.style.display = "block";
// });
// dynamiteImg.addEventListener("mouseout", ()=> {
//     dynamiteInto.style.display = "none";
// });
// dynamiteImg.addEventListener("click", ()=>{
//     dynamiteImg.style.display = "none";
//     // Store the clicked image information in localStorage
//     localStorage.setItem("clickedImgSrcDynamite", dynamiteImg.src);
// });
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
    localStorage.setItem("additionalTime", "10");
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
