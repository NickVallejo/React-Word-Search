import React, {useState, useEffect} from 'react'

function LoadingScreen({srcSize, loadingProg}) {
    const [dots, setDots] = useState('')

    useEffect(() => {
        adder(dots.length)
    }, [dots])

    const progLoader = async() => {
        console.log('PROG LOADER CALLED')
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
           <h2>Loading{dots}</h2>
           <div className="loader-bar">
               <div className="loader-thumb" style={{width: `${loadingProg}%`}}></div>
               <h3 className="loader-num">{loadingProg}%</h3>
           </div>
        </div>
    )
}

export default LoadingScreen
