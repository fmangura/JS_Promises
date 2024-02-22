function getRandomFact(number) {
    let numberFact = axios.get(`http://numbersapi.com/${number}/trivia?json`)

    numberFact.then(res => {
        return console.log(res.data)
    })
    numberFact.catch(err => {
        return console.log('Error', err)
    })
}

function RandomNumRandomFact(repeats) {
    let answer = [];

    for (i=0; i < repeats; i++){
        answer.push(axios.get(`http://numbersapi.com/random/trivia?json`))
    }

    Promise.all(answer)
        .then(factArr => (
            factArr.forEach(p => {
                console.log(p.data)
                $('body').append($(`<li>${p.data.text}</li>`));
            })
        ))
        .catch(err => console.log(err));
}

function FaveNumFact(fave) {
    let answer = [];

    for (i=0; i < 4; i++){
        answer.push(axios.get(`http://numbersapi.com/${fave}/trivia?json`))
    }

    Promise.all(answer)
        .then(factArr => (
            factArr.forEach(p => {
                console.log(p.data)
                $('body').append($(`<li>${p.data.text}</li>`));
            })
        ))
        .catch(err => console.log(err));
}
