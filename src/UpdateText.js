import { useState } from 'react';
import raw from "./text.txt"

let sentenceWords = ['Pourquoi ', 'le ', 'soleil ', 'est ', 'jaune ', '? ']; 
let wordsToWrite = sentenceWords;
let numberWords = sentenceWords.length;
let wordsWritten = [];
let i=0;




function UpdateText() {

    const [textWritten, setTextWritten] = useState('');
    const [textToShow, setTextToShow] = useState('');
    const [inputColor, setInputColor] = useState('green');

    let textSample = fetch(raw)
    .then(r => r.text())
    .then(text => {

    let lignes=text.split("\n");
    console.log(lignes)
    
    let listWords = [];
    
    for (let ligne of lignes) {
        console.log(ligne);
        console.log(ligne.split(" "))
        listWords = listWords.concat(ligne.split(" "));
        console.log(listWords);
    }
    
    console.log(listWords);
    
    });

    function WordChecker(textPiece) {
        let wordToCheck=wordsToWrite[i];
        setTextWritten(textPiece);
        if (textPiece === wordToCheck) {
            setInputColor('#ffd700')
            wordsWritten.push(wordToCheck);
            i ++;
            setTextToShow(textToShow + wordToCheck);
            setTextWritten('')
            setInputColor('green')
            
        }

        if (i === numberWords) {
            setTextToShow('');
            i = 0;
        }

        if (textPiece.length > wordToCheck.length-1) {
            setInputColor('red')
        }
        else {
            for (var j=0; j<textPiece.length; j++) {
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
