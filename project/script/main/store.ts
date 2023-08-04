// Adding styles to the dynamite image
const dynamiteImg = document.querySelector(".storeContainer__dynamite img") as HTMLImageElement;
const dynamiteInto = document.querySelector(".storeContainer__dynamite p") as HTMLParagraphElement;


dynamiteImg.addEventListener("mouseover", ()=>{
    dynamiteInto.style.display = "block";
});

dynamiteImg.addEventListener("mouseout", ()=> {
    dynamiteInto.style.display = "none";
});

dynamiteImg.addEventListener("click", ()=>{
    dynamiteImg.style.display = "none";

    // Store the clicked image information in localStorage
    localStorage.setItem("clickedImgSrc", dynamiteImg.src);
});


// Adding styles to the pocket watch image
const timeImg = document.querySelector(".storeContainer__time img") as HTMLImageElement;
const timeIntro = document.querySelector(".storeContainer__time p") as HTMLParagraphElement;

(timeImg).addEventListener("mouseover", ()=>{
    timeIntro.style.display = "block";
});

timeImg.addEventListener("mouseout", ()=> {
    timeIntro.style.display = "none";
});

timeImg.addEventListener("click", ()=>{
    timeImg.style.display = "none";

    // Store the clicked image information in localSrotage
    localStorage.setItem("clickedImgSrc", timeImg.src);
});


document.addEventListener("DOMContentLoaded", ()=>{
    const nextLevel = document.querySelector(".storeContainer__nextLevel") as HTMLDivElement;
    if(nextLevel) {
        nextLevel.addEventListener("click", ()=>{
            // Replace the current page with the page of the game
            window.location.href = '../view/index.html';
        })
    }
});


