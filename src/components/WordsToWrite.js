import GenerateText from "./GenerateText"
import {useEffect} from 'react'

function WordsToWrite({textToShow, setTextToShow}) {


    useEffect(() => {
        const fetchText = async () => {
            let generatedWords = await GenerateText();
            //console.log(generatedWords);
            setTextToShow(generatedWords);
        }
        fetchText();
        console.log("bbonjour");
    }, 1)

    return(
        <div>
            <h2>Mots à écrire</h2>
            <pre>{textToShow}</pre>
        </div>
    )

}

export default WordsToWrite