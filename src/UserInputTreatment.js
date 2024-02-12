import { useState, useEffect } from 'react';

wordsToWrite = ['Pourquoi ', 'le ', 'soleil ', 'est ', 'jaune ', '? ']
console.log(wordsToWrite)

function UpdateText() {
    const [texteSaisi, setTexteSaisi] = useState('');
    useEffect(() => {
        // Cette fonction sera appelée après chaque mise à jour de texteSaisi
        console.log("Valeur mise à jour :", texteSaisi);

        // Ajoutez votre logique ici pour vérifier la nouvelle valeur
        if (texteSaisi === "Pourquoi") {
            console.log("C'est le bon mot");
        }
    }, [texteSaisi]); // Spécifiez la dépendance pour que useEffect soit appelé lorsqu'elle change

    function WordChecker(textPiece) {
        setTexteSaisi(textPiece);
    }

    return (
        <div>
            <label htmlFor="maBoiteTexte">Entrez du texte :</label>
            <input
                type="text"
                id="maBoiteTexte"
                name="maBoiteTexte"
                value={texteSaisi}
                onChange={(e) => WordChecker(e.target.value)}
            />
        </div>
    );
}

export default UpdateText;
