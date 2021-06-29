//Calculating averave review score
const scores = document.querySelectorAll('.score')
const userAverage = document.querySelector('.userAverage')

var total = 0

if (scores.length > 0){
    for (let i = 0; i < scores.length; i++){
        total += parseInt(scores[i].innerHTML)
    }
    //Average score
    const scoreAverage = (total/scores.length).toFixed(1)
    
    //Displaying Average to DOM
    userAverage.innerHTML = scoreAverage
}

///////////////////////////////////////////////////////

//Count number of games in DOM
const games = document.querySelectorAll('.gamePrev')
const gameNum = document.querySelector('.gameNum')
var gamesArr = Array.prototype.slice.call(games);

var gameCount = 0

const countGames = () => {
    var shownGames = 0
    const updateNum = () =>{gameNum.innerHTML = shownGames}
    const isHidden = (value) => value.style.display === 'none';
    var games = document.querySelectorAll('.gamePrev')
        games.forEach((game) =>{
            if(game.style.display === 'none'){
            }else{
                shownGames += 1
                updateNum()
            }
            if(gamesArr.every(isHidden)){
                gameNum.innerHTML = 0
            }

        })
    }

///////////////////////////////////////////////////////

//Adding in Delete Modal
const modal = document.getElementById("myModal");
var btn = document.getElementById("removeBtn");
var close = document.getElementById("close");

if(btn){
    btn.onclick = function() {
    modal.style.display = "block";
    creation()
    }

    close.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

///////////////////////////////////////////////////////

//Deletion Confirmation Logic - Pending
const creation = () => {
    var conf = document.querySelector('.removeConf')
    var confModal = document.querySelector('#confModal')

        conf.onclick = function() {
            confModal.style.display = 'block'
        }

        close.onclick = function() {
            modal.style.display = "none";
            }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
}

///////////////////////////////////////////////////////

//Measuring window size to adjust textarea elements
const adjustArea = (element) => {
    if(window.innerWidth < 600){
        textArea.cols = '50'
    }
}

const textArea = document.querySelector('textarea')

if(textArea){
    adjustArea(textArea)
}
