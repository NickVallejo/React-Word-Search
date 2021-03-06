let letterMatrix
let dic
let wordDisplay = []
let uniqueArrays = []
let letterObj = {}

// iterates through the alphabet using charcodes and groups all letters
// into their own array, determined by the letter they start with
// eg. letterObj['G'] = [array filled with all letters starting with G]
// used to search the dictionary more efficiently
export const letterGen = async() => {
    for(let i = 65; i <= 90; i++){
        const letterInQ = String.fromCharCode(i)
        const letters = dic.filter(el => el.startsWith(letterInQ))
        letterObj[letterInQ] = letters
    }
}

export const genGrid = (gridSize, letters) => {
    const sqrtSize = Math.sqrt(gridSize)
    let counter = 0
    
    //make a square 2d array
    letterMatrix = Array.from({length: sqrtSize}, e => 
        Array.from({length: sqrtSize}, e => ''))

    //fill each position with the letters of inputted by user
    letterMatrix.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            letterMatrix[rowIndex][colIndex] = letters[counter]
            counter++
        })
    })

    return letterMatrix
}

// fetches the dictionary.txt file, line breaks each word and removes
// words that are 2 letters or less
export const wordFetch = async() => {
    const dictionary = await fetch('dictionary.txt')
    dic = await dictionary.text()
    dic = dic.split("\r\n")
    dic = dic.filter(word => word.length > 2)
}

export const displayResults = () => {
    let resMap = []
    uniqueArrays.forEach(res => {
        const uniqueWord = res.map(obj => obj.letter).join('')
        if(resMap.some(el => el.word == uniqueWord) === false){
            resMap.push({word: uniqueWord, path: res.map(obj => [obj.row, obj.col])})
        }
    })
    return resMap
}

export const clearPreviousWords = () => {
    wordDisplay = []
    uniqueArrays = []
    console.log(uniqueArrays, 'WIZARD ARRAY RESET')
}

export const wordSearch = (path=[], letterMatrix) => {
    //grabs the last letter pushed into the path array, gets it's row and col props
    let posX = path[path.length - 1].row
    let posY = path[path.length - 1].col

    //this loop allows us to search every direction surrounding the letter in question
    for(const i of [-1, 0, 1]){
        for(const j of [-1, 0, 1]){
            //if i  & j both = 0, we are trying to search the coord we're currently on
            if (i === 0 && j === 0) continue;
            let row = posX + i
            let col = posY + j
    
            //continues if there is a value outside the bounds of the 2d array
            if (row < 0 || col < 0 || row >= 4 || col >= 4) continue
            //continues if the letter in question is already in the path
            if(path.some(index => index.row == row && index.col == col )) continue

            
            let foundWord = false;
            //create a new instance of the path
            const thePath = JSON.parse(JSON.stringify(path));
            //create the word formed by the path (no cords, just the letters in this array)
            const newPathLetters = thePath.map(obj => obj.letter)
            //join the letters in the array defined in newpathletters (creates string)
            const letters = newPathLetters.join('').toUpperCase()
            //append the latest letter onto the word string
            const lettersPlusNewPath = letters+letterMatrix[row][col].toUpperCase()
            //get the first letter of the word
            const firstLetter = lettersPlusNewPath.charAt(0)
            //check if there is a word in the dictionary that starts with the string we created
            const foundStart = letterObj[firstLetter].find(word => word.startsWith(lettersPlusNewPath))

            //if no word starts with this collection of letters, try the next letter adjacent 
            //to the latest point in the path
            if(!foundStart) {
                continue
            } else{
                //if a word does start with this collection of letters, push the path of the new letter into the path object
                thePath.push({letter: letterMatrix[row][col], row: row, col: col })
                //does the word we created not only start with the found word, but also = it? we found a word!
                foundWord = letters+letterMatrix[row][col].toUpperCase().trim() == foundStart.trim() ? true : false
                //push the found word to the uniquearray and continue the search
                foundWord && uniqueArrays.push(thePath)
                wordSearch(thePath, letterMatrix)
            }
        }
    }

    //return uniqueArrays
} 

export const appConfig = async() => {
    await wordFetch()
<<<<<<< HEAD

    for(let i = 0; i < letterMatrix.length; i++){
        for(let j = 0; j < letterMatrix[0].length; j++){
            console.log('word searching...')
            let path = [{letter: letterMatrix[i][j], row: i, col: j}]
            wordSearch(path)
            document.dispatchEvent(addLoad)
        }
    }

    // letterMatrix.forEach((row, rowIndex) => {
    //     row.forEach(async (letter, colIndex) => {
    //         console.log('word searching...')
    //         let path = [{letter: letterMatrix[rowIndex][colIndex], row: rowIndex, col: colIndex}]
    //         wordSearch(path)
    //         document.dispatchEvent(addLoad)
    //     })
    // })

    return displayResults(uniqueArrays)
    // console.log(uniqueArrays)
    // return uniqueArrays
}
=======
    letterGen()
} 
>>>>>>> word-res
