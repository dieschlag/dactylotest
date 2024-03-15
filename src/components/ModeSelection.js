function ModeSelection({isModeChosen, setisModeChosen, isEndLess, setIsEndLess }) {
    return(
        <div>
            <input 
                type = "button"
                value = "Normal Mode"
                acceskey = "n"
                onClick = {() => {
                    setisModeChosen(true);
                    //console.log(isEndLess)
                    //console.log(isModeChosen)
                }}
                
            />

            <input 
                type = "button"
                value = "Endless Mode"
                acceskey = "n"
                onClick = {() => {
                    setisModeChosen(true);
                    setIsEndLess(true);
                    //console.log(isEndLess);
                    //console.log(isModeChosen);
                }}
            />
        </div>
    )

}

export default ModeSelection