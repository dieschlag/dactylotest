import ChangeMode from "./ChangeMode"
import Progress from "./Progress"
import EndNormalButtons from "./EndNormalButtons"

function BottomInput ({textWritten, isEndLess, isFinished, setTextToShow}) {
    endNormalMode = (
        <div>
            <EndNormalButtons />
            <ChangeMode />
        </div>
    )
    onGoingDisplay = (
        <div>
            <Progress />
            <ChangeMode />
        </div>
    ) 
}

export default BottomInput