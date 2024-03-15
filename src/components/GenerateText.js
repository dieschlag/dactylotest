function GenerateText() {

    let randomNumber = Math.floor(Math.random()*10) + 1;
    let filePath = `../assets/text${randomNumber}.txt`;
    console.log(filePath);

    const context = require.context('../assets', true);
    const raw = context(`./text1.txt`);
    
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