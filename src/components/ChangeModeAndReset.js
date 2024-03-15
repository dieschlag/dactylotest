import GenerateText from "./GenerateText";

function ChangeModeAndReset({isEndLess, setIsEndLess, setTextToShow}) {
    return(
        <input 
        type = "button"
        value = "Change Mode"
        onClick={() => {
            setIsEndLess(!isEndLess);
            const fetchText = async () => {
                let generatedWords = await GenerateText();
                setTextToShow(generatedWords);
            }
            fetchText();
        }}
        />
    )
}

export default ChangeModeAndReset