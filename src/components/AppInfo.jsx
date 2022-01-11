import React, {useEffect} from 'react'

function AppInfo({genReady, genStart}) {

    useEffect(() => {
        console.log(genReady)
    }, [genReady])

    return (
        <div className='app-info'>
            <h1 className='proj-title'>Word Search <span>Wizard</span></h1>
            <p className='proj-desc'>Type in a random set of letters and watch the word search do the rest.</p>
            <button className="proj-btn" disabled={!genReady} onClick={genStart}>Generate</button>
        </div>
    )
}

export default AppInfo
