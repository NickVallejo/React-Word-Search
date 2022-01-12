import React from 'react'

<<<<<<< HEAD
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
=======
function LoadingScreen({loadingProg}) {
>>>>>>> word-res

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
