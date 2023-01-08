import styles from './Answer.module.css';

function Answer({ letters }) {
  const lettersList = letters.map((el, index) => {
    if (el.status) {
      return <p key={index}>{el.value}</p>
    }
    return null;
  }   
    
  )
  return (
    <div className={styles.answer}>{lettersList}</div>
  );
}

export default Answer;
