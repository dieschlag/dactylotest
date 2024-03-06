import GenerateText from "./GenerateText"

function WordsToWrite({textToShow, setTextToShow}) {

    console.log("WordsToWrite is rendered");

    const fetchText = async () => {
        let generatedWords = await GenerateText();
        console.log(generatedWords);
        setTextToShow(generatedWords);
    }

    fetchData()
    return(
        <div>
            <h2>Mots à écrire</h2>
            <pre>{textToShow}</pre>
        </div>
    )

}

export default WordsToWrite