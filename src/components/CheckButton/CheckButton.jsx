import correctAnswers from '../../libs/correctAnswers';

function CheckButton({answer, emitAnswer}) {
  

  // HANDLERS
  function check() {
    let result = [];
    answer.forEach(element => {
      result.push(element.value);
    });
    const joinResult = result.join('');
    const isCorrect = correctAnswers.find(el => el === joinResult);
    if (isCorrect) {
      emitAnswer(joinResult);
    } else {
      emitAnswer(false);
    }
   
  }
  return (
    <button onClick={check}>Check</button>
  );
}

export default CheckButton;