import './App.css';
import {appExec} from './scripts/wizard.js';
import AppWrap from './components/AppWrap';
import AppInfo from './components/AppInfo';
import WordSearch from './components/search-box/WordSearch'
import LoadingScreen from './components/LoadingScreen';
import {useState, useEffect} from 'react'

function App() {
  const [genReady, setGenReady] = useState(false)
  const [srcSize, setSrcSize] = useState(16)
  const [letters, setLetters] = useState()
  const [wordRes, setWordRes] = useState()
  const [loader, setLoader] = useState(false)

  const readySetter = (ready, letters) => {
    if(ready){
      setGenReady(true)
      setLetters(letters)
     } else{
      setGenReady(false)
     }
  }

  const genStart = async() => {
    setLoader(true)
    const words = await appExec(srcSize, letters)
    setWordRes(words)
    setLoader(false)
  }

  return (
    <AppWrap loader={loader}>
      {loader && <LoadingScreen srcSize={srcSize}/>}
      <AppInfo genReady={genReady} genStart={genStart}/>
      <WordSearch srcSize={srcSize} readySetter={readySetter} wordRes={wordRes}/>
    </AppWrap>
  );
}

export default App;
