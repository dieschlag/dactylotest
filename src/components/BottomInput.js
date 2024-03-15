import ChangeModeAndReset from "./ChangeModeAndReset"
import Progress from "./Progress"
import EndNormalButtons from "./EndNormalButtons"

function BottomInput ({textProgress, setTextProgress, isEndLess, setIsEndLess, isFinished, setIsFinished, setTextToShow, wordsPerMinute}) {
    const endNormalMode = (
        <div>
            <EndNormalButtons setTextToShow={setTextToShow} setTextProgress={setTextProgress} setIsFinished={setIsFinished}/>
            
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
            <p>{wordsPerMinute}</p>
        </div>
    )
}

export default BottomInput