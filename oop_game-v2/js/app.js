/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//test constructor
// const phrase = new Phrase();
// const game = new Game();

// console.log(phrase);
// console.log(game);

//test methods
// const phrase = new Phrase('Life is like a box of chocolates'); 
// console.log(`Phrase - phrase: ${phrase.phrase}`);

//test add phrases
// const game = new Game();
// game.phrases.forEach((phrase, index) => { console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//get random phrase
// const logPhrase = (phrase) => { 
//     console.log(`Phrase - phrase: `, phrase.phrase);
// }; 
// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase()); 
// logPhrase(game.getRandomPhrase()); 
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// const randomPhrase = game.getRandomPhrase(); const phrase = new Phrase(randomPhrase.phrase); phrase.addPhraseToDisplay();


// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

const game = new Game();
const btn_reset = document.getElementById('btn__reset');

btn_reset.addEventListener('click', (e) => {
	game.startGame();
    })
    
const keys = document.querySelectorAll(".key");
keys.forEach( key => {

    key.addEventListener('click', (e) => {
         game.handleInteraction(e.target)
            console.log(e.target)
            
    })

})



