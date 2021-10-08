import React from 'react'

function WordResult({word, path, passUpPathHovered, passUpPathRemoved}) {
 
    const showPath = () => {
        passUpPathHovered(path)
    }

    return (
        <div className={`word-res`} onMouseOut={passUpPathRemoved} onMouseOver={showPath}>
            <h6>{word}</h6>
        </div>
    )
}

export default WordResult