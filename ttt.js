//----------HTML ELEMENTS-----------
var body = $('body');

var welcome = $('<h1>').text("TIC TAC TOE");
body.append(welcome);
var place = $('<h3>').text("Get Ready!");
body.append(place);

var board = $('<table>').attr('id','board');
body.append(board);

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

//WINNER Text
var winner = $('<div>').attr('id', 'winner');
var winnerText = $('<h1>').text("WINNER !!");
winner.append(winnerText);
body.append(winner);

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

winner.css({
  'display':'none'
})

//----------------JAVASCRIPT------------------------

//CLICK FUNCTION to insert X..may need another one for Os
// $('.row > .column').on('click', function(){
//   $(this).append('<img src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Military-Battleship-icon.png" alt="">')
//     .css('border-color', 'red');
// });


var turnCount = 0;
var player1name = prompt('Player 1, what is your name?');
var player2name = prompt('Player 2, what is your name?');



//click function to insert X for player 1
$('#board').find('td').on('click', function(){
  if(turnCount % 2 === 0) {
    $(this).text('X');
    checkWinner(player1name);
  }
  else{
    $(this).text('O');
    checkWinner(player2name);
  }
  turnCount ++

  // console.log($('#board').find('.a1').text());
  // console.log($('#board').find('.a2').text());
  // console.log($('#board').find('.a3').text());
  // console.log(player1name);
  // console.log(player2name);
})

//check victory of player
function checkWinner(player){
  //check row 1
  if( $('#board').find('.a1').text() !== '' ){
    if( $('#board').find('.a1').text() === $('#board').find('.a2').text() && $('#board').find('.a1').text() === $('#board').find('.a3').text() ){
      console.log(player +' is WINNER');
    }
  }
  //check row 2
  if( $('#board').find('.b1').text() !== '' ){
    if( $('#board').find('.b1').text() === $('#board').find('.b2').text() && $('#board').find('.b1').text() === $('#board').find('.b3').text() ){
      console.log(player +' is WINNER');
    }
  }
  //check row 3
  if( $('#board').find('.c1').text() !== '' ){
    if( $('#board').find('.c1').text() === $('#board').find('.c2').text() && $('#board').find('.c1').text() === $('#board').find('.c3').text() ){
      console.log(player +' is WINNER');
    }
  }
  //diagonal 1
  if( $('#board').find('.a1').text() !== '' ){
    if( $('#board').find('.a1').text() === $('#board').find('.b2').text() && $('#board').find('.a1').text() === $('#board').find('.c3').text() ){
      console.log(player +' is WINNER');
    }
  }
  //diagonal 2
  if( $('#board').find('.a3').text() !== '' ){
    if( $('#board').find('.a3').text() === $('#board').find('.b2').text() && $('#board').find('.a3').text() === $('#board').find('.c1').text() ){
      console.log(player +' is WINNER');
    }
  }
  //column 1
  if( $('#board').find('.a1').text() !== '' ){
    if( $('#board').find('.a1').text() === $('#board').find('.b1').text() && $('#board').find('.a1').text() === $('#board').find('.c1').text() ){
      console.log(player +' is WINNER');
    }
  }
  //column 2
  if( $('#board').find('.a2').text() !== '' ){
    if( $('#board').find('.a2').text() === $('#board').find('.b2').text() && $('#board').find('.a2').text() === $('#board').find('.c2').text() ){
      console.log(player +' is WINNER');
    }
  }
  //column 3
  if( $('#board').find('.a3').text() !== '' ){
    if( $('#board').find('.a3').text() === $('#board').find('.b3').text() && $('#board').find('.a3').text() === $('#board').find('.c3').text() ){
      console.log(player +' is WINNER');
    }
  }
}

// ---------------EXTRA FEATURES---------------
var player1DisplayName = $('<h3>').text("Get Ready!");
body.append(player1DisplayName);

//WIRE FRAMING - sketching of what is needed/sketch of the design, etc
//player1winCount
//player2winCount
//timer
//new game button/ refresh button
//display name
