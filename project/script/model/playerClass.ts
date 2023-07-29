class Player {
  constructor(
    public nameUser: string,
    public email : string,
    public password : string

    // public score: number = 0
    ) {}
}

// Get playes from localStorage
const players: Player[] = [];

function handleLogin(ev) {
  try {
    ev.preventDefault();
    const loginUsernameInput = document.querySelector("#loginUsername") as HTMLInputElement;
    const loginPasswordInput = document.querySelector("#loginPassword") as HTMLInputElement;
  
    const loginUsername = loginUsernameInput.value;
    const loginPassword = loginPasswordInput.value;
  
    const user = players.find(
      (player) => (player.nameUser === loginUsername || player.email === loginUsername) && player.password === loginPassword
    );
  
    if (user) {
      // After the user logged in, save the data and redirect to index.html
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "../view/index.html";
    } else {
      // User wasn't found, show alert
      alert("Invalid username/email or password. Please try again or sign up if you don't have an account.");
    }
  } catch (error) {
    console.error(error);
  }
}

// Attach the event listener to the login button
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("#loginBtn") as HTMLButtonElement;
  loginBtn.addEventListener("click", handleLogin);
});
  
  // function to check if the user is logged in and redirect accordingly
  function checkLoggedIn(){
    const loginBtn = document.querySelector("#loginBtn") as HTMLButtonElement;
    
    loginBtn.addEventListener("click", handleLogin);
  }



// Function to render user data in index.html
function renderUserData() {
  try {
    const userDateDiv = document.querySelector("#userData") as HTMLDivElement;
    const loginStatusSpan = document.querySelector("#loginStatus") as HTMLSpanElement;
    const logOutLink = document.querySelector("#logOut") as HTMLAnchorElement;
  
    const currentUserJson = localStorage.getItem("currentUser");
    if (currentUserJson) {
      // User is logged in, display data and show log Out link
      const currentUser = JSON.parse(currentUserJson);
      loginStatusSpan.innerHTML = `<p>Welcome, ${currentUser.nameUser}!</p>`;
      logOutLink.style.display = "block";
  
      } else {
        // User didn't logged in, display log in
        loginStatusSpan.textContent = "Log in";
        logOutLink.style.display = "none";
        // If the user wants to log in, when click it takes him to the homePage
        loginStatusSpan.addEventListener("click", ()=>{
          window.location.href = "../view/homePage.html";
        })


      }
  } catch (error) {
    console.error(error);
  }
  }
  
  // window.location.href = "../view/index.html";

// Function to handle user log out
function handleLogOut(ev){
  try {
    ev.preventDefault();
    // Remove the current user data from localStorage
    localStorage.removeItem("currentUser");
    // Render again the user data to update the display
    renderUserData();
  } catch (error) {
    console.error(error);
  }
}

// Attach the eventListener  to the log out link
document.addEventListener("DOMContentLoaded",()=>{
  const logOutLink = document.querySelector("#logOut") as HTMLAnchorElement;
  logOutLink.addEventListener("click", handleLogOut);
  renderUserData();
})

