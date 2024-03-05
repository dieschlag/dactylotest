/* Structure 
- sentence to write divided in words inside a list
- two lists : words to write and words written, updated when a user writes a correct word from the list of words
- change color of the input bar when a word is correctly/badly written
- at the end of the sentence the list of words to write and the list of words written are reset   
- [not used] fetch of the text to write from text file
*/

import { useState } from 'react';
// import raw from "./text.txt" [[unused]]

let sentenceWords = ['Pourquoi ', 'le ', 'soleil ', 'est ', 'jaune ', '? ']; //original sentence to write
let wordsToWrite = sentenceWords; // words that the user must write 
let numberWords = sentenceWords.length;
let wordsWritten = []; //words that the user has written
let i=0; // index of the current word to write in wordsToWrite




function UpdateText() {

    const [textWritten, setTextWritten] = useState(''); // texte currently written by the user
    const [textToShow, setTextToShow] = useState(''); // text shown at the bottom of the input bar corresponding to the words correctly written
    const [inputColor, setInputColor] = useState('green'); //used to control the color of the input bar

    // [Not used]
    /*
    let textSample = fetch(raw)
    .then(r => r.text())
    .then(text => {

    let lines=text.split("\n");
    console.log(lines)
    
    let listWords = [];
    
    for (let ligne of lines) {
        console.log(ligne);
        console.log(ligne.split(" "))
        listWords = listWords.concat(ligne.split(" "));
        console.log(listWords);
    }
    
    console.log(listWords);
    
    });
    */

    function WordChecker(textPiece) {

        /* 
        - Checks if the word that is being written in the input corresponds to the word that should be written.
        - Updates the text displayed in the input bar
        - Resests everything when the entire line is written
        */    


        let wordToCheck=wordsToWrite[i]; //word that should be written by the user
        
        setTextWritten(textPiece);
        
        if (textPiece === wordToCheck) {

            setInputColor('#ffd700') // gold for success
            
            //switches to the next word
            wordsWritten.push(wordToCheck); 
            i ++;
            
            //updates the text displayed + resets input bar color
            setTextToShow(textToShow + wordToCheck);
            setTextWritten('')
            setInputColor('green')
            
        }

        if (i === numberWords) { //resets the text to write/written
            setTextToShow(''); 
            i = 0;
        }
        
        // Changes the color of the bar if an error is done while typing a word
        
        if (textPiece.length > wordToCheck.length-1) { //word too long
            setInputColor('red')
        }
        else {
            for (var j=0; j<textPiece.length; j++) { //checks for a typo 
                if (textPiece[j] !== wordToCheck[j] && textPiece !== '') {
                    console.log(textPiece[j] !== wordToCheck[j])
                    setInputColor('red')
                }
                else {
                    setInputColor('green')
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
                    style={{border: '2px solid ' + inputColor}}
                />
            </div>
            <div>
                <p>{textToShow}</p>
        </div>
        </div>
    );
}

export default UpdateText;
