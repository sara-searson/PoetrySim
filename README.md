# PoetrySim
A simple game where you select a number of words from a given set. Players are then graded based on how well those words match each other. 

## How to Get Started
- Create an array containing possible words (ex. cuteWords = ['cute1', 'cute2', 'cute3',...] 
- - Have five seperate arrays (ex. cute, happy, sad, dramatic, silly)
- - Have some words shared between arrays (ex. *puppys* are cute **AND** happy)
  - - Have the like words at the end of the array as the very last entries.
- Create a randomized method for generating given words from clouds. (run a for loop for each array, generate a random item number Math.floor(Math.random() * array.length-x) *x is detailed in later point* and update word cloud area to contain list of words
- - When reading for word clouds, do not read the shared words (ex. If the last for words are shared with other clouds, above x would be 5 (-4 to omit the last 4 points, -1 to reflect array starting from 0<sup>th</sup> position.) 
- Show 1/2 or 1/3 of words at a time for ease of reading and selecting (on mobile). 
- Allow click function to read selected word, delete it from word cloud, and update it within the chosen words area.
- - Allow clicking from within chosen words area to do opposite - read selected word, delete from chosen words area, update to word cloud.
- Scoring runs when words are submitted using button. Scoring runs an if variable, where it measures each word to see if it scores within a certain array type (ex. cuteScore).
- - Do this by seeing if each word is in a set array. If it is, score increase (ex. cuteScore+= 1). If else, move to next. Do this through five word arrays, including all words (even shared words at end).
- Create win condition, detailed below. 
- - Basic function: game returns highest overall score for point total.
- - Advanced funtion: game reutnrs score based on judge. (ex. Sally likes cute words, so only your cuteScore matters).
- Add a base comparison player must beat (ex. 4 points). If player meets or beats, they move to the next level. Each level repeats in the same way, difference being the score to meet or beat increases (ex. 4 becomes 6 becomes 8)


## Wireframe, Concept Art, Logo, etc. 
To add images: ![alt text/description] (img.png)


## Credits
- Used CanvaPro to complete the concept Art, Logo, and other graphics.
- Additional Links to be added. 
