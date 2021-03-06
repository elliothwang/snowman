// ===== constants ===== //
// intialize gameWords to array of difficult spaceman words
let gameWords = ['abruptly','absurd','abyss','affix','askew','avenue','awkward','axiom','azure','bagpipes','bandwagon','banjo','bayou','beekeeper','bikini','blitz','blizzard','boggle','bookworm','boxcar','boxful','buckaroo','buffalo','buffoon','buxom','buzzard','buzzing','buzzwords','caliph','cobweb','cockiness','croquet','crypt','curacao','cycle','daiquiri','dirndl','disavow','dizzying','duplex','dwarves','embezzle','equip','espionage','euouae','exodus','faking','fishhook','fixable','fjord','flapjack','flopping','fluffiness','flyby','foxglove','frazzled','frizzled','fuchsia','funny','gabby','galaxy','galvanize','gazebo','giaour','gizmo','glowworm','glyph','gnarly','gnostic','gossip','grogginess','haiku','haphazard','hyphen','iatrogenic','icebox','injury','ivory','ivy','jackpot','jaundice','jawbreaker','jaywalk','jazziest','jazzy','jelly','jigsaw','jinx','jiujitsu','jockey','jogging','joking','jovial','joyful','juicy','jukebox','jumbo','kayak','kazoo','keyhole','khaki','kilobyte','kiosk','kitsch','kiwifruit','klutz','knapsack','larynx','lengths','lucky','luxury','lymph','marquis','matrix','megahertz','microwave','mnemonic','mystify','naphtha','nightclub','nowadays','numbskull','nymph','onyx','ovary','oxidize','oxygen','pajama','peekaboo','phlegm','pixel','pizazz','pneumonia','polka','pshaw','psyche','puppy','puzzling','quartz','queue','quips','quixotic','quiz','quizzes','quorum','razzmatazz','rhubarb','rhythm','rickshaw','schnapps','scratch','shiv','snazzy','sphinx','spritz','squawk','staff','strength','strengths','stretch','stronghold','stymied','subway','swivel','syndrome','thriftless','thumbscrew','topaz','transcript','transgress','transplant','triphthong','twelfth','twelfths','unknown','unworthy','unzip','uptown','vaporize','vixen','vodka','voodoo','vortex','voyeurism','walkway','waltz','wave','wavy','waxy','wellspring','wheezy','whiskey','whizzing','whomever','wimpy','witchcraft','wizard','woozy','wristwatch','wyvern','xylophone','yachtsman','yippee','yoked','youthful','yummy','zephyr','zigzag','zigzagging','zilch','zipper','zodiac','zombie'];
// initialize var alphabet to array of alphabet letters
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// intialize images to object; keys(movesLeft) : images(stages) of snowman 
let images = {
    0: "url('https://i.imgur.com/5UsmBmS.jpg')",
    1: "url('https://i.imgur.com/pLxH4rd.jpg')",
    2: "url('https://i.imgur.com/c1qOULP.jpg')",
    3: "url('https://i.imgur.com/EX9DTLA.jpg')",
    4: "url('https://i.imgur.com/2KLX25E.jpeg')",
    5: "url('https://i.imgur.com/mxCmlut.jpg')",
    6: "url('https://i.imgur.com/ANYknjN.jpg')"
};

  // ===== app's state ===== //
  let word, wordPlaceHolder, guesses, winner, movesLeft;

  // ===== cached element references ===== //
  let snowmanImg = document.querySelector("#img");
  let movesLeftEl = document.querySelector("#moves");
  let wordEl = document.querySelector("#word");
  let keyboard = [...document.querySelectorAll("#alphabet-board > *")];
  let replayButton = document.querySelector("#reset");

  // ===== event listeners ===== //
  replayButton.addEventListener("click", init);
  keyboard.forEach(div => div.addEventListener("click", handleClick));

  // ===== functions ===== //
  init ();

  function init () {
    // reassign winner to null;
    winner = null;
    // reassign amount of moves left to & display movesLeft
    movesLeft = 6;
    movesLeftEl.innerText = `Moves Left: ${movesLeft}`;

    // // reset snowman picture to first stage => snowmanImg.style.backgroundImage = images.0;
    snowmanImg.style.backgroundImage = images[movesLeft];

    // reassign word to empty string
    word = "";
    wordEl.style.letterSpacing = "2.5vmin";

    // reset guesses array
    guesses = [];

    // reset keyboard
    keyboard.forEach(div => {
      div.disabled = false;
      div.style.cursor = "cursor";
      div.style.color = "black";
      div.style.backgroundColor = "slategray";
      div.style.opacity = 1;
    });
    // set replayButton's display to none
    replayButton.style.display = "none";

    // invoke selectWord function
    selectWord();

    // invoke render function
    render();
  }

  function selectWord() {
    // randomly select element from gameWords Array & assign it to wordEl.innerText
    word = gameWords[Math.floor(Math.random() * gameWords.length)];
  };
  
  function handleClick(evt) {
  // test evt.target.id truthiness within guesses array, push into guesses array
    if (guesses.indexOf(evt.target.id) === -1) {
      guesses.push(evt.target.id);
    }
    // test truthiness of evt.target.id within word using indexOf method
    if (word.indexOf(evt.target.id) >= 0) {
      // set background color of evt.target.id's button to red
      document.getElementById(evt.target.id).style.backgroundColor = "#1db36d";
      // invoke render function
      render();
    }
      else if (word.indexOf(evt.target.id) === -1) {
      // set background color of evt.target.id's button to red
      document.getElementById(evt.target.id).style.backgroundColor = "#bd4844";
      // set opacity to 0.8
      document.getElementById(evt.target.id).style.opacity = 0.8;
        // decrement movesLeft
        movesLeft--;
        movesLeftEl.innerText = `Moves Left: ${movesLeft}`;
        // reassign image to images[movesLeft];
        snowmanImg.style.backgroundImage = images[movesLeft];
      }

      // disable evt.target.id's button, disable transform & cursor
      document.getElementById(evt.target.id).disabled = true;

      document.getElementById(evt.target.id).style.color = "black";

    // invoke CheckForWinOrLoss function
    checkForWinOrLoss();
  };

  function render() {
    // create new array to be wordPlaceHolder
    let wordPlaceHolder = [];
      // iterate through word with for loop
      for (letter of word.split("")) {
        if (guesses.indexOf(letter) >= 0) {
          wordPlaceHolder.push(letter);
        }
        else wordPlaceHolder.push(" _ ");
      };
  
    // assign #word's html to var wordPlaceHolder
    wordEl.innerHTML = wordPlaceHolder.join("");
  };
  
  function checkForWinOrLoss() {
    // if movesLeft > 0 && wordPlaceholder = word, diplay win message
    if (movesLeft > 0 && wordEl.innerHTML === word) {
      wordEl.style.letterSpacing = "1vmin";
      wordEl.innerHTML = "Congratulations! You saved the snowman!";
      // disable rest of the buttons
      keyboard.forEach(div => {
        div.disabled = true;
      });
      // reset button's display to block;
      replayButton.style.display = "block";
    }
    
    // if movesLeft = 0, display loss message & word
    if (movesLeft === 0) {
      // hard code image to show last image;
      snowmanImg.style.backgroundImage = images[movesLeft];
      wordEl.style.letterSpacing = "1vmin";
      wordEl.innerHTML = `The snowman melted!
      The word was ${word}.`
      // disable rest of the buttons
      keyboard.forEach(div => {
        div.disabled = true;
      });
      // set reset button's display to block;
      replayButton.style.display = "block";
    }
  };