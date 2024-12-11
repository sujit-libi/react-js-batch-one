let randomSecretNum = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highscore = 0;
let message = document.querySelector('.message')
let number = document.querySelector('.number')
let body = document.querySelector('body')
let score1 = document.querySelector('.score')
let highscore1 = document.querySelector('.highscore')
let guess = document.querySelector('.guess')
// let htmlScore = Number(document.querySelector('.score').textContent)

// document.querySelector('.number').textContent = randomSecretNum;

document.querySelector('.check').addEventListener('click', () => {
  let guessedNum = Number(document.querySelector('.guess').value)

  if(!guessedNum){ // if user doesnot enter any value
    message.textContent = "Please enter any number between 1 and 20!!!"
  } else if(guessedNum === randomSecretNum) { // if user predict correct value
    message.textContent = "Congratulation!! You Win!!"
    body.style.backgroundColor = 'green'
    number.style.width = '30rem'
    number.textContent = guessedNum
    if(score > highscore){
      highscore = score;
      highscore1.textContent = highscore
    }
  } else if(guessedNum !== randomSecretNum){
       if(score > 0) {
        message.textContent = guessedNum > randomSecretNum ? "To High" : "To Low"
        score--
        score1.textContent = score
      } else {
        message.textContent = "Sorry. You lose. Try again"
      }
  }
})

// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// Solution:

document.querySelector('.again').addEventListener('click', () => {
  number.textContent = "?";
  message.textContent = "Start guessing..."
  score1.textContent = 20
  guess.value = ""
  body.style.backgroundColor = "#222"
  number.style.width = "15rem"
})
