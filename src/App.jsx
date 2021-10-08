import './App.css';
import {appExec} from './scripts/wizard.js';
import AppWrap from './components/AppWrap';
import AppInfo from './components/AppInfo';
import WordSearch from './components/search-box/WordSearch'
import {useState} from 'react'

function App() {
  const [genReady, setGenReady] = useState(false)
  const [srcSize, setSrcSize] = useState(16)
  const [letters, setLetters] = useState()
  const [wordRes, setWordRes] = useState()

  const readySetter = (ready, letters) => {
    if(ready){
      setGenReady(true)
      setLetters(letters)
     } else{
      setGenReady(false)
     }
  }

  const genStart = async() => {
    const words = await appExec(srcSize, letters)
    console.log(words, 'RECEIVED')
    setWordRes(words)
  }

  return (
    <AppWrap>
      <AppInfo genReady={genReady} genStart={genStart}/>
      <WordSearch srcSize={srcSize} readySetter={readySetter} wordRes={wordRes}/>
    </AppWrap>
  );
}

export default App;
