import { useState } from 'react';

let sentenceWords = ['Pourquoi ', 'le ', 'soleil ', 'est ', 'jaune ', '? ']; 
let wordsToWrite = sentenceWords;
let numberWords = sentenceWords.length;
let wordsWritten = [];
let i=0;

function UpdateText() {

    const [textWritten, setTextWritten] = useState('');
    const [textToShow, setTextToShow] = useState('');
    
    

    function WordChecker(textPiece) {
        let wordToCheck=wordsToWrite[i];
        setTextWritten(textPiece);
        if (textPiece === wordToCheck) {
            wordsWritten.push(wordToCheck);
            i ++;
            setTextToShow(textToShow + wordToCheck);
            setTextWritten('')
        }

        if (i === numberWords) {
            setTextToShow('');
            i = 0;
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="maBoiteTexte">Entrez du texte :</label>
                <input
                    type="text"
                    id="maBoiteTexte"
                    name="maBoiteTexte"
                    value={textWritten}
                    onChange={(e) => WordChecker(e.target.value)}
                />
            </div>
            <div>
                <p>{textToShow}</p>
        </div>
        </div>
    );
}

export default UpdateText;
