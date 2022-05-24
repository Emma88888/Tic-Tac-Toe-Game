const squares = document.querySelectorAll(".square")

const resetGame = document.querySelector("#restart-button")

const title = document.querySelector(".title")

const playerNum = document.querySelector(".playerNum")

let player1 = true

let turns = 0

let board = [

    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]

if (player1) {
    playerNum.innerText = "Player 1"
} else {
    playerNum.innerText = "Player 2"
}

const checkWhoWins = () => {
    console.log("inside of checkWinner: ", turns);
    if ((board[0] === board[1] && board[0] === board[2]) ||
        (board[3] === board[4] && board[3] === board[5])||
        (board[6] === board[7] && board[6] === board[8])||
        (board[0] === board[3] && board[0] === board[6])||
        (board[1] === board[4] && board[1] === board[7])||
        (board[2] === board[5] && board[2] === board[8])||
        (board[0] === board[4] && board[0] === board[8])||
        (board[2] === board[4] && board[2] === board[6]))
    {
        if (player1) {
            title.innerText = "Player 1 wins"
        } else {
            title.innerText = "Player 2 wins"
        }
        squares.forEach(square => {
            square.removeEventListener('click', clickEvent)
        })
    } else if (turns >= 9) {
        title.innerText = "You tied"
    }
}

const clickEvent = (e) => {
        if (player1) {
            e.target.style.backgroundColor = "red"
            title.innerText = "Player 2's Turn"
        } else {
            e.target.style.backgroundColor = "blue"
            title.innerText = "Player 1's Turn"
        }

        console.log(e.target.id)
        board[e.target.id] = player1

        turns++
        // console.log("Inside of clickEvent: ", turns);
        checkWhoWins()

        player1 = !player1
        e.target.removeEventListener('click', clickEvent)
}

squares.forEach(square => {
    square.addEventListener('click', clickEvent)
})

resetGame.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = "white"
        square.addEventListener('click', clickEvent)
    })
    player1 = true
    title.innerText = "Player 1"
    board = [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ]
    turns = 0
})

