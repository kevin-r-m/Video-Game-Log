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
    console.log(`This is average: ${scoreAverage}`)
    
    //Displaying Average to DOM
    userAverage.innerHTML = scoreAverage
}

///////////////////////////////////////////////////////

//Count number of games in DOM
const games = document.querySelectorAll('.gamePrev')
const gameNum = document.querySelector('.gameNum')

var gameCount = 0

const countGames = () => {
    var shownGames = 0
    const updateNum = () =>{gameNum.innerHTML = shownGames}
    var games = document.querySelectorAll('.gamePrev')
        games.forEach((game) =>{
            if(game.style.display === 'none'){
            }else{shownGames += 1}
            updateNum()
        })
    }

///////////////////////////////////////////////////////

//Adding in Delete Modal
const modal = document.getElementById("myModal");
var btn = document.getElementById("removeBtn");
var span = document.getElementById("close");

if(btn){
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}