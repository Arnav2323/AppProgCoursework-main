# How to play
1 - "npm start" will begin the web server on port 8080.

2 - Enter the pet's name and press 'Set Name/Start Game' button.

3 - Click the feed pet, sleep pet and clean pet buttons to manage the pets attributes.

# Core Features (requied features)
## Pet stat management
How it works:
The pets stats slowly decrement over time, the players job is to manage these stats by feeding, cleaning and putting the pet to sleep. If any of these stats hit 0 the pet will die.

## Web server
The game is hosted on a web server using express.js.

## Pet displayed in app
The pet is displayed within the web application.

## Death screen
When the pet dies the player is notified and is shown how long the pet survived in seconds, minutes, hours and days.
Note: All of these values are rounded so seconds are the most accurate.

# Key Features

## Console
How it works:
To access the console click the "Open Console" button. To close the console click the "Close Console" button. To use the console, type "help" to get a list of commands with a small description of each and how to use them. Once a player has used the console commands on their game, the save will not be valid, so in the future, once leaderboards have been added, people can't cheat. This is achieved by storing a hasCheated boolean in the player's stats and then setting this to true once the player uses console commands.

Rationale: 
A console is a great tool that is used for the development of the game. However, a console is also fun for users as it allows experiment with the game and try different ways of playing the same game.

# Mood based facial expressions
How it works:
The pet cat animations change depending on the pet's happiness. Once the pet's happiness reaches a certain threshold, its mood/facial expression changes.

Rationale:
Mood-based facial expressions make the pet feel more real, making the game more engaging for the player.

# Upcoming Features

## Leaderboard 
In the future, I plan to add leaderboards to make the game more fun and competitive. Players score will be how long their put survived.

## Workshop
I plan to add a workshop where people can create and upload their own pets and animations, making the game much more customisable. Users will also be able to download other players' creations.

# Refrence
[MDN](https://developer.mozilla.org/en-US/)