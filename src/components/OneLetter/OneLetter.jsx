import classNames from 'classnames';
import styles from './OneLetter.module.css';


function OneLetter({ letter, letterChoose }) {
  // CLASSES
  const letterClasses = classNames(styles.letter, { [styles['letter--disabled']]: letter.status });

  return (
    <div
      className={letterClasses}
      onClick={() => letterChoose(letter.id)}
    >
      {letter.value}
    </div>
  );
}

export default OneLetter;
