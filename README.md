#WEEK 3 TIC TAC TOE

###Task
* Create a functional tic tac toe game using HTML, CSS, and Javascript + Jquery

###Accomplishments
* Designed the basic layout of tic tac toe using jQuery - based on the structure of pre- assignment homework: Battleships
* Completed the checkWinner function
* added sound effects and cursor change
* Created a single player mode against AI -  Easy mode
* Game now has a single player and multiplayer mode
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
