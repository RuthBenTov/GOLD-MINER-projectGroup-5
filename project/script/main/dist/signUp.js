// the page of playerClass.ts must be open 
// Get playes from localStorage
var players = [];
document.addEventListener("DOMContentLoaded", function () {
    var signUpLink = document.querySelector("#signUpLink");
    if (!signUpLink)
        throw new Error("Could not found signUpLink element");
    signUpLink.addEventListener("click", handleSignUpClick);
});
function handleSignUpClick(ev) {
    ev.preventDefault();
    var userNameInput = document.querySelector("#userName");
    var emailInput = document.querySelector("#email");
    var passwordInput = document.querySelector("#password");
    if (!userNameInput.value || !emailInput.value || !passwordInput.value) {
        alert("Please fill in all inputs first.");
    }
    else {
        var nameUser_1 = userNameInput.value;
        var email_1 = emailInput.value;
        var password = passwordInput.value;
        var playerExisting = players.find(function (player) { return player.nameUser === nameUser_1 && player.email === email_1; });
        if (playerExisting) {
            // Player already exists 
            alert("You are already joined us :)");
            window.location.href = "../view/homePage.html";
        }
        else {
            // Player does not exist 
            players.push(new player(nameUser_1, email_1, password));
            // save the updated player array to localstorage
            var playersJson = JSON.stringify(players);
            localStorage.setItem("players", playersJson);
            // Show the "We are happy you joined us!" message
            alert("We are happy you joined us!");
            window.location.href = "../view/homePage.html";
        }
    }
}
var playerString = localStorage.getItem("players");
if (playerString) {
    // Convert string to array
    var playerArray = JSON.parse(playerString);
    playerArray.forEach(function (playerData) {
        players.push(new player(playerData.nameUser, playerData.email, playerData.password));
    });
}
