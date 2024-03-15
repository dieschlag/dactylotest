import ChangeModeAndReset from "./ChangeModeAndReset"
import Progress from "./Progress"
import EndNormalButtons from "./EndNormalButtons"

function BottomInput ({textProgress, setTextProgress, isEndLess, setIsEndLess, isFinished, setIsFinished, textToShow, setTextToShow, setTextLeft}) {
    const endNormalMode = (
        <div>
            <EndNormalButtons textToShow={textToShow} setTextToShow={setTextToShow} setTextProgress={setTextProgress} setIsFinished={setIsFinished} setTextLeft={setTextLeft}/>
            
            <ChangeModeAndReset 
                isEndLess={isEndLess} 
                setIsEndLess={setIsEndLess} 
                setTextToShow={setTextToShow} 
                setTextProgress={setTextProgress}
                setIsFinished={setIsFinished} 
            />
        </div>
    )
    const onGoingDisplay = (
        <div>
            <ChangeModeAndReset 
                isEndLess={isEndLess} 
                setIsEndLess={setIsEndLess} 
                setTextToShow={setTextToShow}
                setTextProgress={setTextProgress} 
                setIsFinished={setIsFinished}
            />
        </div>
    )
    return (
        <div>
            <Progress textProgress={textProgress} />
            {isFinished ? endNormalMode : onGoingDisplay}
        </div>
    )
}

export default BottomInput