import React, {useRef, useState, useEffect} from 'react'

function InputBox({index, activeIndex, moveHandler, cords, hoveredPath}) {

    const inputRef = useRef()
    const [input, setInput] = useState('')
    //! PATH IS AN ARRAY AND CORDS IS A STRING
    const [match, setMatch] = useState(false)

    useEffect(() => {
        
    }, [match])

    useEffect(() => {
        index === activeIndex && inputRef.current.focus()
        console.log('CORDS', cords, 'HOVERED PATH', hoveredPath, 'MATCHED?', match)
        if(hoveredPath.length > 0 && hoveredPath.some(path => path.toString() == cords)){
            setMatch(true)
        } else{
            setMatch(false)
        }
    }, [activeIndex, hoveredPath, cords])

    const keyDownHandler = (e) => {
            if(e.key.match(/^[A-Za-z]+$/) && e.key.length === 1){
                setInput(e.key.toUpperCase())
            }
    
            if(e.key === "Backspace"){
                moveHandler('prev', index)
                setInput('')
            }
    }

    const changeHandler = (e) => {
        if(e.target.value.match(/^[A-Za-z]+$/)){
            moveHandler('next', index, input)
        }
    }

    const determineDirection = () => {
        const boxCordIndex = hoveredPath.findIndex(path => path.toString() == cords)

        if(boxCordIndex !== -1){
            const cordArray = cords.split(',')
            const row = parseInt(cordArray[0]);
            const col = parseInt(cordArray[1]);
            if(hoveredPath[boxCordIndex+1] == undefined) return ''
            const nextRow = hoveredPath[boxCordIndex+1][0]
            const nextCol = hoveredPath[boxCordIndex+1][1]

            console.log(`cord array`, row, col, 'path', hoveredPath, 'next rows and cols', nextRow, nextCol)
    
            if(nextRow == row && nextCol == col+1) return `dirshow-e`
            if(nextRow == row+1 && nextCol == col) return `dirshow-s`
            if(nextRow == row+1 && nextCol == col+1) return `dirshow-se`
            if(nextRow == row-1 && nextCol == col+1) return `dirshow-ne`
            if(nextRow == row && nextCol == col-1 ) return `dirshow-w`
            if(nextRow == row-1 && nextCol == col) return `dirshow-n`
            if(nextRow == row-1 && nextCol == col-1) return `dirshow-nw`
            if(nextRow == row+1 && nextCol == col-1) return `dirshow-sw`
        }
    }

    const classNames = match ? determineDirection() : ''

    return (
        <div className={`input-box-${index}`} >
            <div className={`dir ${classNames}`}></div>
            <input
            name={`field-${index}`}
            ref={inputRef}
            value={input} 
            type="text"
            onKeyDown={keyDownHandler} 
            onChange={changeHandler}
            onClick={() => moveHandler('change', index)}
            />
        </div>
    )
}

export default InputBox