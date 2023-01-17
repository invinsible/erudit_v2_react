import styles from './ResultText.module.css';

function ResultText({score}) {
  let generateText = '';
  if (score > 0) {
    if (score <= 3) {
      generateText = `Неплохо, вы нынесли ${score} урона`
    }

    if (score > 3 && score <= 5) {
      generateText = `Хорошо, вы нынесли ${score} урона`
    }

    if (score > 5 && score <= 7) {
      generateText = `Отлично, вы нынесли ${score} урона`
    }

    if (score > 7) {
      generateText = `Превосходно, вы нынесли критический урон! ${score}`
    }   
  }

  if (score === -1) {
    generateText = 'Ответ уже был'
  }

  if (score === -2) {
    generateText = 'Ответ не верный'
  }
  return (
    <p data-text={generateText} className={styles['cool-skills']}>{generateText}</p>
  );
}

export default ResultText;