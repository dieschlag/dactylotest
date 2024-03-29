function GenerateText() {

    let randomNumber = Math.floor(Math.random()*10) + 1;
    let filePath = `../assets/text${randomNumber}.txt`;
    

    const context = require.context('../assets', true);
    const raw = context(`./text${randomNumber}.txt`);
    
    return(
        fetch(raw)
        .then(r => r.text())
        .then(text => {
        //console.log(text)
        return(text);
        })
    )
}

export default GenerateText