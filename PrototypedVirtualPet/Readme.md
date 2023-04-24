# How to play
1 - "npm start" will begin the web server on port 8080.

2 - Enter the pet's name and press 'Set Name/Start Game' button.

3 - Click the feed pet, sleep pet and clean pet buttons to manage the pets attributes.

# Core Features (required features)
## Pet stat management
How it works:
The pets stats slowly decrement over time, and the players job is to manage these stats by feeding, cleaning and putting the pet to sleep. If any of these stats hit 0, the pet will die. The happiness stat is calculated using the pet's food, sleep and cleanliness stats.

## Web server
The game is hosted on a web server using express.js.

## Pet displayed in the app
The pet is displayed within the web application.

## Death screen
When the pet dies, the player is notified and is shown how long the pet survived in seconds, minutes, hours and days.
Note: These values are rounded, so seconds are the most accurate.

# Key Features

## Console
How it works:
To access the console click the "Open Console" button. To close the console click the "Close Console" button. To use the console, type "help" to get a list of commands with a small description of each and how to use them. Once a player has used the console commands on their game, the save will not be valid, so in the future, once leaderboards have been added, people can't cheat. This is achieved by storing a hasCheated boolean in the player's stats and then setting this to true once the player uses console commands.

Rationale: 
A console is a great tool that is used for the development of the game. However, a console is also fun for users as it allows experiment with the game and try different ways of playing the same game.

## Mood-based facial expressions
How it works:
The pet cat animations change depending on the pet's happiness. Once the pet's happiness reaches a certain threshold, its mood/facial expression changes.

Rationale:
Mood-based facial expressions make the pet feel more real, making the game more engaging for the player.

# Upcoming Features

## Leaderboard 
In the future, I plan to add leaderboards to make the game more fun and competitive. The player's score will be how long their put survived.

## Workshop
I plan to add a workshop where people can create and upload their own pets and animations, making the game much more customisable. Users will also be able to download other players' creations.

# Reflection
Overall I am satisfied with my project, and I have met all the base requirements and even added some extra features. Upon reflection, I should have spent more time on this project as I could have created the leaderboard and workshop system, which would have made my program better. Throughout this project, I struggled with CSS despite that I managed to get a nice-looking simple website layout; however, it could have been better if I could do it from scratch with the knowledge I gained. My main strength throughout this project was Javascript. I felt comfortable coding the backend systems, such as the console and the pet animation system.

# References 
[MDN](https://developer.mozilla.org/en-US/)