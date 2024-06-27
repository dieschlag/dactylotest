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

                }}
            />
        </div>
    )

}

export default ModeSelection