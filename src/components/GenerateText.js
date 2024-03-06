import raw from "../assets/text.txt"

function GenerateText() {
    return(
        fetch(raw)
        .then(r => r.text())
        .then(text => {
        console.log(text)
        return(text);
        })
    )
}

export default GenerateText