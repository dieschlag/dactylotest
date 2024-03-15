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

function UpdateText({textToShow, isEndLess, setTextToShow, textOfProgress, setTextOfProgress,textLeftToWrite, setTextLeftToWrite}) {

    const [textWritten, setTextWritten] = useState(''); // texte currently written by the user
    const [inputColor, setInputColor] = useState('green'); //used to control the color of the input bar
    const [wordsToWrite, setWordstoWrite] = useState(''); // list of words that the user must still write
    const [wordsWritten, setWordsWritten] = useState(''); // list of words that the user has already written
    


    useEffect((wordsToWrite) => {

        const sliceText =  async () => {
            //console.log("executed")
            await SliceWords(textToShow).then((value) => {
                setWordstoWrite(value)
            });

            //console.log(wordsToWrite);
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

        let numberWords = wordsToWrite.length

        //console.log("index: " + i);

        let wordToCheck = wordsToWrite[0];  //word that should be written by the user
        
        // console.log("function called");
        
        // console.log(wordsToWrite);
        console.log("1 " + wordToCheck);
        
        setTextWritten(textPiece);
        
        // Changes the color of the bar if an error is done while typing a word
        
        if (textPiece.length > wordToCheck.length) { //word too long
            setInputColor('red')
            
        }
        else {
            
            for (var j=0; j<textPiece.length; j++) { //checks for a typo
                console.log("j:" + j)
                console.log("textPiece.length:" + textPiece.length)
                if (textPiece !== '' && textPiece[j] !== wordToCheck[j]) {
                    setInputColor('red');
                    
                } else {
                    setInputColor("green");
                }
            }

            if (textPiece === wordToCheck) {
                setTextToShow('');
                console.log("textPiece:" + textPiece)
                console.log("wordToCheck:" + wordToCheck)
                setInputColor('gold');
                console.log("avant incr:" + i)
                //switches to the next word
                setWordsWritten([...wordsWritten, wordToCheck]);
                wordsToWrite.shift();
                console.log(wordsToWrite)
                for (let word in wordsToWrite){setTextToShow(textToShow + word)}
                i ++;
                
                console.log("après incr" + i)

                //updates the text displayed + resets input bar color
                setTextOfProgress(textOfProgress + wordToCheck);
                setTextWritten('')

                if (wordsToWrite.length === 0) { //
                    setTextOfProgress(''); 
                    i = 0;
                    console.log("reset:" + i)
                    if (isEndLess) {
                        const fetchText = async () => {
                            let generatedWords = await GenerateText();
                            //console.log(generatedWords);
                            setTextToShow(generatedWords);
                        }
                        fetchText();
                    }
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

