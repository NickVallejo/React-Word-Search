import React from 'react'

function LoadingScreen({loadingProg}) {

    return (
        <div className='loader-sec'>
           <h2>Loading...</h2>
           <div className="loader-bar">
               <div className="loader-thumb" style={{width: `${loadingProg}%`}}></div>
               <h3 className="loader-num">{loadingProg}%</h3>
           </div>
        </div>
    )
}

export default LoadingScreen
