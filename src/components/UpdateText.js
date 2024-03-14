/* Structure 
- sentence to write divided in words inside a list
- two lists : words to write and words written, updated when a user writes a correct word from the list of words
- change color of the input bar when a word is correctly/badly written
- at the end of the sentence the list of words to write and the list of words written are reset   
- [not used] fetch of the text to write from text file
*/

import { useState } from 'react';
import SliceWords from './SliceWords';
import { useEffect } from 'react';
 
let i=0; // index of the current word to write in wordsToWrite
let textForApp = ""; // corresponds to the text that will be used to update the text in App.js

function UpdateText({textToShow}) {

    const [textWritten, setTextWritten] = useState(''); // texte currently written by the user
    const [textOfProgress, setTextOfProgress] = useState(''); // text shown at the bottom of the input bar corresponding to the words correctly written
    const [inputColor, setInputColor] = useState('green'); //used to control the color of the input bar
    const [wordsToWrite, setWordstoWrite] = useState(''); // list of words that the user must still write
    const [wordsWritten, setWordsWritten] = useState(''); // list of words that the user has already written
    
    useEffect((wordsToWrite) => {

        const sliceText =  async () => {
            console.log("executed")
            await SliceWords(textToShow).then((value) => {
                setWordstoWrite(value)
            });

            console.log(wordsToWrite);
        };

        sliceText();

    }, [textToShow])

    //const [textToShow, setTextToShow] = useState(textForApp)

    function WordChecker(textPiece) {

        /* 
        - Checks if the word that is being written in the input corresponds to the word that should be written.
        - Updates the text displayed in the input bar
        - Resests everything when the entire line is written
        */ 

        let wordToCheck = wordsToWrite[i];  //word that should be written by the user
        let numberWords = wordsToWrite.length
        
        console.log("function called");
        console.log("index: " + i);
        console.log(wordsToWrite);
        console.log("1 " + wordToCheck);
        
        setTextWritten(textPiece);

        if (i === numberWords-1) { //resets the text to write/written
            setTextOfProgress(''); 
            i = 0;
        }
        
        
        if (textPiece === wordToCheck) {
            
            //switches to the next word
            setWordsWritten([...wordsWritten, wordToCheck]);
            i ++;
            
            //updates the text displayed + resets input bar color
            setTextOfProgress(textOfProgress + wordToCheck);
            setTextWritten('')
            
        }
        
        // Changes the color of the bar if an error is done while typing a word
        
        if (textPiece.length > wordToCheck.length) { //word too long
            setInputColor('red')
            
        }
        else {
            for (var j=0; j<textPiece.length; j++) { //checks for a typo 
                if (textPiece !== '' && textPiece[j] !== wordToCheck[j]) {
                    setInputColor('red');
                    
                }
                else if (textPiece === wordToCheck) {
                    setInputColor('gold');
                }
                else {
                    setInputColor("green");
                }
            }
        }
    }

    return (
        <div>
            <pre>{textForApp}</pre>
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
                <p>{textOfProgress}</p>
        </div>
        </div>
    );
}

export default UpdateText;

