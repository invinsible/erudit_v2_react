import styles from './App.module.css';
import WordList from './components/WordList/WordList';

function App() {
  return (
    <div className="container flex-wrapper">
      <h1 className={styles.title}>Erudite</h1>
      <WordList word="электричество"/>
    </div>
  );
}

export default App;
