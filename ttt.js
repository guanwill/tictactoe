//----------CREATING GAME HEADING-----------
var body = $('body');
//HEADING
var welcome = $('<h1>')
.text("Tic Tac Attack")
.css({
  'font-family': 'Dancing Script, cursive'
})
body.append(welcome);

//----------DEFAULT PLAYER NAMES----------
var player1name = "";
var player2name = "";
var  player2name = "";

// This displays player names on the board. Not going to do it.
// var player1nameText = $('<h3>').attr('id','player1nameText').text(player1name);
// body.append(player1nameText);
// var player2nameText = $('<h3>').attr('id', 'player2nameText').text(player2name);
// body.append(player2nameText);

//----------DISPLAY CURRENT PLAYER'S TURN----------
var currentPlayerTurn = $('<h3>')
  .attr('id', 'go').text("Your Turn, Gunslinger " + player1name +"!" ) //by default, always show player 1 turn's first
  .css({
    'font-family': 'Montserrat, cursive'
  })
body.append(currentPlayerTurn);

//----------CREATING BOARD/GRID----------
var board = $('<table>').attr('id','board');
body.append(board);

//adding rows 1, 2, 3
var row1 = $('<tr>').addClass('row 1');
var row2 = $('<tr>').addClass('row 2');
var row3 = $('<tr>').addClass('row 3');
board.append(row1, row2, row3);
//adding columns to row 1
var a1 = $('<td>').addClass('a1');
var a2 = $('<td>').addClass('a2');
var a3 = $('<td>').addClass('a3');
row1.append(a1, a2, a3);
//adding columns to row 2
var b1 = $('<td>').addClass('b1');
var b2 = $('<td>').addClass('b2');
var b3 = $('<td>').addClass('b3');
row2.append(b1, b2, b3);
//adding columns to row 3
var c1 = $('<td>').addClass('c1');
var c2 = $('<td>').addClass('c2');
var c3 = $('<td>').addClass('c3');
row3.append(c1, c2, c3);

//----------CREATING NEW GAME BUTTON FOR SP----------
var startGameSP = $('<button>')
  .attr('id', 'startGameSP')
  .attr('type', 'button')
  .text('SINGLE PLAYER');
body.append(startGameSP);

//----------CREATING PLAY SP AGAIN BUTTON----------
var resetBoardSP = $('<button>')
  .attr('id', 'resetBoardSP')
  .attr('type', 'button')
  .text('PLAY SP AGAIN');
body.append(resetBoardSP);

//----------CREATING RESET SCORE BUTTON----------
var resetScore = $('<button>')
  .attr('id', 'resetScore')
  .attr('type', 'button')
  .text('RESET SCORE');
body.append(resetScore);

//----------CREATING NEW GAME BUTTON FOR MP----------
var startGame = $('<button>')
  .attr('id', 'startGame')
  .attr('type', 'button')
  .text('MULTIPLAYER');
body.append(startGame);

//----------CREATING PLAY MP AGAIN BUTTON----------
var resetBoard = $('<button>')
  .attr('id', 'resetBoard')
  .attr('type', 'button')
  .text('PLAY MP AGAIN');
body.append(resetBoard);

//----------CLICK SOUND EFFECTS----------
var gunSound = function() {
  var gun = new Audio("gun.mp3");
  gun.play();
}
var swordSound = function() {
  var sword = new Audio("sword.mp3");
  sword.play();
}

//----------CREATING, DISPLAYING AND UPDATING PLAYER WINS----------
var player1WinCount = 0;  //default wins
var player2WinCount = 0;

var winCount = $('<div>').attr('id', 'winCount');
var player1WinText = $('<h3>')
  .attr('id','player1WinText')
  .text(player1name + " " +" " + player1WinCount +" : ")  //displays player one name and player one win count to newly created h3 tag
  .css({
    'font-family': 'Montserrat, cursive'
  })
winCount.append(player1WinText);

var player2WinText = $('<h3>')
  .attr('id','player2WinText')
  .text(player2WinCount + " " + player2name)   //displays player one name and player one win count to newly created h3 tag
  .css({
    'font-family': 'Montserrat, cursive'
  })
winCount.append(player2WinText);
body.append(winCount);  //appends both displays to the body

//----------SHOWS PLAYER CHARACTER IMAGE----------
var playerType = $('<div>').attr('id', 'playerType');
var playerType1 = $('<img id="playerType1" src="http://s32.postimg.org/rp9mswl75/gunman.png">')
var vs = $('<img id="vs" src="http://s32.postimg.org/93ilao2j5/vs1.png">')
var playerType2 = $('<img id="playerType2" src="http://s32.postimg.org/9oojcbx3l/ninja.png">')
playerType.append(playerType1, vs, playerType2);
body.append(playerType);

//----------SHOWS THE RULES----------
var rules = $('<div>').attr('id', 'rules')
.text("Rules are Simple! You are the gunslinger. The gunslinger will always attack first because ninjas are lazy, and the winning conditions are the same as tic-tac-toe. The catch here is, you will have to remember where you've attacked in order to win!")
body.append(rules);

//----------START NEW GAME FOR SINGLE PLAYER----------
function newGameSP() {
  $('button#startGameSP').on('click', function(){  //when you click on new game button,
    getNamesforSP(); //calls the function that prompts players to input their names
    $('td').empty()  //all td becomes empty
    $('body').css('cursor', 'url("http://s32.postimg.org/dyroxsmhd/guncursor.png"),auto'); //cursor is the gun cursor when game starts
    turnCount = 0;  //turn count starts from 0
    $('td').fadeTo('slow',1);  //makes all the ghosts appear, if they already aren't
    startClickingSP();  //activates the clicking board function
    $('button#startGame').off('click') //immediately disables new game button until game finish or winner declared
    $('button#resetBoard').off('click') //immediately disables play again button until game finish or winner declared
    $('button#resetBoardSP').off('click')//play again button is also disabled until game ends
    $('button#startGameSP').off('click') //immediately disables new game button until game finish or winner declared


    currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );  //displays current player's turn
    console.log(turnCount); //check if turn count is 0 when new game button is clicked on

    player1WinCount = 0; //resets player 1 win count
    player1WinText.text(player1name + " " +" " + player1WinCount +" : "); //updates the win count display
    player2WinCount = 0;  //resets player 2 win count
    player2WinText.text(player2WinCount + " " + player2name); //updates the win count display

    //more rules when you start a new game
    $('#rules').css({  //make rules disappear
      'display': 'none'
    })
    $('h1').css({  //make heading disappear
      'display': 'none'
    })
    $('#playerType').css({ //make player character images disappear
      'display': 'none'
    })
    $('h3#go').css({ //make the display current player turn appear (as earlier, when game finishes or winner declared, it hides it)
      'display': 'block',
      'visibility':'visible'
    })
    $('#winCount').css({
      'display': 'block'
    })
    $('#player1WinText').css({
      'display': 'inline-block'
    })
    $('#player2WinText').css({
      'display': 'inline-block'
    })
    $('table').css({
      'display': 'block'  //by default it displays none, we making it appear when new game button is clicked on
    })
    $('button#resetBoard').css({ //by default it displays none, we making it appear when new game button is clicked on
      'display': 'inline-block'
    })
    $('button#resetBoardSP').css({ //by default it displays none, we making it appear when new game button is clicked on
      'display': 'inline-block'
    })
    $('button#resetScore').css({ //by default it displays none, we making it appear when new game button is clicked on
      'display': 'inline-block'
    })
  })
}
newGameSP();  //declare new game function straight away when website loads

//----------START NEW GAME FOR MULTIPLAYER----------
function newGame() {
  $('button#startGame').on('click', function(){  //when you click on new game button,
    getPlayerNames(); //calls the function that prompts players to input their names
    $('td').empty()  //all td becomes empty
    $('body').css('cursor', 'url("http://s32.postimg.org/dyroxsmhd/guncursor.png"),auto'); //cursor is the gun cursor when game starts
    turnCount = 0;  //turn count starts from 0
    $('td').fadeTo('slow',1);  //makes all the ghosts appear, if they already aren't
    startClickingMP();  //activates the clicking board function
    $('button#startGame').off('click') //immediately disables new game button until game finish or winner declared
    $('button#resetBoard').off('click') //immediately disables play again button until game finish or winner declared
    $('button#startGameSP').off('click') //immediately disables new game button until game finish or winner declared
    $('button#resetBoardSP').off('click')//play again button is also disabled until game ends

    currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );  //displays current player's turn
    console.log(turnCount); //check if turn count is 0 when new game button is clicked on

    player1WinCount = 0; //resets player 1 win count
    player1WinText.text(player1name + " " +" " + player1WinCount +" : "); //updates the win count display
    player2WinCount = 0;  //resets player 2 win count
    player2WinText.text(player2WinCount + " " + player2name); //updates the win count display

    //more rules when you start a new game
    $('#rules').css({  //make rules disappear
      'display': 'none'
    })
    $('h1').css({  //make heading disappear
      'display': 'none'
    })
    $('#playerType').css({ //make player character images disappear
      'display': 'none'
    })
    $('h3#go').css({ //make the display current player turn appear (as earlier, when game finishes or winner declared, it hides it)
      'display': 'block',
      'visibility':'visible'
    })
    $('#winCount').css({
      'display': 'block'
    })
// Check just in case
    $('#player1WinText').css({
      'display': 'inline-block'
    })
    $('#player2WinText').css({
      'display': 'inline-block'
    })

    $('table').css({
      'display': 'block'  //by default it displays none, we making it appear when new game button is clicked on
    })
    $('button#resetBoard').css({ //by default it displays none, we making it appear when new game button is clicked on
      'display': 'inline-block'
    })
    $('button#resetBoardSP').css({ //by default it displays none, we making it appear when new game button is clicked on
      'display': 'inline-block'
    })
    $('button#resetScore').css({ //by default it displays none, we making it appear when new game button is clicked on
      'display': 'inline-block'
    })
  })
}
newGame();  //declare new game function straight away when website loads

//----------GRAB SPECIFIC PLAYER NAMES----------
var getPlayerNames = function(){
  player1name = prompt('Player 1, what is your name?');
  player2name = prompt('Player 2, what is your name?');

  //if no input, use default name, otherwise put player's name
  if (player1name === null){
    player1WinText.text("Player One Wins: " +player1WinCount);
    currentPlayerTurn.text("Go, Player One!");
    player1name = "Player One";
  }
  else {
    player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
    currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );

  }
  if (player2name === null) {
    player2WinText.text(player2WinCount + " " + "Player Two")
    currentPlayerTurn.text("Go, Player Two!");
    player2name = "Player Two";
  }
  else {
    player2WinText.text(player2WinCount + " " + player2name);
    currentPlayerTurn.text("Your Turn, Ninja " + player2name +"!" );
  }
}

//----------GRAB NAMES FOR VS AI----------
var getNamesforSP = function(){
  player1name = prompt('Player 1, what is your name?');
  player2name = prompt('Give the AI a name!');

  //if no input, use default name, otherwise put player's name
  if (player1name === null){
    player1WinText.text("Player One " + " " + player1WinCount + " : ");
    currentPlayerTurn.text("Go, Player One!");
    player1name = "Player One";
  }
  else {
    player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
    currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );

  }
  if (player2name === null) {
    player2WinText.text(player2WinCount + " " + "Computer");
    currentPlayerTurn.text("Go, Computer!");
    player2name = "Computer";
  }
  else {
    player2WinText.text(player2WinCount + " " +  player2name);
    currentPlayerTurn.text("Your Turn, Ninja " +  player2name +"!" );
  }
}

//----------PLAY MP AGAIN FUNCTION----------
function playAgain() {
  $('button#resetBoard').on('click', function(){   //When Play Again button is clicked on,
      $('td').empty() //empty all the td
      $('body').css('cursor', 'url("http://s32.postimg.org/dyroxsmhd/guncursor.png"),auto'); //shows gun cursor when game is restarted
      turnCount = 0;  //number of turns reset back to zero
      $('td').fadeTo('slow',1);  //earlier, when we clicked on td, it disappears, now when we click play again, it will re-appear
      startClickingMP(); //by default you cant click anything on the board unless function is activated, when we play again, activates clicking function
      console.log(turnCount); //check if turn counts resets back to 0
      $('#go').css({   //Re-displays current player turn, we hid it earlier when round finishes or winner is declared
        'visibility':'visible'
      })
      currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );

      $('button#startGame').off('click') //Once play again has been clicked, new game button disables until game ends,
      $('button#resetBoard').off('click')//play again button is also disabled until game ends
      $('button#resetBoardSP').off('click')//play again button is also disabled until game ends
      $('button#startGameSP').off('click') //immediately disables new game button until game finish or winner declared
  })
}

//----------PLAY SP AGAIN FUNCTION----------
function playSPAgain() {
  $('button#resetBoardSP').on('click', function(){   //When Play Again button is clicked on,
      $('td').empty() //empty all the td
      $('body').css('cursor', 'url("http://s32.postimg.org/dyroxsmhd/guncursor.png"),auto'); //shows gun cursor when game is restarted
      turnCount = 0;  //number of turns reset back to zero
      $('td').fadeTo('slow',1);  //earlier, when we clicked on td, it disappears, now when we click play again, it will re-appear
      startClickingSP(); //by default you cant click anything on the board unless function is activated, when we play again, activates clicking function
      console.log(turnCount); //check if turn counts resets back to 0
      $('#go').css({   //Re-displays current player turn, we hid it earlier when round finishes or winner is declared
        'visibility':'visible'
      })
      currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );

      $('button#startGame').off('click') //Once play again has been clicked, new game button disables until game ends,
      $('button#resetBoard').off('click')//play again button is also disabled until game ends
      $('button#resetBoardSP').off('click')//play again button is also disabled until game ends
      $('button#startGameSP').off('click') //immediately disables new game button until game finish or winner declared
  })
}

//----------RESET SCORE----------
$('button#resetScore').on('click', function(){
  player1WinCount = 0;
  player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
  player2WinCount = 0;
  player2WinText.text(player2WinCount + " " + player2name);
})

//----------CLICK FUNCTION FOR SP----------
var turnCount = 0;

function startClickingSP() {
  $('#board').find('td').on('click', function(){   //goes to the board, and finds td
    if(turnCount % 2 === 0) {     //if you're the first player, when you click,
      $('body').css('cursor', 'url("http://s32.postimg.org/p815ukclt/swordcursor.png"),auto'); //cursor will change to sword cursor
      gunSound(); //plays gun sound
      currentPlayerTurn.text("Your Turn, Ninja " + player2name +"!" );  //current player becomes player 2
      $(this).append('<img id="p1" src="http://s32.postimg.org/iy0b3td5d/explosion.png">');  //will insert an image/explosion on the td
      $(this).fadeTo('slow',0);  //the td you just clicked on disappears
      $(this).off('click');  //immediately after td disappears, this td becomes unclickable anymore
      // checkWinner(player1name);  //checks winning conditions everytime you click
      ifTie();  //checks if its turn 9 everytime you click, if it is, displays 'round finished'
      console.log(turnCount); //for debugging purposes. making sure turn count works
        if(turnCount===8){  //if it is the last turn, when clicked,
          $('#go').css({     //displaying current player's turn will disappear
            'visibility':'hidden'
          })
        }
      turnCount ++   //at the end of every click, turn count increases by 1
      if (checkWinner(player1name) != true) {    //if winnercheck function returns false when player1 plays (i.e does not win), THEN COMPUTER MAKES IT MOVE.
        setTimeout(computerMove, 1000);  //delays executing computermove function
      }
    }
  })
}

//----------CLICK FUNCTION FOR MP----------
var turnCount = 0;

function startClickingMP() {
  $('#board').find('td').on('click', function(){   //goes to the board, and finds td
    if(turnCount % 2 === 0) {     //if you're the first player, when you click,
      $('body').css('cursor', 'url("http://s32.postimg.org/p815ukclt/swordcursor.png"),auto'); //cursor will change to sword cursor
      gunSound(); //plays gun sound
      currentPlayerTurn.text("Your Turn, Ninja " + player2name +"!" );  //current player becomes player 2
      $(this).append('<img id="p1" src="http://s32.postimg.org/iy0b3td5d/explosion.png">');  //will insert an image/explosion on the td
      $(this).fadeTo('slow',0);  //the td you just clicked on disappears
      $(this).off('click');  //immediately after td disappears, this td becomes unclickable anymore
      checkWinner(player1name);  //checks winning conditions everytime you click
      ifTie();  //checks if its turn 9 everytime you click, if it is, displays 'round finished'
      console.log(turnCount); //for debugging purposes. making sure turn count works
        if(turnCount===8){  //if it is the last turn, when clicked,
          $('#go').css({     //displaying current player's turn will disappear
            'visibility':'hidden'
          })
        }
    }
    else{    //if you are player two,
      swordSound();
      $('body').css('cursor', 'url("http://s32.postimg.org/dyroxsmhd/guncursor.png"),auto'); //cursor changes to fun cursor
      currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );
      $(this).append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">') //inserts slash image to td
      $(this).fadeTo('fast',0);  //td disappears
      $(this).off('click'); //current td becomes unclickable
      checkWinner(player2name); //checks winner
      ifTie();  //checks tie
      console.log(turnCount);
      if(turnCount===8){
        ('#go').css({
          'visibility':'hidden'
        })
      }
    }
    turnCount ++   //at the end of every click, turn count increases by 1

    })
}

//----------CHECK WINNER WITH P1 IMAGE----------
function checkWinner(player){
  //check row 1
  if( $('#board').find('.a1').length !== '' ){   //goes to board and finds td with class a1 and check if it is empty. If it is NOT EMPTY,
    if( $('#board .1 .a1 #p1').length !=0 && $('#board .1 .a2 #p1').length !=0 && $('#board .1 .a3 #p1').length !=0 ){  //THEN, if a1's image length is not empty, a2's image length is not empty, and a3's image length is also not empty,
      alert(player +' is the Winner!'); //display winner

      $('#board').find('td').off('click'); //once displayed winner, makes the whole board unclickable, so no game
      $('#go').css({        //make the display of current turn invisible
        'visibility':'hidden'
      })

      playAgain(); //makes the play again button work again
      playSPAgain();
      newGame();  //makes the new game button work again
      newGameSP();

      if(player === player1name){  //if the argument passed to checkWinner function is player1name,
        player1WinCount++;  //increase player 1 win count by one
        player1WinText.text(player1name + " " +" " + player1WinCount +" : "); //and update the display of the wins
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2WinCount + " " + player2name);
      }
      return true  //makes checkwinner return a true value, so to prevent computer to move if this happens
    }
  }
  //check row 2
  if( $('#board').find('.b1').length !== '' ){
    if( $('#board .2 .b1 #p1').length !=0 && $('#board .2 .b2 #p1').length !=0 && $('#board .2 .b3 #p1').length !=0 ){
      alert(player +' is the Winner!');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

      playAgain();
      playSPAgain();
      newGame();
      newGameSP();


      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2WinCount + " " + player2name);
      }
      return true
    }
  }
  //check row 3
  if( $('#board').find('.c1').length !== '' ){
    if( $('#board .3 .c1 #p1').length !=0 && $('#board .3 .c2 #p1').length !=0 && $('#board .3 .c3 #p1').length !=0 ){
      alert(player +' is the Winner!');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

      playAgain();
      playSPAgain();
      newGame();
      newGameSP();

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2WinCount + " " + player2name);
      }
      return true
    }
  }
  //diagonal 1
  if( $('#board').find('.a1').length !== '' ){
    if( $('#board .1 .a1 #p1').length !=0 && $('#board .2 .b2 #p1').length !=0 && $('#board .3 .c3 #p1').length !=0 ){
      alert(player +' is the Winner!');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

      playAgain();
      playSPAgain();
      newGame();
      newGameSP();

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2WinCount + " " + player2name);
      }
      return true
    }
  }
  //diagonal 2
  if( $('#board').find('.a3').length !== '' ){
    if( $('#board .1 .a3 #p1').length !=0 && $('#board .2 .b2 #p1').length !=0 && $('#board .3 .c1 #p1').length !=0 ){
      alert(player +' is the Winner!');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

      playAgain();
      playSPAgain();
      newGame();
      newGameSP();

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2WinCount + " " + player2name);
      }
      return true
    }
  }
  //column 1
  if( $('#board').find('.a1').length !== '' ){
    if( $('#board .1 .a1 #p1').length !=0 && $('#board .2 .b1 #p1').length !=0 && $('#board .3 .c1 #p1').length !=0 ){
      alert(player +' is the Winner!');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

      playAgain();
      playSPAgain();
      newGame();
      newGameSP();


      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2WinCount + " " + player2name);
      }
      return true
    }
  }
  //column 2
  if( $('#board').find('.c1').length !== '' ){
    if( $('#board .1 .b2 #p1').length !=0 && $('#board .2 .b2 #p1').length !=0 && $('#board .3 .c2 #p1').length !=0 ){
      alert(player +' is the Winner!');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

      playAgain();
      playSPAgain();
      newGame();
      newGameSP();


      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2WinCount + " " + player2name);
      }
      return true
    }
  }
  //column 3
  if( $('#board').find('.c1').length !== '' ){
    if( $('#board .1 .a3 #p1').length !=0 && $('#board .2 .b3 #p1').length !=0 && $('#board .3 .c3 #p1').length !=0 ){
      alert(player +' is the Winner!');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

      playAgain();
      playSPAgain();
      newGame();
      newGameSP();


      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2WinCount + " " + player2name);
      }
      return true

    }
  }
  //CHECK WINNER WITH P2 IMAGE
    if( $('#board').find('.a1').length !== '' ){
      if( $('#board .1 .a1 #p2').length !=0 && $('#board .1 .a2 #p2').length !=0 && $('#board .1 .a3 #p2').length !=0 ){
        alert(player +' is the Winner!');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

        playAgain();
        playSPAgain();
        newGame();
        newGameSP();


        if(player === player1name){
          player1WinCount++;
          player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
        }
        else if (player == player2name){
          player2WinCount++;
          player2WinText.text(player2WinCount + " " + player2name);
        }
      }
    }
    //check row 2
    if( $('#board').find('.b1').length !== '' ){
      if( $('#board .2 .b1 #p2').length !=0 && $('#board .2 .b2 #p2').length !=0 && $('#board .2 .b3 #p2').length !=0 ){
        alert(player +' is the Winner!');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

        playAgain();
        playSPAgain();
        newGame();
        newGameSP();


        if(player === player1name){
          player1WinCount++;
          player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
        }
        else if (player == player2name){
          player2WinCount++;
          player2WinText.text(player2WinCount + " " + player2name);
        }
      }
    }
    //check row 3
    if( $('#board').find('.c1').length !== '' ){
      if( $('#board .3 .c1 #p2').length !=0 && $('#board .3 .c2 #p2').length !=0 && $('#board .3 .c3 #p2').length !=0 ){
        alert(player +' is the Winner!');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

        playAgain();
        playSPAgain();
        newGame();
        newGameSP();


        if(player === player1name){
          player1WinCount++;
          player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
        }
        else if (player == player2name){
          player2WinCount++;
          player2WinText.text(player2WinCount + " " + player2name);
        }
      }
    }
    //diagonal 1
    if( $('#board').find('.a1').length !== '' ){
      if( $('#board .1 .a1 #p2').length !=0 && $('#board .2 .b2 #p2').length !=0 && $('#board .3 .c3 #p2').length !=0 ){
        alert(player +' is the Winner!');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

        playAgain();
        playSPAgain();
        newGame();
        newGameSP();


        if(player === player1name){
          player1WinCount++;
          player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
        }
        else if (player == player2name){
          player2WinCount++;
          player2WinText.text(player2WinCount + " " + player2name);
        }
      }
    }
    //diagonal 2
    if( $('#board').find('.a3').length !== '' ){
      if( $('#board .1 .a3 #p2').length !=0 && $('#board .2 .b2 #p2').length !=0 && $('#board .3 .c1 #p2').length !=0 ){
        alert(player +' is the Winner!');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

        playAgain();
        playSPAgain();
        newGame();
        newGameSP();


        if(player === player1name){
          player1WinCount++;
          player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
        }
        else if (player == player2name){
          player2WinCount++;
          player2WinText.text(player2WinCount + " " + player2name);
        }
      }
    }
    //column 1
    if( $('#board').find('.a1').length !== '' ){
      if( $('#board .1 .a1 #p2').length !=0 && $('#board .2 .b1 #p2').length !=0 && $('#board .3 .c1 #p2').length !=0 ){
        alert(player +' is the Winner!');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

        playAgain();
        playSPAgain();
        newGame();
        newGameSP();


        if(player === player1name){
          player1WinCount++;
          player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
        }
        else if (player == player2name){
          player2WinCount++;
          player2WinText.text(player2WinCount + " " + player2name);
        }
      }
    }
    //column 2
    if( $('#board').find('.a2').length !== '' ){
      if( $('#board .1 .a2 #p2').length !=0 && $('#board .2 .b2 #p2').length !=0 && $('#board .3 .c2 #p2').length !=0 ){
        alert(player +' is the Winner!');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

        playAgain();
        playSPAgain();
        newGame();
        newGameSP();


        if(player === player1name){
          player1WinCount++;
          player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
        }
        else if (player == player2name){
          player2WinCount++;
          player2WinText.text(player2WinCount + " " + player2name);
        }
      }
    }
    //column 3
    if( $('#board').find('.a3').length !== '' ){
      if( $('#board .1 .a3 #p2').length !=0 && $('#board .2 .b3 #p2').length !=0 && $('#board .3 .c3 #p2').length !=0 ){
        alert(player +' is the Winner!');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

        playAgain();
        playSPAgain();
        newGame();
        newGameSP();


        if(player === player1name){
          player1WinCount++;
          player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
        }
        else if (player == player2name){
          player2WinCount++;
          player2WinText.text(player2WinCount + " " + player2name);
        }
      }
    }
}

//----------IF IT IS THE LAST TURN----------
function ifTie(){
  if (turnCount === 8){   //if it is turn 9,
    playAgain();   //re-activate Play Again button,  (other condition was if winner is declared, this will also be re-activated)
    playSPAgain();
    newGame();  //re-activate New Game Button
    newGameSP();

    alert('ROUND FINISHED!');  //display Round has finished.
  }
}

//----------GET COMPUTER TO MOVE---------
var a1 = $('#board .1 .a1')
var a2 = $('#board .1 .a2')
var a3 = $('#board .1 .a3')
var b1 = $('#board .2 .b1')
var b2 = $('#board .2 .b2')
var b3 = $('#board .2 .b3')
var c1 = $('#board .3 .c1')
var c2 = $('#board .3 .c2')
var c3 = $('#board .3 .c3')

function randomNumber(min, max){
  return Math.floor(Math.random() * 9)+1;
}

function computerMove() {
    var result = randomNumber(1, 9);
    if (result == 1){
      if( $('#board .a1').find('img').length == 0 ){
        console.log('a1');
        a1.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked
      }
      else {
        computerMove();
      }
    }
    else if (result == 2){
      if( $('#board .a2').find('img').length == 0 ){
        console.log('a2');
        a2.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked
      }
      else {
        computerMove();
      }
    }
    else if (result == 3){
      if( $('#board .a3').find('img').length == 0 ){
        console.log('a3');
        a3.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked
      }
      else {
        computerMove();
      }
    }
    else if (result == 4){
      if( $('#board .b1').find('img').length == 0 ){
        console.log('b1');
        b1.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked

      }
      else {
        computerMove();
      }
    }
    else if (result == 5){
      if( $('#board .b2').find('img').length == 0 ){
        console.log('b2');
        b2.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked

      }
      else {
        computerMove();
      }
    }
    else if (result == 6){
      if( $('#board .b3').find('img').length == 0 ){
        console.log('b3');
        b3.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked
      }
      else {
        computerMove();
      }
    }
    else if (result == 7){
      if( $('#board .c1').find('img').length == 0 ){
        console.log('c1');
        c1.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked
      }
      else {
        computerMove();
      }
    }
    else if (result == 8){
      if( $('#board .c2').find('img').length == 0 ){
        console.log('c2');
        c2.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked

      }
      else {
        computerMove();
      }
    }
    else if (result == 9){
      if( $('#board .c3').find('img').length == 0 ){
        console.log('c3');
        c3.append('<img id="p2" src="http://s32.postimg.org/wpvepx0b9/slash3.png">').fadeTo('fast',0);
        checkWinner(player2name);
        ifTie();
        turnCount ++
        swordSound(); //plays sword sound when clicked
      }
    }
    else {
      computerMove();
    }
    $('body').css('cursor', 'url("http://s32.postimg.org/dyroxsmhd/guncursor.png"),auto'); //cursor changes to fun cursor
    currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );
  }

  //----------CSS----------
  body.css({
    'text-align': 'center'
  })
  board.css({
    'width': '600px',
    'height':'600px',
    'margin': '0 auto',
    // 'border':'10px outset rgb(47,5,5)',
    // 'background': 'url("http://wood-center.gr/Photos/bg.jpg") no-repeat center center fixed'
  })

  $('tr').css({
    'display':'flex',
    'width':'600px',
    'height':'200px',
    'padding':'2px 5px 2p 5px'
  })

  $('td').css({
    'width':'200px',
    'height':'170px',
    'transition':'.2s ease-in-out',
    'margin': '10px',
    // 'border-radius': '100%',
    'background':'url("http://s32.postimg.org/me4ziufy9/tttghost3.png")',
    'background-position': 'center',
    'background-size': 'cover',
    // 'border-style': 'solid',
    // 'border-color':'brown',
    // 'background':'url("http://www.targetsoftware.co.uk/images/target.png")',
  })

  $('td').mouseover(function() {
    $(this).css({
      'transform' : 'rotate('+ 10 +'deg)',
      '-webkit-transform' : 'rotate(duration:1000, '+ 10 +'deg)',
      '-moz-transform' : 'rotate('+ 10 +'deg)',
      '-ms-transform' : 'rotate('+ 10 +'deg)',
      'transform' : 'rotate('+ 10 +'deg)'
      // 'background':'red',
      // 'border':'2px solid red'
    })
  })
  $('td').mouseout(function() {
    $(this).css({
      'background':'url("http://s32.postimg.org/me4ziufy9/tttghost3.png" no-repeat)',
      'background-position': 'center',
      'background-size': 'cover',
      'transform':'none',
      // 'border':'3px solid brown',
    })
  })

  $('img').css({
    'width':'150px',
    'height':'150px'
  })
