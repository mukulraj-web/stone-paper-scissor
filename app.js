 let  userScore = 0;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");
  const msg = document.querySelector("#msg")
  const userScorepara = document.querySelector("#user-score")
  const compScorepara = document.querySelector("#comp-score")
const genCompChoice = ()=> {
    const options = ["rock", "paper", "scissors" ]
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame = ()=> {
    console.log("game was draw")
    msg.innerText = "Game was draw. play again.";
    msg.style.background = "grey"
}
const showWinner = (userWin)=> {
    if (userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("user won");
        msg.innerText = "you win!";
        msg.style.background = "green"
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("computer won");
        msg.innerText = "computer win";
        msg.style.background = "red"
    }
}

 const playGame =(userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice)
    if (userChoice === compChoice) {
               drawGame();
    }
               else {
                let userWin = true;
                if (userChoice === "rock"){
                    //comChoice = scissor,paper
                    userWin = compChoice ==="paper" ? false:true ;
                }
                else if(userChoice ==="paper"){
                    //comChoice = rock,paper
                    userWin = compChoice === "scissors" ? false: true; 
                }else {
            userWin= compChoice === "rock" ? false: true;

                }
                showWinner(userWin);
                 
            }
    }

    
 

 choices.forEach((choice)=>{choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
    playGame(userChoice);
    })
 })