function SliceWords(text) {

    //console.log("Log de SliceWords:");
    //console.log("le test est : " + text);
    return new Promise((resolve, reject) => {
        try {
            let slicedText = [];
    
            let lines = text.split("\n");
    
            for (let ligne of lines) {
            slicedText = slicedText.concat(ligne.split(" "));
            }
    
            for (let i = 0; i < slicedText.length - 1; i++) {
            slicedText[i] = slicedText[i] + " ";
            }
            //console.log("Le texte slicé est : ")
            //console.log(slicedText);
            return(slicedText);
        } catch(error) {
            reject(error);
        }
    
    })
}
  
  export default SliceWords;
  

