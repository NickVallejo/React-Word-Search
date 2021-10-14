import React, {useState, useEffect, useRef} from 'react'

function LoadingScreen({srcSize}) {
    const [dots, setDots] = useState('')
    const [loadingProg, setLoadingProg] = useState(0)

    useEffect(() => {   
        document.addEventListener('loadPush', progLoader, false)
    }, [])

    useEffect(() => {
      console.log(loadingProg, 'LOADING PROG')
    }, [loadingProg])

    useEffect(() => {
        adder(dots.length)
    }, [dots])

    const progLoader = async() => {
        setLoadingProg(prevProg => {
            return prevProg + (100/srcSize)
        })
        await new Promise((resolve) => setTimeout(resolve, 350));
    }

    const adder = (dotLength) => {
        const timeout = setTimeout(() => {
            switch(dotLength){
                case 0:
                    setDots('.')
                    break
                case 1:
                    setDots('..')
                    break
                case 2:
                    setDots('...')
                    break
                default:
                    setDots('')
                    break
            }
        }, 500)
    }

    return (
        <div className='loader-sec'>
           <h2>Loading <span>{dots}</span></h2>
           <div className="loader-bar">
               <div className="loader-thumb" style={{width: `${loadingProg}%`}}></div>
               <h3>{loadingProg}</h3>
           </div>
        </div>
    )
}

export default LoadingScreen
