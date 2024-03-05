/* Structure 
- sentence to write divided in words inside a list
- two lists : words to write and words written, updated when a user writes a correct word from the list of words
- change color of the input bar when a word is correctly/badly written
- at the end of the sentence the list of words to write and the list of words written are reset   
- [not used] fetch of the text to write from text file
*/

import { useState } from 'react';
import raw from "../assets/text.txt"

let wordsToWrite = []; // words that the user must write 
let wordsWritten = []; //words that the user has written
let i=0; // index of the current word to write in wordsToWrite

fetch(raw)
.then(r => r.text())
.then(text => {

let lines=text.split("\n");

for (let ligne of lines) {
    wordsToWrite = wordsToWrite.concat(ligne.split(" "));
}

for (let i=0; i<wordsToWrite.length-1; i++) {
    wordsToWrite[i] = wordsToWrite[i] + " ";
} 

console.log(wordsToWrite);

});

let numberWords = wordsToWrite.length;




function UpdateText() {

    const [textWritten, setTextWritten] = useState(''); // texte currently written by the user
    const [textToShow, setTextToShow] = useState(''); // text shown at the bottom of the input bar corresponding to the words correctly written
    const [inputColor, setInputColor] = useState('green'); //used to control the color of the input bar

    function WordChecker(textPiece) {

        /* 
        - Checks if the word that is being written in the input corresponds to the word that should be written.
        - Updates the text displayed in the input bar
        - Resests everything when the entire line is written
        */    
        console.log(textPiece)

        let wordToCheck=wordsToWrite[i]; //word that should be written by the user
        
        setTextWritten(textPiece);
        
        if (textPiece === wordToCheck) {
            
            //switches to the next word
            wordsWritten.push(wordToCheck); 
            i ++;
            
            //updates the text displayed + resets input bar color
            setTextToShow(textToShow + wordToCheck);
            setTextWritten('')
            
        }

        if (i === numberWords) { //resets the text to write/written
            setTextToShow(''); 
            i = 0;
        }
        
        // Changes the color of the bar if an error is done while typing a word
        
        if (textPiece.length > wordToCheck.length) { //word too long
            setInputColor('red')
            console.log("1")
        }
        else {
            for (var j=0; j<textPiece.length; j++) { //checks for a typo 
                if (textPiece !== '' && textPiece[j] !== wordToCheck[j]) {
                    setInputColor('red');
                    console.log("2");
                }
                else if (textPiece === wordToCheck) {
                    setInputColor('gold');
                    console.log("3");
                }
                else {
                    setInputColor("green");
                }
            }
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="maBoiteTexte">Entrez du texte : </label>
                <input
                    type="text"
                    id="maBoiteTexte"
                    name="maBoiteTexte"
                    value={textWritten}
                    onChange={(e) => WordChecker(e.target.value)}
                    style={{
                        border: '2px solid ' + inputColor,
                        outline: "none"
                    }}
                />
            </div>
            <div>
                <p>{textToShow}</p>
        </div>
        </div>
    );
}

export default UpdateText;
