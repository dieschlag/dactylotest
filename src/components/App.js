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
  const [isFinished, setIsFinished] = useState(false) // condition to know if the user has finished to write the generated text
  const [textProgress, setTextProgress] = useState(''); // text shown at the bottom of the input bar corresponding to the words correctly written
  
  const modeSelection = (
    <ModeSelection 
      isModeChosen={isModeChosen} 
      setisModeChosen={setIsModeChosen} 
      isEndLess={isEndLess} 
      setIsEndLess={setIsEndLess} 
    />
  );

  const dactylo = (
    <div>
      <WordsToWrite textToShow={textToShow} setTextToShow={setTextToShow} />
      <UserInput textToShow={textToShow} 
        isEndLess={isEndLess} 
        setTextToShow={setTextToShow}
        textProgress={textProgress}
        setTextProgress={setTextProgress}
        setIsFinished={setIsFinished} 
      />
      <BottomInput  
        textProgress={textProgress}
        setTextProgress={setTextProgress}
        isEndLess={isEndLess} 
        setIsEndLess={setIsEndLess} 
        isFinished={isFinished} 
        setTextToShow={setTextToShow} 
        setIsFinished={setIsFinished}
      />
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