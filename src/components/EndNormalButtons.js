import GenerateText from "./GenerateText";

function EndNormalButtons({textToShow, setTextToShow, setTextProgress, setIsFinished, setTextLeft}) {
    return (
        <div>
            <input
            type = "button"
            value = "New Sentence"
            onClick = {() => {
                const fetchText = async () => {
                    let generatedWords = await GenerateText();
                    //console.log(generatedWords);
                    setTextToShow(generatedWords);
                    setTextLeft(generatedWords);
                }
                fetchText();
                setTextProgress('');
                setIsFinished(false);
            }}
            />
            <input 
            type= "button"
            value ="Try again"
            onClick = {()=> {
                setTextProgress('');
                setTextLeft(textToShow);
                setIsFinished(false);
            }}
            />
        </div>
    )
}

export default EndNormalButtons