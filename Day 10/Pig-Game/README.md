// Task Breakdown for Pig Game / Hint

// Task 1: Set Up HTML Elements
// Objective: Select and store references to the necessary HTML elements.
// Instructions:
// Use document.querySelector to select the following elements:
// Player 0's score display (#score--0)
// Player 1's score display (#score--1)
// The dice image (.dice)
// Player 0's active player container (.player--0)
// Player 1's active player container (.player--1)
// Current score display for Player 0 (#current--0)
// Current score display for Player 1 (#current--1)
// New game button (.btn--new)
// Roll dice button (.btn--roll)
// Hold button (.btn--hold)

// Task 2: Initialize Game Variables
// Objective: Set up initial game state variables.
// Instructions:
// Create variables to hold:
// scores: an array to hold scores for both players.
// isPlaying: a boolean to track if the game is ongoing.
// currentScore: a variable to hold the current score for the active player.
// activePlayer: a variable to track which player's turn it is (0 or 1).

// Task 3: Create the Initialization Function
// Objective: Write a function to reset the game state.
// Instructions:
// Define a function called init.
// Inside this function, set:
// isPlaying to true.
// currentScore to 0.
// activePlayer to 0.
// scores to an array with two zeros [0, 0].
// Update the text content of score displays and current score displays to show zero.
// Hide the dice image by adding a class.
// Reset player classes to indicate which player is active.

// Task 4: Create a Function to Switch Players
// Objective: Write a function that switches turns between players.
// Instructions:
// Define a function called switchPlayer.
// Inside this function:
// Set the current score display of the active player to zero.
// Reset currentScore to zero.
// Toggle activePlayer between 0 and 1.
// Update player classes to reflect the active player.

// Task 5: Implement Dice Rolling Logic
// Objective: Handle rolling the dice when the roll button is clicked.
// Instructions:
// Add an event listener for the roll button (btnRoll).
// Inside the event listener:
// Check if the game is still ongoing (isPlaying).
// Generate a random number between 1 and 6.
// Display the corresponding dice image.
// If the rolled number is not 1, add it to currentScore and update the current score display.
// If the rolled number is 1, call the switchPlayer function.

// Task 6: Implement Holding Logic
// Objective: Handle holding scores when the hold button is clicked.
// Instructions:
// Add an event listener for the hold button (btnHold).
// Inside this event listener:
// Check if the game is still ongoing.
// Add currentScore to the total score of the active player.
// Update their score display.
// Check if this player's total score has reached or exceeded 100. If so, end the game and declare them as winner; otherwise, call switchPlayer.

// Task 7: Restarting the Game
// Objective: Allow players to restart the game.
// Instructions:
// Add an event listener for the new game button (btnNew).
// Inside this event listener, call the init function to reset all game states.
// Final Task: Testing and Debugging
// Objective: Test each part of your implementation and debug any issues.
// Instructions:
// Play through different scenarios in your game (e.g., rolling a '1', holding scores, reaching '100', restarting) and ensure everything works as expected.
// Debug any issues that arise during testing.
