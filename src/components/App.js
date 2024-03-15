import { useState } from 'react';
import '../styles/App.css';
import WordsToWrite from './WordsToWrite';
import UserInput from './UserInput'
import ModeSelection from './ModeSelection';
import BottomInput from './BottomInput';

function App() {

  //console.log("App is rendered")
  const [textToShow, setTextToShow] = useState("");
  const [isModeChosen, setIsModeChosen] = useState(false);
  const [isEndLess, setIsEndLess] = useState(false)
  const [textWritten, setTextWritten] = useState(''); // texte currently written by the user
  const [isFinished, setIsFinished] = useState(false) // condition to know if the user has finished to write the generated text
  
  const modeSelection = (
    <ModeSelection 
    isModeChosen={isModeChosen} 
    setisModeChosen={setIsModeChosen} 
    isEndLess={isEndLess} 
    setIsEndLess={setIsEndLess} />
  );

  const dactylo = (
    <div>
      <WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} />
      <UserInput textToShow={textToShow} 
      isEndLess={isEndLess} 
      setTextToShow={setTextToShow}
      textWritten={textWritten}
      setTextWritten={setTextWritten}
      isFinished={isFinished}
      setIsFinished={setIsFinished} />

      <BottomInput isEndLess={isEndLess} />
    </div>
  );

 return (
  <div>
    {isModeChosen ? dactylo : modeSelection}
  </div>
 );
  
}

export default App;

//<WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} />