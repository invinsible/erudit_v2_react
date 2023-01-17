import styles from './Answer.module.css';

function Answer({ letters }) {
  const lettersList = letters.map((el, index) => {
    if (el.status) {
      return <li key={index} className={`${styles['selected-letters__item']} letter`}>{el.value}</li>
    }
    return null;
  }   
    
  )
  return (
    <ul className={styles['selected-letters']}>{lettersList}</ul>
  );
}

export default Answer;
