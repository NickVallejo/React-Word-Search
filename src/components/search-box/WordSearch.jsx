import React, {useState, useEffect} from 'react'
import InputBox from './InputBox'
import SearchWrap from './SearchWrap'
import WordResult from './WordResult'
import {matrix4x4} from '../../helpers/matrixTranslate'

function WordSearch({srcSize, readySetter, wordRes}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [letterArray, setLetterArray] = useState(Array(srcSize).fill(''))
    const [hoveredPath, setHoveredPath] = useState([])
    const [wordCount, setWordCount] = useState()

    useEffect(() => {
        console.log('WORDRES CHANGE', wordRes)
        wordRes && setWordCount(wordRes.length)
    }, [wordRes])

    useEffect(() => {
        readySetter(letterArray.every(el => el !== ''), letterArray);
    }, [letterArray])

    const modLetters = (index, mod) => {
        setLetterArray(prevLetters => {
            const mutLetters = Array.from(prevLetters)
            mutLetters.splice(index, 1, mod)
            return mutLetters
        })
    }

    const moveHandler = (dir, index, input='') => {
       console.log(activeIndex)
       switch(dir){
           case 'prev':
               if(activeIndex === 0) return
               modLetters(index, input)
               setActiveIndex(prevIndex => prevIndex-=1)
               break
           case 'next':
               modLetters(index, input)
               if(activeIndex === srcSize+1) return
               setActiveIndex(prevIndex => prevIndex+=1)
               break
            case 'change':
                setActiveIndex(index)
                break
       }
    }

    const passUpPathHovered = (path) => {setHoveredPath(path)}
    const passUpPathRemoved = () => {setHoveredPath([])}

    let wordCountTxt = '';
    if(wordCount > 0) wordCountTxt = <h3 className="word-count">This many words found: <span className="count">{wordCount}</span></h3>
    if(wordCount === 0) wordCountTxt = <h3 className="word-count">No words found!</h3>

    return (
        <SearchWrap>
            {wordCountTxt}
            <div className='search-box'>
                {letterArray.length && letterArray.map( (el, index) => {
                    return <InputBox
                    key={index} 
                    index={index}
                    cords={matrix4x4[index]} 
                    activeIndex={activeIndex}
                    hoveredPath={hoveredPath} 
                    moveHandler={moveHandler} />
                })}
            </div>
            <div className="search-results">
                {(wordRes && wordRes.length > 0) && wordRes.map(el => {
                    return <WordResult key={el.word} word={el.word} path={el.path} passUpPathRemoved={passUpPathRemoved} passUpPathHovered={passUpPathHovered}/>
                })}
            </div>
        </SearchWrap>
    )
}

export default WordSearch
