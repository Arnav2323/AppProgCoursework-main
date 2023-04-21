**Features**

# Set Name / Start Game
To begin playing the game, enter the pet's name and press enter or click the "Set Name/Start Game" button.

# Manage Pets Stats
To manage the pets stats you have three buttons. "Feed Pet", "Sleep Pet" and "Clean Pet". These stats decrement over time its the players responability to keep these above 0. These 3 stats form the happiness stat for the pet. If any of the stats hit 0 the pets dies.

# Load Game
To load a save, click the 'Load Game' button. This will load all relevant stats and continue the game from where the player saved.

# Save Game
To save the game, click the 'Save Game' button. This will store the relevant stats in local storage so the player can come back at a later date 
and continue playing.

# Console
To access the console click the "Open Console" button. To close the console click the "Close Console" button. To use the console, type "help" to get a list of commands with a small description of each and how to use them. Once a player has used the console commands on their game, the save will not be valid, so in the future, once leaderboards have been added, people can't cheat. This is achieved by storing a hasCheated boolean in the player's stats and then setting this to true once the player uses console commands.

