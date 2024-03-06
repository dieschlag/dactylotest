import GenerateText from "./GenerateText"

function WordsToWrite({wordsToWrite, setWordsToWrite}) {

    generatedWords = GenerateText()
    setWordsToWrite(generatedWords)
    return(
        <div>
            <h2>Mots à écrire</h2>
            <pre>{wordsToWrite}</pre>
        </div>
    )

}

export default WordsToWrite