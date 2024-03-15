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
import GenerateText from './GenerateText';

let i=0; // index of the current word to write in wordsToWrite
let textForApp = ""; // corresponds to the text that will be used to update the text in App.js
let chronoBegin = null;
let chronoEnd = null;

function UserInput({
    textToShow,     
    isEndLess,
    setTextToShow,
    textProgress,
    setTextProgress,
    setIsFinished,
    setWordsPerMinute
    }) {

    
    const [inputColor, setInputColor] = useState('green'); //used to control the color of the input bar
    const [wordsToWrite, setWordstoWrite] = useState(''); // list of words that the user must still write
    const [textWritten, setTextWritten] = useState(''); // texte currently written by the user
    const [isFirstInput, setIsFirstInput] = useState(true);
    
    
    useEffect((wordsToWrite) => {

        const sliceText =  async () => {
            await SliceWords(textToShow).then((value) => {
                setWordstoWrite(value)
            });
        };

        sliceText();

    }, [textToShow])

    function WordChecker(textPiece) {

        /* 
        - Checks if the word that is being written in the input corresponds to the word that should be written.
        - Updates the text displayed in the input bar
        - Resests everything when the entire line is written
        */

        if (isFirstInput) {
            setIsFirstInput(false);
            chronoBegin = performance.now();
            console.log(chronoBegin);
        }

        let numberWords = wordsToWrite.length

        let wordToCheck = wordsToWrite[i];  //word that should be written by the user
        
        setTextWritten(textPiece);
        
        // Changes the color of the bar if an error is done while typing a word
        
        if (textPiece.length > wordToCheck.length) { //word too long
            setInputColor('red')
            
        }
        else {
            
            for (var j=0; j<textPiece.length; j++) { //checks for a typo
                if (textPiece !== '' && textPiece[j] !== wordToCheck[j]) {
                    setInputColor('red');
                    
                } else {
                    setInputColor("green");
                }
            }

            if (textPiece === wordToCheck) {

                setInputColor('gold');
                //switches to the next word
                i ++;
                
                setTextProgress(prevTextProgress => prevTextProgress + wordToCheck)
                

                if (i === numberWords) { //

                    //the end of the sentence is reached
                    
                    chronoEnd = performance.now()
                    let timeToWrite = chronoEnd - chronoBegin
                    setWordsPerMinute((numberWords/timeToWrite) * 1000 * 60)
                    
                    i = 0;
                    if (isEndLess) {
                        console.log("erreur")
                        const fetchText = async () => {
                            let generatedWords = await GenerateText();
                            setTextToShow(generatedWords);
                        }
                        fetchText();
                            setTextProgress('');
                    } else {
                        console.log("isok")
                        setIsFinished(true);
                    }
                setIsFirstInput(true)
                }
            setTextWritten('') 
            }
            
        }
    }

    return (
        <div>
            <pre>{textForApp}</pre>
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
    );
}

export default UserInput;

