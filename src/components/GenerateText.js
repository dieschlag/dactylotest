function GenerateText() {
    fetch(raw)
    .then(r => r.text())
    .then(text => {
    return(text);
    })
}