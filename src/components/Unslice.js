import { useState } from "react";

function Unslice(textToUnslice){
    const[unslicedText,setUnslicedText] = useState('');

    for (let word in textToUnslice){setUnslicedText(unslicedText+word)}
    return(unslicedText);
}

export default Unslice;