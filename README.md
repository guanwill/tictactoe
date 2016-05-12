#WEEK 3 TIC TAC TOE

###Task
* Create a functional tic tac toe game using HTML, CSS, and Javascript + Jquery

###Accomplishments
* Designed the basic layout of tic tac toe using jQuery - based on the structure of pre-assignment homework: Battleships
* Completed the checkWinner function
* Added sound effects and cursor change
* Created a single player mode against AI -  Easy mode
* Merging single player and multiplayer mode together
* Created a unique tic-tac-toe game that is vastly different from the generic

###Challenges
* Getting the checkWinner function to work by comparing jQuery objects -  checks if an object has an image
* Missed opportunity to learn about 9- bit magic numbers to check winning condition
* Figuring out the conditions for the Computer to move
* Merging Single Player and Multiplayer together
* Making all the buttons and headings all linked and functioning properly together

###Immediate Attention
* Game sometimes breaks if you multi- click same cell very quickly
* Game sometimes breaks if you start new single player game or multiplayer game and it prompts for your name twice
* Game sometimes breaks if you switch from single player to multiplayer and vice versa
* Make only the 'Play SP Again' button appear while playing single player mode, and disappear while not. Instead, it shows both 'Play SP Again' and 'Play MP Again' regardless of which mode you're in. Unable to map a specific 'Play Again' button to the specific 'Mode'.

###Future Considerations
* Code is not dry -  could use more for loops
* AI -  Hard Mode instead of using math.random to generate moves
* Let users choose token/character and determine who goes first
* Add additional rows and columns which makes the game more interesting as you have to remember your positions more

###How to Cheat
* If Player One name is the same as Player Two's name, all the points won gets allocated to player one, even if player two wins.

###Project Thought Process
1. For each click, it will switch players and does a bunch of stuff
2. Figure out how to check for winner
3. Add new game, reset, win count buttons and functions
4. Add AI

###Design Thought Process
1. I changed the cells' shape from square to circle immediately and see what will happen from there.
2. Thought of possible sceneries where there are 3x3 circles.
3. Circles reminded me of targets so I created a ninja-star-throwing tic tac tow game. Instead of appending X and O, it throws a star image to the cell.
4. Then I wanted animation and remembered FadeTo. First thing that came into mind was a disappearing ghost.
5. I wanted to build on that idea so I thought of creating an RPG-themed tic tac toe game and thus, giving players a character, changing their cursor to reflect their weapons, and added sound effects.

###My JS Sections Summarised
* Creating Game Heading
* Creating Board/Grid
* Creating New Game Button for SP - New Game for MP Function - Click Function for MP
* Creating Play Again Button for SP - Play SP Again Function - Click Function for SP
* Creating New Game Button for MP - New Game for MP Function - Click Function for MP
* Creating Play Again Button for MP - Play MP again Function - Click Function for MP
* Creating Reset Score Button - Reset Score Function
* Display Current Player’s Turn
* Creating Win Counts
* Creating Characters for each player
* Show the Rules
* Adding Click Sound Effects
* Default Player Names
* Grab Names for SP
* Grab Names for MP
* Check if P1 Wins
* Check if P2 Wins
* Check if Tie
