import GenerateText from "./GenerateText";

function ChangeModeAndReset({isEndLess, setIsEndLess, setTextToShow, setTextProgress, setIsFinished, mode}) {
    
    
    
    return(
        <input 
        type = "button"
        value = "Change Mode"
        onClick={() => {
            if (isEndLess) {
                setIsFinished(false)
                mode = "normal";
            } else {
                mode = "endless"
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