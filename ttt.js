//----------HTML ELEMENTS-----------
var body = $('body');
//HEADING
var welcome = $('<h1>')
.text("Tic Tac Throw")
.css({
  'font-family': 'Dancing Script, cursive'
})
body.append(welcome);

//DEFAULT PLAYER NAMES
var player1name = 'Player One';
var player2name = 'Player Two';
// var player1nameText = $('<h3>').attr('id','player1nameText').text(player1name);
// body.append(player1nameText);
// var player2nameText = $('<h3>').attr('id', 'player2nameText').text(player2name);
// body.append(player2nameText);

//GET CURRENT PLAYER TURN
var currentPlayerTurn = $('<h3>')
.attr('id', 'go').text("Your Turn, Hokage " + player1name +"!" )
.css({
  'font-family': 'Montserrat, cursive'
})
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
.text('NEW GAME');
body.append(startGame);

var resetBoard = $('<button>')
.attr('id', 'resetBoard')
.attr('type', 'button')
.text('PLAY AGAIN!');
body.append(resetBoard);

var resetScore = $('<button>')
.attr('id', 'resetScore')
.attr('type', 'button')
.text('RESET SCORE');
body.append(resetScore);


//----------------JAVASCRIPT------------------------



//CLICK FUNCTION TO INSERT MARKET AND CALLING THE CHECKWINNER FUNCTION EVERY TIME
var turnCount = 0;

function startClicking() {
  $('#board').find('td').on('click', function(){
  if(turnCount % 2 === 0) {
    currentPlayerTurn.text("Your Turn, Ninja " + player2name +"!" );
    // $(this).text('X');
    $(this).append('<img id="p1" src="http://s32.postimg.org/ic45bivr5/kisekae_2_prop_ninja_star_by_zebuta_d8ru0p8.png">')
    $(this).off('click');
    checkWinner(player1name);
    ifTie();
    console.log(turnCount);
      if(turnCount===8){
        $('#go').css({
          'visibility':'hidden'
        })
      }
  }
  else{
    currentPlayerTurn.text("Your Turn, Hokage " + player1name +"!" );
    // $(this).text('O');
    $(this).append('<img id="p2" src="http://s32.postimg.org/wbfljhzk1/shuriken_1.png">')
    $(this).off('click');
    checkWinner(player2name);
    ifTie();
    if(turnCount===8){
      ('#go').css({
        'visibility':'hidden'
      })
    }
    console.log(turnCount);
  }
  turnCount ++
  })
}

//GETTING PLAYER WINS;
var player1WinCount = 0;
var player2WinCount = 0;

var winCount = $('<div>').attr('id', 'winCount');
var player1WinText = $('<h3>')
.attr('id','player1WinText')
.text(player1name + " " +" " + player1WinCount +" : ")
.css({
  'font-family': 'Montserrat, cursive'
})
winCount.append(player1WinText);

var player2WinText = $('<h3>')
.attr('id','player2WinText')
.text(player2name + " Wins: " + player2WinCount)
.css({
  'font-family': 'Montserrat, cursive'
})
winCount.append(player2WinText);
body.append(winCount);

//CHECK WINNER WITH P1 IMAGE
function checkWinner(player){
  //check row 1
  if( $('#board').find('.a1').length !== '' ){
    if( $('#board .1 .a1 #p1').length !=0 && $('#board .1 .a2 #p1').length !=0 && $('#board .1 .a3 #p1').length !=0 ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

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
    if( $('#board .2 .b1 #p1').length !=0 && $('#board .2 .b2 #p1').length !=0 && $('#board .2 .b3 #p1').length !=0 ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

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
    if( $('#board .3 .c1 #p1').length !=0 && $('#board .3 .c2 #p1').length !=0 && $('#board .3 .c3 #p1').length !=0 ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

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
    if( $('#board .1 .a1 #p1').length !=0 && $('#board .2 .b2 #p1').length !=0 && $('#board .3 .c3 #p1').length !=0 ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

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
    if( $('#board .1 .a3 #p1').length !=0 && $('#board .2 .b2 #p1').length !=0 && $('#board .3 .c1 #p1').length !=0 ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

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
    if( $('#board .1 .a1 #p1').length !=0 && $('#board .2 .b1 #p1').length !=0 && $('#board .3 .c1 #p1').length !=0 ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

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
  if( $('#board').find('.c1').length !== '' ){
    if( $('#board .1 .b2 #p1').length !=0 && $('#board .2 .b2 #p1').length !=0 && $('#board .3 .c2 #p1').length !=0 ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

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
  if( $('#board').find('.c1').length !== '' ){
    if( $('#board .1 .a3 #p1').length !=0 && $('#board .2 .b3 #p1').length !=0 && $('#board .3 .c3 #p1').length !=0 ){
      alert(player +' is WINNER');

      $('#board').find('td').off('click');
      $('#go').css({
        'visibility':'hidden'
      })

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
  //CHECK WINNER WITH P2 IMAGE
    if( $('#board').find('.a1').length !== '' ){
      if( $('#board .1 .a1 #p2').length !=0 && $('#board .1 .a2 #p2').length !=0 && $('#board .1 .a3 #p2').length !=0 ){
        alert(player +' is WINNER');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

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
        alert(player +' is WINNER');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

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
        alert(player +' is WINNER');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })
        $('#go').css({
          'visibility':'hidden'
        })

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
        alert(player +' is WINNER');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

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
        alert(player +' is WINNER');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

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
        alert(player +' is WINNER');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

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
    if( $('#board').find('.c1').length !== '' ){
      if( $('#board .1 .b2 #p2').length !=0 && $('#board .2 .b2 #p2').length !=0 && $('#board .3 .c2 #p2').length !=0 ){
        alert(player +' is WINNER');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

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
    if( $('#board').find('.c1').length !== '' ){
      if( $('#board .1 .a3 #p2').length !=0 && $('#board .2 .b3 #p2').length !=0 && $('#board .3 .c3 #p2').length !=0 ){
        alert(player +' is WINNER');

        $('#board').find('td').off('click');
        $('#go').css({
          'visibility':'hidden'
        })

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



// // IF TIE
function ifTie(){
  if (turnCount === 8){
    alert('ROUND FINISHED!');
  }
}

//RESET BOARD TO PLAY AGAIN
$('button#resetBoard').on('click', function(){
    $('td').empty()
    turnCount = 0;
    currentPlayerTurn.text("Your Turn, Hokage " + player1name +"!" );
    startClicking();
    console.log(turnCount);

    $('#go').css({
      'visibility':'visible'
    })
})

//RESET SCORE
$('button#resetScore').on('click', function(){
  player1WinCount = 0;
  player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
  player2WinCount = 0;
  player2WinText.text(player2WinCount + " " + player2name);
})

//START GAME
$('button#startGame').on('click', function(){
  getPlayerNames();
  $('td').empty()
  turnCount = 0;
  currentPlayerTurn.text("Your Turn, Hokage " + player1name +"!" );
  console.log(turnCount);
  player1WinCount = 0;
  player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
  player2WinCount = 0;
  player2WinText.text(player2WinCount + " " + player2name);
  startClicking();

  $('h1').css({
    'display': 'none'
  })
  $('h3#go').css({
    'display': 'block'
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
    'display': 'block'
  })
  $('button#resetBoard').css({
    'display': 'inline-block'
  })
  $('button#resetScore').css({
    'display': 'inline-block'
  })
})

//GRAB SPECIFIC PLAYER NAMES WHEN YOU CLICK START GAME
var getPlayerNames = function(){
  player1name = prompt('Player 1, what is your name?');
  player2name = prompt('Player 2, what is your name?');

  //IF NO INPUT, USE DEFAULT NAME, OTHERWISE PUT PLAYER'S NAME
  if (player1name == null){
    // player1nameText.text('Player One');
    player1WinText.text("Player One Wins: " +player1WinCount);
    currentPlayerTurn.text("Go, Player One!");
    player1name = "Player One";
  }
  else {
    // player1nameText.text('Player One: ' + player1name);
    player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
    currentPlayerTurn.text("Your Turn, Hokage " + player1name +"!" );

  }
  if (player2name == null) {
    // player2nameText.text('Player Two');
    player2WinText.text("Player Two Wins: " + player2WinCount);
    currentPlayerTurn.text("Go, Player Two!");
    player2name = "Player Two"
  }
  else {
    // player2nameText.text('Player Two: ' + player2name);
    player2WinText.text(player2name + " Wins: " + player2WinCount);
    currentPlayerTurn.text("Your Turn, Ninja " + player2name +"!" );
  }
}

//-------------CSS---------------
body.css({
  'text-align': 'center'
})
board.css({
  'width': '600px',
  'height':'600px',
  'border':'10px outset rgb(47,5,5)',
  'margin': '0 auto',
  'background': 'url("http://wood-center.gr/Photos/bg.jpg") no-repeat center center fixed'
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
  'border-color':'brown',
  'transition':'.2s ease-in-out',
  'margin': '10px',
  'border-radius': '100%',
  'background':'url("http://www.targetsoftware.co.uk/images/target.png")',
  'background-position': 'center',
})

$('td').mouseover(function() {
  $(this).css({
    // 'background':'red',
    'transform': 'scale(1.05)',
    'border':'2px solid red'
  })
})
$('td').mouseout(function() {
  $(this).css({
    'background':'url("http://www.targetsoftware.co.uk/images/target.png")',
    'background-position': 'center',
    'transform':'none',
    'border':'3px solid brown',
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
