import { useState, useMemo, useEffect } from 'react';
import { shuffleWord } from '../../libs/shuffleWord';
import { getRandomIntInclusive } from '../../libs/random';
import styles from './WordList.module.css';
import OneLetter from '../OneLetter/OneLetter';
import Answer from '../Answer/Answer';
import CheckButton from '../CheckButton/CheckButton';
import ResultText from '../ResultText/ResultText';

function WordList({ word }) {
  // SHUFFLE
  const divideWord = useMemo(() => shuffleWord(word), [word]);

  // STATE
  const [letters, setLetters] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [answersList, setAnswersList] = useState([]);
  const [resultScore, setResultScore] = useState(0);

  // EFFECT
  useEffect(() => {
    divideWord.forEach((el) => {
      const letObj =  {id: el + getRandomIntInclusive(1, 100), value: el, status: false}
      setLetters(cur => [...cur, letObj])
    });
  }, []);
  

  // HANDLERS
  function letterHandler(id) {
    const newStateLetters = letters.map((el) => {
      if (el.id === id) {
        return {...el, status: !el.status};
      }
      return el;
    })
    setLetters(newStateLetters);
    const curElement = newStateLetters.find(el => el.id === id);
    if(curElement.status) {
      setAnswer(cur => [...cur, curElement]);
    } else {
      const curIndex = answer.findIndex(el => el.id === id);
      answer.splice(curIndex, 1);
    }
  }

  function clearLetters() {
    letters.forEach(el => el.status = false);
    setAnswer([]);
    setResultScore(0);
  }

  function updateAnswers(result) {
    if (result) {
      const isAnswerInList = answersList.find(el => el === result);
      if (!isAnswerInList) {
        setAnswersList(cur => [...cur, result]);
        setResultScore(result.length);
        setTimeout(() => {
          clearLetters();
        }, 1500);        
      } else {
        setResultScore(-1);
      }
    } else {
      setResultScore(-2);
    }
  }
  

  // CREATE LETTERS LIST
  const letterList = letters.map((el) => (
    <OneLetter
      key={el.id}
      letter={el}
      letterChoose={letterHandler}
    />
  ));
 
  return (
    <>
      <Answer letters={answer}/>
      <div className={styles['word-list']}>{letterList}</div>
      {answer.length > 0 && <CheckButton answer={answer} emitAnswer={updateAnswers}/>}
      {answer.length > 0 && <button onClick={clearLetters}>Clear</button>}
      {resultScore !== 0 && <ResultText score={resultScore}/>}
    </>
    
  );
}

export default WordList;
