import { useState } from 'react';

let wordsToWrite = ['Pourquoi ', 'le ', 'soleil ', 'est ', 'jaune ', '? '];
let finalIndexWordsToWriteIndex = wordsToWrite.length;
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

        if (i === finalIndexWordsToWriteIndex) {
            setTextToShow('')
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
