//-------------------------setters-------------------------//
//--------------------------------------------------------//

const wordOptions = document.querySelector('#word-options')
const backArrow = document.querySelector('#back-arrow')
const word1 = document.querySelector('#word1')
const word2 = document.querySelector('#word2')
const word3 = document.querySelector('#word3')
const word4 = document.querySelector('#word4')
const word5 = document.querySelector('#word5')
const word6 = document.querySelector('#word6')
const word7 = document.querySelector('#word7')
const word8 = document.querySelector('#word8')
const word9 = document.querySelector('#word9')
const word10 = document.querySelector('#word10')
const word11 = document.querySelector('#word11')
const word12 = document.querySelector('#word12')
const wordChoices = document.querySelectorAll(".word-choices")
const nextArrow = document.querySelector('#next-arrow')
const gameGraphic = document.querySelector('#game-graphic')
const selWord1 = document.querySelector('#your-word1')
const selWord2 = document.querySelector('#your-word2')
const selWord3 = document.querySelector('#your-word3')
const selWord4 = document.querySelector('#your-word4')
const selWord5 = document.querySelector('#your-word5')
const selWord6 = document.querySelector('#your-word6')
const selWord7 = document.querySelector('#your-word7')
const selWord8 = document.querySelector('#your-word8')
const selWord9 = document.querySelector('#your-word9')
const selWord10 = document.querySelector('#your-word10')
const notebookWords = document.querySelectorAll('.word-bank')
const submitWords = document.querySelector('#submit-words')

let currentPage = 1

//-------------------------arrays-------------------------//

const cuteWords = ['cute1', 'cute2', 'cute3', 'cute4', 'cute5', 'cute6', 'cute7', 'cute8', 'cute9', 'cute10', 'shared1', 'shared2', 'shared3', 'shared4']

const sillyWords = ['silly1', 'silly2', 'silly3', 'silly4', 'silly5', 'silly6', 'silly7', 'silly8', 'silly9', 'silly10', 'shared1', 'shared5', 'share6', 'shared7']

const happyWords = ['happy1', 'happy2', 'happy3', 'happy4', 'happy5', 'happy6', 'happy7', 'happy8', 'happy9', 'happy10', 'shared2', 'shared5', 'shared8', 'shared9']

const sadWords = ['sad1', 'sad2', 'sad3', 'sad4', 'sad5', 'sad6', 'sad7', 'sad8', 'sad9', 'sad10', 'shared3', 'shared6', 'shared8', 'shared10']

const dramaticWords = ['dramatic1', 'dramatic2', 'dramatic3','dramatic4', 'dramatic5', 'dramatic6', 'dramatic7', 'dramatic8', 'dramatic9', 'dramatic10', 'shared4', 'shared7', 'shared9', 'shared10']

const sharedWords = ['shared1', 'shared2', 'shared3', 'shared4', 'shared5', 'shared6', 'shared7', 'shared8', 'shared9', 'shared10']

const arrayOfClouds = ['cute', 'silly', 'happy', 'serious', 'dramatic']

let wordCloud = []

let page1 = []

let page2 = []

let page3 = []

let pageArray = [page1, page2, page3]

let chosenWords = []

//------------------------functions------------------------//
//---------------------------------------------------------//

const randomArrNum = (arr) => {
    let random = Math.floor(Math.random() * (arr.length - 5))
    //console.log(random)
    return random
}

const populateCloud = (currentArr) => {
    let numbers = []
    for (let i = 0; i < 6; i++) {
        let random=randomArrNum(currentArr)
        if (numbers.includes(random)) {
            i--
        } else {
            numbers.push(random)
            wordCloud.push(currentArr[random])            
        }
    }
    //console.log(wordCloud)
    return wordCloud
}

const populateShared = () => {
    let numbers = []
    for ( let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * (sharedWords.length - 1))
        if (numbers.includes(random)) {
            i--
        } else {
            numbers.push(random)
            wordCloud.push(sharedWords[random])
        }
    }
}

populateCloud(cuteWords)
populateCloud(sillyWords)
populateCloud(happyWords)
populateCloud(sadWords)
populateCloud(dramaticWords)
console.log(wordCloud)
populateShared()
console.log(wordCloud)

const cloudSort = () => {
    wordCloud.sort()
    console.log(wordCloud)
    for (let a = 0; a < 12; a++) {
        page1.push(wordCloud[a])
    }
    for (let b = 12; b < 24; b++) {
        page2.push(wordCloud[b])
    }
    for (let c = 24; c < 36; c++) {
        page3.push(wordCloud[c])
    }
    console.log(page1)
    console.log(page2)
    console.log(page3)
    //console.log(pageArray)
    return pageArray
}

cloudSort()

const updateCloud = (pageNum) => {
    for (i = 0; i < 12; i++) {
        //console.log(`word${i+1}`)
        //console.log(pageNum[i])
        let word = pageNum[i]
        document.querySelector(`#word${i + 1}`).innerHTML = word
    }
}

updateCloud(page1)

const nextPage = () => {
    if (currentPage === 1) {
        updateCloud(page2)
        currentPage++
        backArrow.style.opacity = '1'
    } else if (currentPage === 2) {
        updateCloud(page3)
        currentPage++
        nextArrow.style.opacity = '0'
    }
}

const prevPage = () => {
    if (currentPage === 2) {
        updateCloud(page1)
        backArrow.style.opacity = '0'
        currentPage--
    } else if (currentPage === 3) {
        updateCloud(page2)
        currentPage--
        nextArrow.style.opacity = '1'
    }
}

const selectWord = () => {

}

const addWord = (newWord) => {
    if (chosenWords.includes(newWord)) {
        console.log('choose a new word')
    } else {
        console.log(newWord)
        chosenWords.push(newWord)
        console.log(chosenWords)
    }
}

const removeWord = (newWord) => {
    console.log(newWord)
    chosenWords.push(newWord)
    console.log(chosenWords)
}

const updateNotebook = () => {
    for (let i = 0; i < chosenWords.length; i++) {
        document.querySelector(`#your-word${i+1}`).innerHTML = chosenWords[i]
    }
}

// const removeFromNotebook = () => {
//     chosenWords = chosenWords.filer(word => word !=== )
// }

const scoreTally = (input) => {
    let cuteScore = 0
    let sillyScore = 0
    for (i = 0; i < input.length; i++) {
        if (cuteWords.includes(input[i]) === true) {
            cuteScore+= 0
        }
        if (sillyWords.includes(input[i]) === true) {
            sillyScore+= 0
        }
    }
    if (cuteScore > sillyScore) {
        score.innterHTML = cuteScore
    }
}

//---------------------------DOM--------------------------//
//--------------------------------------------------------//

nextArrow.addEventListener('click', () => {
    console.log('next')
    nextPage()
})

backArrow.addEventListener('click', () => {
    console.log('previous')
    prevPage()
})

word1.addEventListener('click', () => {
    const textValue = word1.textContent
    console.log(textValue)
})

wordChoices.forEach((func) => {
    func.addEventListener('click', () => {
        const textValue = func.textContent
        //console.log(textValue)
        if (chosenWords.length < 10) {
            addWord(textValue)
            updateNotebook()
        } else {
            console.log('please submit or remove a word')
        }
    })
})

notebookWords.forEach((func1) => {
    func1.addEventListener('click', () => {
        const textValue = func1.textContent
        chosenWords = chosenWords.filter(word => word !== textValue)
        console.log(textValue)
        console.log(chosenWords)
        updateNotebook()
        document.querySelector(`#your-word${chosenWords.length+1}`).innerHTML = ''
    })
})

submitWords.addEventListener('click', () => {

})