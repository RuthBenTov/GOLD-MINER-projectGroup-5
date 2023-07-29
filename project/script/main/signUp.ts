// the page of playerClass.ts must be open 

// Get playes from localStorage
const players: player[] = [];


document.addEventListener("DOMContentLoaded", ()=>{
  const signUpLink = document.querySelector("#signUpLink") as HTMLAnchorElement;
  if(!signUpLink) throw new Error ("Could not found signUpLink element");

  signUpLink.addEventListener("click", handleSignUpClick);
});
  


  function handleSignUpClick(ev){
    ev.preventDefault();
    const userNameInput = document.querySelector("#userName") as HTMLInputElement;
    const emailInput = document.querySelector("#email") as HTMLInputElement;
    const passwordInput = document.querySelector("#password") as HTMLInputElement;

    if (!userNameInput.value || !emailInput.value || !passwordInput.value){
      alert("Please fill in all inputs first.")
    } else {
      const nameUser = userNameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
      

      const playerExisting = players.find(
        (player) => player.nameUser === nameUser && player.email === email
      );

      if(playerExisting) {
        // Player already exists 
        alert("You are already joined us :)")

        window.location.href = "../view/homePage.html";
      }else {
        // Player does not exist 
        players.push(new player(nameUser, email, password));

        // save the updated player array to localstorage
        const playersJson = JSON.stringify(players);
        localStorage.setItem("players", playersJson);

        // Show the "We are happy you joined us!" message
        alert("We are happy you joined us!")

        window.location.href = "../view/homePage.html";
      }
    }
    
  }


  const playerString = localStorage.getItem("players");
  if(playerString) {
    // Convert string to array
    const playerArray = JSON.parse(playerString);
    playerArray.forEach((playerData)=> {
      players.push(new player(playerData.nameUser, playerData.email, playerData.password));
    });
  }
