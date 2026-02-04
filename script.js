function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const choice=["rock","paper","scissors"]

function getComputerChoice(){
    let pc_choice = getRandomInt(3);
    let pc_move = choice[pc_choice];

    return pc_move;
}

function getHumanChoice(){
    let user_move = prompt("Enter a move: ");
    return user_move;
}

let HumanScore = 0, ComputerScore=0;

function playRound(hooman_choice,pc_choice){
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
        console.log(`You WIN!!! You chose ${hooman_choice} & Computer chose ${pc_choice}`);
    }
    else if(pc_win){
        ComputerScore++;
        console.log(`You LOSE!!! You chose ${hooman_choice} & Computer chose ${pc_choice}`);
    }
    else{
        console.log("NOBODY WINS!!!");
    }
}
    function playGame(){
        
        for(let i=0;i<5;i++){
        const Human_Choice = getHumanChoice();
        const Computer_Choice = getComputerChoice();
        playRound(Human_Choice,Computer_Choice);
    }
}
