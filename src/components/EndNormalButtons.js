import GenerateText from "./GenerateText";

function EndNormalButtons({setTextToShow, setTextProgress, setIsFinished}) {
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
                setIsFinished(false);
            }}
            />
        </div>
    )
}

export default EndNormalButtons