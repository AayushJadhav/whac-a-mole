const pits = document.querySelectorAll(".square")
const scoreTxt = document.querySelector("#score-text")
const timerTxt = document.querySelector("#timer-text")

var timerID = null
var molePosition
var score = 0
var time = 60

function randomPit() {
    pits.forEach(pit => {
        pit.classList.remove("mole")
    })

    var randomPit = pits[Math.floor(Math.random()*9)]
    randomPit.classList.add("mole")

    molePosition = randomPit.id
}

function moveMole() {
    timerID = setInterval(randomPit, 500)
}

pits.forEach(pit => {
    pit.addEventListener('mousedown', e => {
        if (molePosition == e.target.id) {
            score++

            scoreTxt.innerHTML = score
        }
    })
})

function timer() {
    time--

    timerTxt.innerHTML = time

    if (time == 0) {
        alert(`Game over. Your score is ${score}`)

        clearInterval(timerID)
        clearInterval(timerId)
    }
}

moveMole()

var timerId = setInterval(timer, 1000)