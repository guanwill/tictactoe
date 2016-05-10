//----------HTML ELEMENTS-----------
var body = $('body');
//HEADING
var welcome = $('<h1>')
.text("Tic Tac Attack")
.css({
  'font-family': 'Dancing Script, cursive'
})
body.append(welcome);

//DEFAULT PLAYER NAMES
var player1name = "";
var player2name = "";
// var player1nameText = $('<h3>').attr('id','player1nameText').text(player1name);
// body.append(player1nameText);
// var player2nameText = $('<h3>').attr('id', 'player2nameText').text(player2name);
// body.append(player2nameText);

//GET CURRENT PLAYER TURN
var currentPlayerTurn = $('<h3>')
.attr('id', 'go').text("Your Turn, Gunslinger " + player1name +"!" )
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
    // $(this).append('<img id="p1" src="http://s32.postimg.org/ic45bivr5/kisekae_2_prop_Ninja_star_by_zebuta_d8ru0p8.png">');
    $(this).append('<img id="p1" src="http://s32.postimg.org/iy0b3td5d/explosion.png">');

    $(this).fadeTo('slow',0);


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
    currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );
    // $(this).text('O');
    $(this).append('<img id="p2" src="http://s32.postimg.org/ogqmo2ytx/slash2.png">')
    $(this).fadeTo('fast',0);

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
.text(player2WinCount + " " + player2name)
.css({
  'font-family': 'Montserrat, cursive'
})
winCount.append(player2WinText);
body.append(winCount);

//SHOW PLAYER CHARACTER
var playerType = $('<div>').attr('id', 'playerType');
var playerType1 = $('<img id="playerType1" src="http://s32.postimg.org/rp9mswl75/gunman.png">')
var vs = $('<img id="vs" src="http://s32.postimg.org/93ilao2j5/vs1.png">')
var playerType2 = $('<img id="playerType2" src="http://s32.postimg.org/9oojcbx3l/ninja.png">')
playerType.append(playerType1, vs, playerType2);
body.append(playerType);


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
    if( $('#board').find('.a2').length !== '' ){
      if( $('#board .1 .a2 #p2').length !=0 && $('#board .2 .b2 #p2').length !=0 && $('#board .3 .c2 #p2').length !=0 ){
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
    $('td').fadeTo('slow',1);

    currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );
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
  $('td').fadeTo('slow',1);  //made all the ghosts reappear

  currentPlayerTurn.text("Your Turn, Gunslinger " + player1name +"!" );
  console.log(turnCount);
  player1WinCount = 0;
  player1WinText.text(player1name + " " +" " + player1WinCount +" : ");
  player2WinCount = 0;
  player2WinText.text(player2WinCount + " " + player2name);
  startClicking();

  $('h1').css({
    'display': 'none'
  })
  $('#playerType').css({
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
    player2WinText.text("Player Two Wins: " + player2WinCount);
    currentPlayerTurn.text("Go, Player Two!");
    player2name = "Player Two";
  }
  else {
    player2WinText.text(player2WinCount + " " + player2name);
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
  // 'border':'10px outset rgb(47,5,5)',
  'margin': '0 auto',
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
  // 'border-style': 'solid',
  // 'border-color':'brown',
  'transition':'.2s ease-in-out',
  'margin': '10px',
  'border-radius': '100%',
  // 'background':'url("http://www.targetsoftware.co.uk/images/target.png")',
  'background':'url("http://s32.postimg.org/5u0nxi0r5/TRANSPARENT_GH.png")',
  'background-position': 'center',
  'background-size': 'cover',

})

$('td').mouseover(function() {
  $(this).css({
    // 'background':'red',
    'transform': 'scale(1.05)',
    // 'border':'2px solid red'
  })
})
$('td').mouseout(function() {
  $(this).css({
    'background':'url("http://s32.postimg.org/5u0nxi0r5/TRANSPARENT_GH.png" no-repeat)',
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


// ---------------EXTRA FEATURES---------------

//WIRE FRAMING - sketching of what is needed/sketch of the design, etc
//timer
