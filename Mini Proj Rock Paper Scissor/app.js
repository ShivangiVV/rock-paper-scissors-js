let userScore =0;
let compScore =0;
const userScorePara = document.querySelector("#user-score");  
const compScorePara = document.querySelector("#comp-score");  

const choices= document.querySelectorAll(".choice") //array of divs with class choice
const msg = document.querySelector("#msg");

const genComputerChoice =()=>{
    const options =["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random()*3)
    return options[randomIndex];
    
    //rock, paper,scissors
    }

    const DrawGame=()=>{
        msg.innerText ="Game Draw. Play again!"
          msg.style.backgroundColor="#081b31";
    }

    const showWinner = (userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`
            msg.style.backgroundColor="green"
        }else{
            compScore++
            compScorePara.innerText = compScore;
            msg.innerText =`You Loose. ${compChoice} beats Your ${userChoice}`
            msg.style.backgroundColor="red"
        }
    }
const playGame=(userChoice)=>{
    //Generated computer choice
    const compChoice= genComputerChoice();


    if(userChoice==compChoice){
        //Draw game
        DrawGame()
    }else {
        let userWin =true;
        if(userChoice==="rock"){
            //scissors, Paper
           userWin= compChoice ==="paper" ? false : true;
        }else if(userChoice=="paper"){
            //rock ,scissors (computer choice)
            userWin = compChoice ==="scissors" ? false: true;
        }else{
            //rock paper
            userWin = compChoice ==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}


choices.forEach((choice)=>{ //loop to apply eventlistener to each element of an array
    // console.log(choice); //display each div with class choice
    choice.addEventListener("click",() =>{  //choice= div
        const userChoice= choice.getAttribute("id");      
        playGame(userChoice)
})
})