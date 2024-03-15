function EndNormalButtons() {
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
        }}
        />
        <input 
        type= "button"
        value ="Try again"
        onClick = {()=> {
            
        }}
        />
        </div>
    )
}

export default EndNormalButtons