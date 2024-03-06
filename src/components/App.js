import { useState } from 'react';
import '../styles/App.css';
import WordsToWrite from './WordsToWrite';
import UpdateText from './UpdateText'

function App() {

  console.log("App is rendered")
  const [textToShow, setTextToShow] = useState("")
    
  return (
    <div>
      <WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} />
      <UpdateText textToShow={textToShow}/>
    </div>
  );
}

export default App;

//<WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} />