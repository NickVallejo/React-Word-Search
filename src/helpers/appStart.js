  const genStart = async() => {
    let uniqueArrays;
    const letterMatrix = await genGrid(srcSize, letters)
    
    setWordRes()
    setLoader(true)

    for(let i = 0; i < letterMatrix.length; i++){
      for(let j = 0; j < letterMatrix[0].length; j++){
          let path = [{letter: letterMatrix[i][j], row: i, col: j}]
          uniqueArrays = wordSearch(path, letterMatrix)
          setLoadingProg(prevProg => {return prevProg + (100/srcSize)})
          await new Promise((resolve) => setTimeout(resolve, 350));
      }
    }

    const words = displayResults(uniqueArrays)
    setWordRes(words)
    setLoader(false)
    setLoadingProg(0)
  }