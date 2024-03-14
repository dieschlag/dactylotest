import { useState } from 'react';
import '../styles/App.css';
import WordsToWrite from './WordsToWrite';
import UpdateText from './UpdateText'
import ModeSelection from './ModeSelection';

function App() {

  //console.log("App is rendered")
  const [textToShow, setTextToShow] = useState("");
  const [isModeChosen, setIsModeChosen] = useState(false);
  
  const modeSelection = (
    <ModeSelection isModeChosen={isModeChosen} setisModeChosen={setIsModeChosen}/>
  );

  const dactylo = (
    <div>
      <WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} />
      <UpdateText textToShow={textToShow}/>
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