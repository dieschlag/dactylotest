function ChangeMode({isEndLess, setIsEndLess}) {
    <input 
    type = "button"
    value = "Change Mode"
    onClick={setIsEndLess(!isEndLess)}
    />
}

export default ChangeMode