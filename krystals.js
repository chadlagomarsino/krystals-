function computerTurn() {
  let krys_array = ['fire', 'water', 'wood'];
  random_krys = Math.floor(Math.random()*krys_array.length);
  return krys_array[random_krys];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'fire') {
    if (computerSelection === 'fire') {
      return("You can't fight fire with fire! Draw!");
    }
    if (computerSelection === 'water') {
      return("Water quenches fire! You lose!");
    }
    if (computerSelection === 'wood') {
      return("Fire burns wood! You win!");
    }
  }
  if (playerSelection === 'water') {
    if (computerSelection === 'fire') {
      return("Water quenches fire! You win!");
    }
    if (computerSelection === 'water') {
      return("You used Splash! It had no effect...");
    }
    if (computerSelection === 'wood') {
      return("A rising tide lifts all ships! You lose!");
    }
  }
  if (playerSelection === 'wood') {
    if (computerSelection === 'fire') {
      return("Ouch! Up in smoke! You lose!");
    }
    if (computerSelection === 'water') {
      return("Thanks for the drink! You win!");
    }
    if (computerSelection === 'wood') {
      return("If two trees make no sound in a forest, does anyone care?");
    }
  }
  return("Enter a real element.")
}


let playerSelection = prompt("fire, water, or wood?");
playerSelection = playerSelection.toLowerCase();
const computerSelection = computerTurn();
console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
