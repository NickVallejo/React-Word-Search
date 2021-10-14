let letterMatrix
let dic
let pathArray = []
let wordDisplay = []
let uniqueArrays = []
const addLoad = new CustomEvent('loadPush')

const genGrid = (gridSize, letters) => {
    const sqrtSize = Math.sqrt(gridSize)
    let counter = 0
    
    letterMatrix = Array.from({length: sqrtSize}, e => 
        Array.from({length: sqrtSize}, e => ''))

    letterMatrix.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            letterMatrix[rowIndex][colIndex] = letters[counter]
            counter++
        })
    })
}

const wordFetch = async() => {
    const dictionary = await fetch('dictionary.txt')
    dic = await dictionary.text()
    dic = dic.split("\r\n")
    dic = dic.filter(word => word.length > 2)
}

const displayResults = (resReturn) => {
    const resMap = resReturn.map((res) => {
        return {word: res.map(obj => obj.letter).join(''), path: res.map(obj => [obj.row, obj.col])}
    })

    resMap.forEach(res => {
        !wordDisplay.some(el => el.word === res.word) && wordDisplay.push(res)
    })

    return wordDisplay
}

const wordSearch = (path=[]) => {
    let posX = path[path.length - 1].row
    let posY = path[path.length - 1].col
    for(const i of [-1, 0, 1]){
        for(const j of [-1, 0, 1]){
            if (i === 0 && j === 0) continue;
            let row = posX + i
            let col = posY + j
    
            if (row < 0 || col < 0 || row >= 4 || col >= 4) continue
            if(path.some(index => index.row == row && index.col == col )) continue

            let foundWord = false;
            const thePath = JSON.parse(JSON.stringify(path));
            const newPathLetters = thePath.map(obj => obj.letter)
            const letters = newPathLetters.join('').toUpperCase()
            const foundStart = dic.find(word => word.startsWith(letters+letterMatrix[row][col].toUpperCase()))

            if(!foundStart) {
                continue
            } else{
                thePath.push({letter: letterMatrix[row][col], row: row, col: col })
                foundWord = letters+letterMatrix[row][col].toUpperCase().trim() == foundStart.trim() ? true : false
            }

            if(foundWord){
                uniqueArrays.push(thePath)
            }

            wordSearch(thePath)
        }
    }
} 

export const appExec = async(gridSize, letters) => {

    genGrid(gridSize, letters)
    await wordFetch()

    letterMatrix.forEach((row, rowIndex) => {
        row.forEach(async (letter, colIndex) => {
            console.log('word searching...')
            let path = [{letter: letterMatrix[rowIndex][colIndex], row: rowIndex, col: colIndex}]
            wordSearch(path)
            document.dispatchEvent(addLoad)
        })
    })

    return displayResults(uniqueArrays)
    // console.log(uniqueArrays)
    // return uniqueArrays
}