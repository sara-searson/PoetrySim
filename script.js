const cuteWords = ['cute1', 'cute2', 'cute3', 'cute4', 'cute5', 'cute6', 'cute7', 'cute8', 'cute9', 'cute10', 'shared1', 'shared2', 'shared3', 'shared4']

const arrayOfClouds = ['cute', 'silly', 'happy', 'serious', 'dramatic']

const pullWords = (arr) => {
    let random = Math.floor(Math.random() * (arr.length - 5))
    return arr[random]
}

const populateCloud = () => {
    let wordCloud = []
    for (i = 0; i < 5; i++) {
        wordCloud.push(pullWords(cuteWords))
    }
    return wordCloud
}

const updateCloud = (cloudData) => {
    for (i = 0; i < cloudData.length; i++) {
        let x = Math.floor(Math.random() * (cloudData.length - 1))
        let cloudLocation = `cloud${x}`
        cloudLocation.innerHTML = cloudData[0]
        cloudData.splice(0, 1)
    }
}

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