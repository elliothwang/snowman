// ===== Guess the Word Game ===== //


// ===== RULES ===== //
// 1. Select amount of letters in word from 6-10.
// 2. If the selected letter is contained in the word, the player takes another turn guessing a letter.
// 3. If the selected letter is not contained in the word, a portion of the snowman will be deleted. 
// 4. The game continues until:
  // the word is guessed (all letters are revealed) – WINNER or,
  // all the parts of the snowman are deleted – LOSE

// ===== GAME FLOW =====
  // After selecting game mode, page will load:
    // upper 10%: title & message
    // upper 40% of page will be snowman
      // middle 20% of page will be empty word with blank lines under each "hidden" letter
        // lower 25% of alphabet & on the side of alphabet box; used-letters box
        // last 5% replay button
  
  // player selects letter:
    // if hit, move letter to used-letters box
      // check for win
      // select letter again
    // if miss, move letter to used-letters box
      // remove portion of snowman
      // remove 1 from # of moves
      // select letter again


// ===== constants ===== //
// let alphabet = [];

// make a grid of snowman picture
  // 2 columns, 3 rows
  // break up pic of snowman & make background of grid squares
  // can fade elements out by accessing html div

  let usedLetters = [];

  // ===== app's state ===== //
  let turn, winner;
  
  // ===== cached element references ===== //
  let messageEl;
  let replayButton;
  let alphabetEl;
  // let usedLettersEl;
  
  // ===== event listeners ===== //
  replayButton.addEventListener("", );
  messageEl.addEventListener("", )
  alphabetEl.addEventListener("", )
  
  // ===== functions ===== //
  function init () {
  
  }
  
  function handleClick(evt) {
  
  }
  
  function render() {
  
  }
  
  function checkForWin() {
  
  }
  
  