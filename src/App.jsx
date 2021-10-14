import './App.css';
import {appExec, genGrid, wordSearch, wordFetch} from './scripts/wizard.js';
import AppWrap from './components/AppWrap';
import AppInfo from './components/AppInfo';
import WordSearch from './components/search-box/WordSearch'
import LoadingScreen from './components/LoadingScreen';
import {useState, useEffect} from 'react'

const addLoad = new CustomEvent('loadPush')

function App() {
  const [genReady, setGenReady] = useState(false)
  const [srcSize, setSrcSize] = useState(16)
  const [letters, setLetters] = useState()
  const [wordRes, setWordRes] = useState()
  const [loader, setLoader] = useState(false)
  const [loadingProg, setLoadingProg] = useState(0)

  // useEffect(() => {
  //   console.log(`loading prog has changed ${loadingProg}`)
  // }, [loadingProg])

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
    const letterMatrix = genGrid(srcSize, letters)
    const dic = await wordFetch()

    for(let i = 0; i < letterMatrix.length; i++){
      for(let j = 0; j < letterMatrix[0].length; j++){
          console.log('word searching...')
          let path = [{letter: letterMatrix[i][j], row: i, col: j}]
          const uniqueArrays = wordSearch(path, dic, letterMatrix)
          setLoadingProg(prevProg => {
            return prevProg + (100/srcSize)
        })
        await new Promise((resolve) => setTimeout(resolve, 350));
      }
    }

    // letterMatrix.forEach((row, rowIndex) => {
    //   row.forEach((letter, colIndex) => {
    //       console.log('word searching...')
    //       let path = [{letter: letterMatrix[rowIndex][colIndex], row: rowIndex, col: colIndex}]
    //       const uniqueArrays = wordSearch(path)
    //       console.log(uniqueArrays)
    //       setLoadingProg(prevProg => {
    //         return prevProg + (100/srcSize)
    //     })
    //   })
    // })

    console.log('LETTER MATRIX', letterMatrix)
    // appExec(srcSize, letters).then((words) => {
    //   setWordRes(words)
    //   setTimeout(() => {
    //     setLoader(false)
    //   }, 5000)
    // })
  }

  return (
    <AppWrap loader={loader}>
      {loader && <LoadingScreen srcSize={srcSize} loadingProg={loadingProg}/>}
      <AppInfo genReady={genReady} genStart={genStart}/>
      <WordSearch srcSize={srcSize} readySetter={readySetter} wordRes={wordRes}/>
    </AppWrap>
  );
}

export default App;
