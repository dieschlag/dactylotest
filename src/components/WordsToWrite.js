import GenerateText from "./GenerateText"
import {useEffect} from 'react'

function WordsToWrite({textToShow, setTextToShow, textOfProgress, textLeftToWrite,setTextLeftToWrite}) {


    useEffect(() => {
        const fetchText = async () => {
            let generatedWords = await GenerateText();
            //console.log(generatedWords);
            setTextToShow(generatedWords);
        }
        fetchText();
    }, []
    )
    return(
        <div>
            <h2>Mots à écrire</h2>
            <span style={{color : "green"}}>{textOfProgress}</span><span>{textToShow}</span>
        </div>
    )

}

export default WordsToWrite