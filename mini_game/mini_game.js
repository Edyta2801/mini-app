// function Game(selector, boardDimension) {
//     this.container = selector ?
//         document.querySelector(selector)
//         :
//         document.querySelector('body')
//     this.boardDimension = 3
//     this.cellDimension = (100 / this.boardDimension) + '%'
//     this.playerPosition = {
//         x: 1,
//         y: 0
//     }
//     this.gameBoardArray = this.makeEmptyBoardArray

//     this.gameBoardArray[this.playerPosition.y][this.playerPosition.x] == 'X'

//     this.gameBoard = null
//     this.init()
// }
// Game.prototype.init = function () {
//     this.makeGameBoard()
//     this.render()
//     this.startListeningArrowKeys()
// }

// Game.prototype.makeEmptyBoardArray = function () {
//     this.gameBoard = Array(this.boardDimension)
//         .fill(1).map(row => Array(this.boardDimension).fill(1)
//         )
// }
// Game.prototype.placeObstaclesInToGameBoardArray = function () {

// }

// Game.prototype.makeGameBoard = function (cell) {
//     const boardElement = document.createElement('div')
//     boardElement.style.width = '500px'
//     boardElement.style.height = '500px'
//     boardElement.style.display = 'flex'
//     boardElement.style.flexWrap = 'wrap'

//     this.gameBoard = boardElement
//     this.container.appendChild(boardElement)
// }

// Game.prototype.checkIfMoveIsAvailableIsAvailable = function (y, x) {
//     const newPlayerPosition = {
//         x: this.playerPosition.x + x,
//         y: this.playerPosition.y + y
//     }
//     if (
//         this.Game[newPlayerPosition.y] &&
//         this.Game[newPlayerPosition.y][newPlayerPosition.x]
//     ) {
//         this.checkIfMoveIsAvailable(newPlayerPosition)
//     }
// }




// Game.prototype.checkIfMoveIsAvailable = function (y, x) {
//     this.gameBoardArray[this.playerPosition.y][this.playerPosition.x] = 1
//     this.gameBoardArray[this.newPlayerPosition.y][this.newPlayerPosition.x + x] = 'X'
//     this.playerPosition = newPlayerPosition

//     this.render()
// }



// Game.prototype.startListeningArrowKeys = function () {
//     window.addEventListener(
//         'keydown',
//         event => {
//             event.preventDefault()
//             switch (event.keys) {
//                 case 'ArrowUp':
//                     this.checkIfMIsAvailable(-1, 0)
//                     break
//                 case 'ArrowDown':
//                     this.checkIfMIsAvailable(1, 0)
//                     break
//                 case 'ArrowLeft':
//                     this.checkIfMIsAvailable(0, -1)
//                     break
//                 case 'ArrowRight':
//                     this.checkIfMIsAvailable(0, 1)
//                     break
//             }
//         }
//     )
// }


// Game.prototype.render = function () {
//     this.gameBoard.innerHTML = ''

//     this.gameBoardArray.forEach(row => {
//         row.forEach(cell => {
//             this.renderSingleCell(cell)
//         })
//     })
// }
// Game.prototype.renderSingleCell = function (cell) {
//     const cellElement = document.createElement('div')
//     cellElement.style.width = this.cellDimension
//     cellElement.style.height = this.cellDimension

//     switch (cell) {
//         case 0:
//             cellElement.style.backgroundColor = 'red'
//             break
//         case 1:
//             cellElement.style.backgroundColor = 'grey'
//             break
//         case 'X':
//             cellElement.style.backgroundColor = 'black'
//             break
//     }
//     this.gameBoard.appendChild(cellElement)
// }



// Poprawny kod

function Game() {
    this.initialBoardArr = (
        Array(20)
            .fill(1)
            .map(el => (
                Array(20)
                    .fill(1)
                    .map(el => Math.round(Math.random() * 1.49))
            ))
    )
    this.boardArr = null
    this.playerPosition = {
        x: 0,
        y: 1
    }

    this.init()
}

Game.prototype.init = function () {
    this.startListeningToArrows()
    this.render()
}

Game.prototype.render = function () {
    document.body.innerHTML = ''

    this.composeBoard()

    this.boardArr.forEach((row, i) => {
        const rowDiv = document.createElement('div')
        rowDiv.style.height = '20px'

        row.forEach((cell, j) => {
            this.renderSingleCell(cell, rowDiv)
        })

        document.body.appendChild(rowDiv)
    })
}

Game.prototype.renderSingleCell = function (cell, rowDiv) {
    const cellDiv = document.createElement('div')

    cellDiv.style.display = 'inline-block'
    cellDiv.style.width = '20px'
    cellDiv.style.height = '20px'

    if (cell === 0) cellDiv.style.backgroundColor = 'black'
    if (cell === 1) cellDiv.style.backgroundColor = 'gray'
    if (cell === 'P') cellDiv.style.backgroundColor = 'red'

    rowDiv.appendChild(cellDiv)
}

Game.prototype.composeBoard = function () {
    this.boardArr = JSON.parse(JSON.stringify(this.initialBoardArr))
    this.boardArr[this.playerPosition.y][this.playerPosition.x] = 'P'
}

Game.prototype.startListeningToArrows = function () {
    window.addEventListener(
        'keydown',
        event => {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault()
                    this.checkIfMoveIsAvailable(0, -1)
                    break
                case 'ArrowDown':
                    event.preventDefault()
                    this.checkIfMoveIsAvailable(0, 1)
                    break
                case 'ArrowLeft':
                    event.preventDefault()
                    this.checkIfMoveIsAvailable(-1, 0)
                    break
                case 'ArrowRight':
                    event.preventDefault()
                    this.checkIfMoveIsAvailable(1, 0)
                    break
            }
        }
    )
}

Game.prototype.checkIfMoveIsAvailable = function (deltaX, deltaY) {
    const newPlayerPosition = {
        x: this.playerPosition.x + deltaX,
        y: this.playerPosition.y + deltaY
    }

    if (
        this.boardArr[newPlayerPosition.y] &&
        this.boardArr[newPlayerPosition.y][newPlayerPosition.x]
    ) {
        this.move(newPlayerPosition)
    }
}

Game.prototype.move = function (newPlayerPosition) {
    this.playerPosition = newPlayerPosition

    this.render()
}