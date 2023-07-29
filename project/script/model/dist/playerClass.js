var Player = /** @class */ (function () {
    function Player(nameUser, email, password
    // public score: number = 0
    ) {
        this.nameUser = nameUser;
        this.email = email;
        this.password = password;
    }
    return Player;
}());
// Get playes from localStorage
var players = [];
function handleLogin(ev) {
    try {
        ev.preventDefault();
        var loginUsernameInput = document.querySelector("#loginUsername");
        var loginPasswordInput = document.querySelector("#loginPassword");
        var loginUsername_1 = loginUsernameInput.value;
        var loginPassword_1 = loginPasswordInput.value;
        var user = players.find(function (player) { return (player.nameUser === loginUsername_1 || player.email === loginUsername_1) && player.password === loginPassword_1; });
        if (user) {
            // After the user logged in, save the data and redirect to index.html
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.href = "../view/index.html";
        }
        else {
            // User wasn't found, show alert
            alert("Invalid username/email or password. Please try again or sign up if you don't have an account.");
        }
    }
    catch (error) {
        console.error(error);
    }
}
// Attach the event listener to the login button
document.addEventListener("DOMContentLoaded", function () {
    var loginBtn = document.querySelector("#loginBtn");
    loginBtn.addEventListener("click", handleLogin);
});
// function to check if the user is logged in and redirect accordingly
function checkLoggedIn() {
    var loginBtn = document.querySelector("#loginBtn");
    loginBtn.addEventListener("click", handleLogin);
}
// Function to render user data in index.html
function renderUserData() {
    try {
        var userDateDiv = document.querySelector("#userData");
        var loginStatusSpan = document.querySelector("#loginStatus");
        var logOutLink = document.querySelector("#logOut");
        var currentUserJson = localStorage.getItem("currentUser");
        if (currentUserJson) {
            // User is logged in, display data and show log Out link
            var currentUser = JSON.parse(currentUserJson);
            loginStatusSpan.innerHTML = "<p>Welcome, " + currentUser.nameUser + "!</p>";
            logOutLink.style.display = "block";
        }
        else {
            // User didn't logged in, display log in
            loginStatusSpan.textContent = "Log in";
            logOutLink.style.display = "none";
            // If the user wants to log in, when click it takes him to the homePage
            loginStatusSpan.addEventListener("click", function () {
                window.location.href = "../view/homePage.html";
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
// window.location.href = "../view/index.html";
// Function to handle user log out
function handleLogOut(ev) {
    try {
        ev.preventDefault();
        // Remove the current user data from localStorage
        localStorage.removeItem("currentUser");
        // Render again the user data to update the display
        renderUserData();
    }
    catch (error) {
        console.error(error);
    }
}
// Attach the eventListener  to the log out link
document.addEventListener("DOMContentLoaded", function () {
    var logOutLink = document.querySelector("#logOut");
    logOutLink.addEventListener("click", handleLogOut);
    renderUserData();
});
