import GenerateText from "./GenerateText";

function EndNormalButtons({setTextToShow, setTextProgress}) {
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
                setTextProgress('')
            }}
            />
            <input 
            type= "button"
            value ="Try again"
            onClick = {()=> {
                setTextProgress('')
            }}
            />
        </div>
    )
}

export default EndNormalButtons