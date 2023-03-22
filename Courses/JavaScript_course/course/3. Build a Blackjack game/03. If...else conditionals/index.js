const firstCard = 9;
const secondCard = 11;
const sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want a new card? 🤓");
} else if (sum === 21) {
  console.log("Jawhol!! You've got Blackjack! 🥳")
} else {
  console.log("You're out of the game! 😤")
}
