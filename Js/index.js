let messageOutput = document.getElementById("message");
let cardOutput = document.getElementById("cards");
let sumOutput = document.getElementById("sums");
let isAlive = true;
let hasBlackJack = false;
let cards = [];
let sum = 0;
let message = "";



function getRandomNumber() {
    let number = Math.floor(Math.random()*13) + 1;
    if (number === 1) {
        return 11;
    } else if (number > 10) {
        return 10;
    } else {
        return number;
    }
}


function startGame() {
    isAlive = true;
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    cards = [firstNumber, secondNumber];
    sum = firstNumber  + secondNumber;
    renderGame();
}

function renderGame() {
    cardOutput.textContent = "cards: "
    for (let i = 0; i < cards.length; i++) {
        cardOutput.textContent += cards[i] + " ";
    }
    sumOutput.textContent = "Sum: "
    sumOutput.textContent += sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageOutput.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()       
    }
}