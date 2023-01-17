import classNames from 'classnames';
import styles from './OneLetter.module.css';


function OneLetter({ letter, letterChoose }) {
  // CLASSES
  const letterClasses = classNames(styles['letters-list__item'], { [styles['letters-list__item--disabled']]: letter.status }, 'letter');

  return (
    <li
      className={letterClasses}
      onClick={() => letterChoose(letter.id)}
    >
      {letter.value}
    </li>
  );
}

export default OneLetter;
