const rps = ['rock', 'paper', 'scissors'];

for ( let i = 1; i < 6; i++) {

function getComputerChoice() {
    let randomItem = rps[Math.floor(Math.random()*rps.length)];
    return randomItem;
}
 
let randomItem = getComputerChoice();

function round() {
    let playerChoice = prompt("chose your weapon:");
    let result = playerChoice.toLowerCase();
     if (result == "rock" & randomItem == "paper") {
        return "you lose paper beats rock";
     }
     else if (result == "rock" & randomItem == "scissors") {
        return "you win rock beats scissors";
     }
     else if (result == "rock" & randomItem == "rock") {
        return "its a tie!";
     }
     else if (result == "paper" & randomItem == "paper") {
        return "its a tie!";
     }
     else if (result == "paper" & randomItem == "rock") {
        return "you win paper beats rock";
     }
     else if (result == "paper" & randomItem == "scissors") {
        return "you lose scissors beats paper";
     }
     else if (result == "scissors" & randomItem == "paper") {
        return "you win scissors beats paper";
     }
     else if (result == "scissors" & randomItem == "rock") {
        return "you loose rock beats scissors";
     }
     else if (result == "scissors" & randomItem == "scissors") {
        return "its a tie!";
     }
}

    let playerChoice = round();

    console.log(playerChoice);

    console.log(i)
}
