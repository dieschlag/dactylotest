import { useState } from 'react';
import '../styles/App.css';
import WordsToWrite from './WordsToWrite';
import UpdateText from './UpdateText'
import ModeSelection from './ModeSelection';

function App() {

  //console.log("App is rendered")
  const [textToShow, setTextToShow] = useState("");
  const [isModeChosen, setIsModeChosen] = useState(false);
  const [isEndLess, setIsEndLess] = useState(false);
  const [textOfProgress, setTextOfProgress] = useState(''); // text shown at the bottom of the input bar corresponding to the words correctly written
  const [textLeftToWrite, setTextLeftToWrite] = useState('');

  const modeSelection = (
    <ModeSelection isModeChosen={isModeChosen} setisModeChosen={setIsModeChosen} isEndLess={isEndLess} setIsEndLess={setIsEndLess} />
  );

  const dactylo = (
    <div>
      <WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} textOfProgress = {textOfProgress} textLeftToWrite={textLeftToWrite} setTextLeftToWrite={setTextLeftToWrite}/>
      <UpdateText textToShow={textToShow} isEndLess={isEndLess} setTextToShow={setTextToShow} textOfProgress={textOfProgress} setTextOfProgress={setTextOfProgress} textLeftToWrite={textLeftToWrite} setTextLeftToWrite={setTextLeftToWrite} />
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