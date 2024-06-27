function ModeSelection({isModeChosen, setisModeChosen, isEndLess, setIsEndLess, setMode, mode }) {
    return(
        <div>
            <input 
                type = "button"
                value = "Normal Mode"
                acceskey = "n"
                onClick = {() => {
                    setisModeChosen(true);
                    setMode("normal");
                    console.log("here");
                    console.log(mode);
                }}
                
            />

            <input 
                type = "button"
                value = "Endless Mode"
                acceskey = "n"
                onClick = {() => {
                    setisModeChosen(true);
                    setIsEndLess(true);
                    setMode("endless");
                    console.log("here");
                    console.log(mode);
                }}
            />
        </div>
    )

}

export default ModeSelection