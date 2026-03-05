//Randomized choice for computer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const choice=["rock","paper","scissors"]

//Computer Choice Function
function getComputerChoice(){
    let pc_choice = getRandomInt(3);
    let pc_move = choice[pc_choice];

    return pc_move;
}

//Human choice function
function getHumanChoice(){
    let user_move = prompt("Enter a move: ");
    return user_move;
}

//Winner Conditions
function declarewinner(){
    if(HumanScore>ComputerScore){
        alert("You WIN!!!");
    }
    else if(ComputerScore>HumanScore){
        alert("YOU LOSE!!!");
    }
    else{
        alert("IT IS A DRAW!!");
    }
}

let HumanScore = 0, ComputerScore=0;

//Each Round logic
function playRound(hooman_choice){
    pc_choice = getComputerChoice();
    hooman_choice = hooman_choice.toLowerCase();
    let hooman_win=false;
    let pc_win=false;
    if(hooman_choice == "rock" && pc_choice=="scissors"){
        hooman_win=true;
    }
    else if(hooman_choice == "paper" && pc_choice=="rock"){
        hooman_win=true;
    }
    else if(hooman_choice=="scissors" && pc_choice=="paper"){
        hooman_win=true;
    }
    else if(hooman_choice==pc_choice){
        hooman_win=false;
        pc_win=false;
    }
    else{
        pc_win=true;
    }

    if(hooman_win){
        HumanScore++;
        alert(`You WIN!!! You chose ${hooman_choice} & Computer chose ${pc_choice}`);
    }
    else if(pc_win){
        ComputerScore++;
        alert(`You LOSE!!! You chose ${hooman_choice} & Computer chose ${pc_choice}`);
    }
    else{
        alert("NOBODY WINS!!!");
    }

    if(HumanScore==5 || ComputerScore==5){
        declarewinner();
    }
}
    function playGame(){
        
    const rockButton = document.getElementById("rockbtn");
    const paperButton = document.getElementById("paperbtn");
    const scissorButton = document.getElementById("scissorbtn");  
    

    rockButton.addEventListener('click',() =>{
        playRound("rock");
    });
    paperButton.addEventListener('click',() =>{
        playRound("paper");
    });
    scissorButton.addEventListener('click',()=>{
        playRound("scissors");
    });    
}

playGame();
