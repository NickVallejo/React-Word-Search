import './App.css';
import {appExec, wordSearch, displayResults, clearPreviousWords, appConfig, genGrid} from './scripts/wizard.js';
import {genStart} from '../src/helpers/appStart.js'
import AppWrap from './components/AppWrap';
import AppInfo from './components/AppInfo';
import WordSearch from './components/search-box/WordSearch'
import LoadingScreen from './components/LoadingScreen';
import {useState, useEffect} from 'react'

function App() {

  const [genReady, setGenReady] = useState(false)
  // sets the size of the grid to 16 tiles (4x4)
  const [srcSize, setSrcSize] = useState(16)
  const [letters, setLetters] = useState()
  const [wordRes, setWordRes] = useState()
  const [loader, setLoader] = useState(false)
  const [loadingProg, setLoadingProg] = useState(0)

  // on component mount, execute the appCondig function in wizard.js
  // this prepares the game dictionary and arrays of words
  useEffect(() => {
    appConfig() 
  }, [])

  useEffect(() => {
    console.log('SET BEFORE START', wordRes)
  }, [wordRes])

  const readySetter = (ready, letters) => {
    if(ready){
      setGenReady(true)
      setLetters(letters)
     } else{
      setGenReady(false)
     }
  }

  const genStart = async() => {
    let uniqueArrays = [];
    const letterMatrix = await genGrid(srcSize, letters)
    
    // erase the last response of searched words before starting a new search
    // setWordRes(undefined)
    //start the loading screen overlay
    setLoader(true)

    clearPreviousWords()
    //begin a word search loop where each search starts with a letter in the 2d array
    
    // for(let i = 0; i < letterMatrix.length; i++){
    //   for(let j = 0; j < letterMatrix[0].length; j++){
    //       let path = [{letter: letterMatrix[i][j], row: i, col: j}]
    //       uniqueArrays = wordSearch(path, letterMatrix)
    //       setLoadingProg(prevProg => {return prevProg + (100/srcSize)})
    //       await new Promise((resolve) => setTimeout(resolve, 350));
    //   }
    // }


    const words = displayResults(uniqueArrays)
    setWordRes(words)
    setLoader(false)
    setLoadingProg(0)
  }

  return (
    <AppWrap loader={loader}>
      {/* loading screen overlay */}
      {loader && <LoadingScreen srcSize={srcSize} loadingProg={loadingProg}/>}

      {/* landing page text and button that starts the search */}
      <AppInfo genReady={genReady} genStart={genStart}/>

      {/* word search box that needs to be populated with letters before starting game */}
      <WordSearch srcSize={srcSize} readySetter={readySetter} wordRes={wordRes}/>
    </AppWrap>
  );
}

export default App;
