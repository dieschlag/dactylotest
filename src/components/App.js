import { useState } from 'react';
import '../styles/App.css';
import WordsToWrite from './WordsToWrite';

function App() {

  console.log("App is rendered")
  const [textToShow, setTextToShow] = useState("")
    
  return (
    <div>
      <WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} />
    </div>
  );
}

export default App;

//<WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} />