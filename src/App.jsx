import { useState } from 'react'
import Card from './components/Card/Card'
import riddles from './data/data';
import './App.css'

function App() {
  const [isAnswerHidden, setIsAnswerHidden] = useState(true);
  const [answer, setAnswer] = useState('answer');
  const [counter, setCounter] = useState(1);

  const handleNextCard = () => {
    if (counter < riddles.length - 1) {
      setCounter(prev => prev + 1);
      setAnswer('answer')
      setIsAnswerHidden(true);
    }
  };

  const handleShowAnswer = (id) => {
    setIsAnswerHidden(false);
    if (!isAnswerHidden && id) {
      const currentRiddle = riddles.find((r) => r.id === id);
      // console.log(currentRiddle);
      setAnswer(currentRiddle ? currentRiddle.answer : 'answer');
    }
  };


  return (
    <>

      {
        counter && counter < riddles.length - 1 &&
        riddles.map((r) => (
          r.id === counter &&
          <Card key={r.id} answer={answer} riddle={r.riddle}
            handleShowAnswer={() => handleShowAnswer(r.id)} />
        ))
      }

      {
        counter && counter < riddles.length - 1 && <button onClick={handleNextCard}>Next</button>
      }
    </>
  )
}

export default App
