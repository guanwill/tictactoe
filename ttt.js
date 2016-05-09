//----------HTML ELEMENTS-----------
var body = $('body');
//HEADING
var welcome = $('<h1>').text("TIC TAC TOE");
body.append(welcome);

//DEFAULT PLAYER NAMES
var player1name = 'Player One';
var player2name = 'Player Two';
var player1nameText = $('<h3>').text(player1name);
body.append(player1nameText);
var player2nameText = $('<h3>').text(player2name);
body.append(player2nameText);

//GET CURRENT PLAYER TURN
var currentPlayerTurn = $('<h3>').text("Go, " + player1name);
body.append(currentPlayerTurn);

//CREATING BOARD/GRID
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

var startGame = $('<button>')
.attr('id', 'startGame')
.attr('type', 'button')
.text('START PLAYING!');
body.append(startGame);

var resetBoard = $('<button>')
.attr('id', 'resetBoard')
.attr('type', 'button')
.text('PLAY AGAIN!');
body.append(resetBoard);

var resetScore = $('<button>')
.attr('id', 'resetScore')
.attr('type', 'button')
.text('Reset Score');
body.append(resetScore);
//----------------JAVASCRIPT------------------------



//CLICK FUNCTION TO INSERT MARKET AND CALLING THE CHECKWINNER FUNCTION EVERY TIME
var turnCount = 0;

function startClicking() {
  $('#board').find('td').on('click', function(){
  if(turnCount % 2 === 0) {
    currentPlayerTurn.text("Go, " + player2name);
    $(this).text('X');
    $(this).off('click');
    checkWinner(player1name);
    ifTie();
    console.log(turnCount);
  }
  else{
    currentPlayerTurn.text("Go, " + player1name);
    $(this).text('O');
    $(this).off('click');
    checkWinner(player2name);
    ifTie();
    console.log(turnCount);
  }
  turnCount ++
  })
}
startClicking();

//GETTING PLAYER WINS;
var player1WinCount = 0;
var player2WinCount = 0;


var player1WinText = $('<h3>').text(player1name + " Total Wins: " +player1WinCount);
body.append(player1WinText);
var player2WinText = $('<h3>').text(player2name + " Total Wins: " + player2WinCount);
body.append(player2WinText);

//CHECK WINNER
function checkWinner(player){
  //check row 1
  if( $('#board').find('.a1').text() !== '' ){
    if( $('#board').find('.a1').text() === $('#board').find('.a2').text() && $('#board').find('.a1').text() === $('#board').find('.a3').text() ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " Total Wins: " +player1WinCount);
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2name + " Total Wins: " +player2WinCount);
      }
    }
  }
  //check row 2
  if( $('#board').find('.b1').text() !== '' ){
    if( $('#board').find('.b1').text() === $('#board').find('.b2').text() && $('#board').find('.b1').text() === $('#board').find('.b3').text() ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " Total Wins: " +player1WinCount);
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2name + " Total Wins: " +player2WinCount);
      }
    }
  }
  //check row 3
  if( $('#board').find('.c1').text() !== '' ){
    if( $('#board').find('.c1').text() === $('#board').find('.c2').text() && $('#board').find('.c1').text() === $('#board').find('.c3').text() ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " Total Wins: " +player1WinCount);
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2name + " Total Wins: " +player2WinCount);
      }
    }
  }
  //diagonal 1
  if( $('#board').find('.a1').text() !== '' ){
    if( $('#board').find('.a1').text() === $('#board').find('.b2').text() && $('#board').find('.a1').text() === $('#board').find('.c3').text() ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " Total Wins: " +player1WinCount);
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2name + " Total Wins: " +player2WinCount);
      }
    }
  }
  //diagonal 2
  if( $('#board').find('.a3').text() !== '' ){
    if( $('#board').find('.a3').text() === $('#board').find('.b2').text() && $('#board').find('.a3').text() === $('#board').find('.c1').text() ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " Total Wins: " +player1WinCount);
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2name + " Total Wins: " +player2WinCount);
      }
    }
  }
  //column 1
  if( $('#board').find('.a1').text() !== '' ){
    if( $('#board').find('.a1').text() === $('#board').find('.b1').text() && $('#board').find('.a1').text() === $('#board').find('.c1').text() ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " Total Wins: " +player1WinCount);
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2name + " Total Wins: " +player2WinCount);
      }
    }
  }
  //column 2
  if( $('#board').find('.a2').text() !== '' ){
    if( $('#board').find('.a2').text() === $('#board').find('.b2').text() && $('#board').find('.a2').text() === $('#board').find('.c2').text() ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " Total Wins: " +player1WinCount);
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2name + " Total Wins: " +player2WinCount);
      }
    }
  }
  //column 3
  if( $('#board').find('.a3').text() !== '' ){
    if( $('#board').find('.a3').text() === $('#board').find('.b3').text() && $('#board').find('.a3').text() === $('#board').find('.c3').text() ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');

      if(player === player1name){
        player1WinCount++;
        player1WinText.text(player1name + " Total Wins: " +player1WinCount);
      }
      else if (player == player2name){
        player2WinCount++;
        player2WinText.text(player2name + " Total Wins: " +player2WinCount);
      }
    }
  }
}

// IF TIE
function ifTie(){
  if (turnCount === 8){
    alert('tie!');
  }
}

//RESET BOARD TO PLAY AGAIN
$('button#resetBoard').on('click', function(){
    $('td').empty()
    turnCount = 0;
    currentPlayerTurn.text("Go, " + player1name);
    startClicking();
    console.log(turnCount);
})

//RESET SCORE
$('button#resetScore').on('click', function(){
  player1WinCount = 0;
  player1WinText.text(player1name + " Total Wins: " +player1WinCount);
  player2WinCount = 0;
  player2WinText.text(player2name + " Total Wins: " +player2WinCount);
})

//START GAME
$('button#startGame').on('click', function(){
  getPlayerNames();
  startClicking();
})

//GRAB SPECIFIC PLAYER NAMES WHEN YOU CLICK START GAME
var getPlayerNames = function(){
  player1name = prompt('Player 1, what is your name?');
  player2name = prompt('Player 2, what is your name?');

  //IF NO INPUT, USE DEFAULT NAME, OTHERWISE PUT PLAYER'S NAME
  if (player1name == null){
    player1nameText.text('Player One');
    player1WinText.text("Player One Total Wins: " +player1WinCount);
    currentPlayerTurn.text("Go, Player One!");
  }
  else {
    player1nameText.text('Player One: ' + player1name);
    player1WinText.text(player1name + " Total Wins: " +player1WinCount);
    currentPlayerTurn.text("Go, " + player1name);

  }
  if (player2name == null) {
    player2nameText.text('Player Two');
    player2WinText.text("Player Two Total Wins: " + player2WinCount);
    currentPlayerTurn.text("Go, Player Two!");

  }
  else {
    player2nameText.text('Player Two: ' + player2name);
    player2WinText.text(player2name + " Total Wins: " + player2WinCount);
    currentPlayerTurn.text("Go, " + player2name);
  }
}

//-------------CSS---------------
body.css({
  'text-align': 'center'
})
board.css({
  'width': '600px',
  'height':'600px',
  'border-style': 'double',
  'border-color': 'black',
  'margin': '0 auto'
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
  'border-style': 'solid',
  'border-color':'black',
  'transition':'.2s ease-in-out',
  'margin': '10px'
})

$('td').mouseover(function() {
  $(this).css({
    'background-color':'red',
    'transform': 'scale(1.15)',
    'border':'2px solid orange'
  })
})
$('td').mouseout(function() {
  $(this).css({
    'background-color':'transparent',
    'transform':'none',
    'border':'3px solid black',
  })
})

$('img').css({
  'width':'150px',
  'height':'150px'
})


// ---------------EXTRA FEATURES---------------

//WIRE FRAMING - sketching of what is needed/sketch of the design, etc
//player1winCount
//player2winCount
//timer
//new game button/ refresh button
//display name
