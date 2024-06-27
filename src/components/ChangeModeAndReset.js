import GenerateText from "./GenerateText";

function ChangeModeAndReset({isEndLess, setIsEndLess, setTextToShow, setTextProgress, setIsFinished, setMode}) {
    
    
    
    return(
        <input 
        type = "button"
        value = "Change Mode"
        onClick={() => {
            if (isEndLess) {
                setIsFinished(false)
                setMode("normal");
            } else {
                setMode("endless");
            }
            setIsEndLess(!isEndLess);
            const fetchText = async () => {
                let generatedWords = await GenerateText();
                setTextToShow(generatedWords);
            }
            fetchText();
            setTextProgress('');
        }}
        />
    )
}

export default ChangeModeAndReset