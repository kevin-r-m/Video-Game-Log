//Calculating averave review score

const scores = document.querySelectorAll('.score')
const userAverage = document.querySelector('.userAverage')

var total = 0
for (let i = 0; i < scores.length; i++){
    total += parseInt(scores[i].innerHTML)
}

//Average score
const scoreAverage = (total/scores.length).toFixed(1)
console.log(`This is average: ${scoreAverage}`)

//Displaying Average to DOM
userAverage.innerHTML = scoreAverage