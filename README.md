#WEEK 3 TIC TAC TOE

##Task
-Create a functional tic tac toe game

##Thought Process

1. For each click, it will switch players and does a bunch of stuff
2. Figure out how to check for winner
3. Add new game, reset, win count buttons and functions
4. Add AI

##Day 1
###Accomplishments
-Designed the basic layout of tic tac toe - based on the structure of pre-assignment homework: Battleships
*Completed the checkwinner function
-added basic CSS

###Challenges
-Getting the checkWinner function to work by comparing jquery objects - checks if an object has an image

##Day 2
###Accomplishments
-Made sure winning conditions are working properly
-Added lots and lots of CSS
-added sound effects and cursor change

###Challenges
-Missed opportunity to learn about 9-bit magic numbers to check winning condition

##Day 3
###Accomplishments
-Made AI - Easy mode
-Game now has a single player and multiplayer mode
-Further changed the design of tic tac toe

###Challenges
-Figuring out the conditions for the Computer to move
-Merging Single Player and Multiplayer together
-Making all the buttons and headings all linked and functioning properly together

##Day 4
###Accomplishments
-Fixed computerMove function
-Fixed button positions

###Challenges
-Using Markdown for the first time for this project

#Immediate Attention
-Game breaks sometimes if you multi-click same cell very quickly
-Game breaks sometimes if you start new single player game or multiplayer game and it prompts for your name twice
-Game breaks sometimes if you switch from single player to multiplayer and vice versa
-Make only the 'Play SP Again' button appear while _playing_ single player mode, and disappear while not. Instead, it shows both 'Play SP Again' and 'Play MP Again' regardless of which mode you're in. Suppose to call a specific button appear when there is a winner but because both mode uses the same checkWinner function, cannot map a specific 'Play Again' button to the specific 'Mode'.

###Future Considerations
-Code is not dry - could use more for loops
-AI - Hard Mode instead of using math.random to generate moves

##Design Thought Process
-Immediately, I changed cells shape from square to circle. (Square is too generic). I wanted my tic tac toe to look vastly different, to stand out amongst all tic tac toes.
-Thought of possible sceneries where there are 3x3 circles.
-Circles reminded me of targets so I created a ninja-star-throwing tic tac tow game. Instead of appending X and O, it throws a star image to the cell.
-Then I wanted animation and remembered FadeTo. That immediately triggered a scene of a ghost disappearing in my vision.
-I wanted to build on that idea so I thought of creating an RPG-themed tic tac toe game and thus, giving players a character, changing their cursor to reflect their weapons, and added sound effects.
