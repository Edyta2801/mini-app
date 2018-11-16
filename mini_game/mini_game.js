function Game(selector, boardDimension) {
    this.container = selector ?
        document.querySelector(selector)
        :
        document.querySelector('body')
    this.boardDimension = 3
    this.cellDimension = (100 / this.boardDimension) + '%'
    this.playerPosition = {
        x: 1,
        y: 0
    }
    this.gameBoardArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]


    this.gameBoard = null
    this.init()
}
Game.prototype.init = function () {
    this.makeGameBoard()
    this.render()
    this.startListeningArrowKeys()
}

Game.prototype.makeGameBoard = function (cell) {
    const boardElement = document.createElement('div')
    boardElement.style.width = '500px'
    boardElement.style.height = '500px'
    boardElement.style.display = 'flex'
    boardElement.style.flexWrap = 'wrap'

    this.gameBoard = boardElement
    this.container.appendChild(boardElement)
}

Game.prototype.checkI.checkIfMooveIsAvailableIsAvailable = function (y, x) {
    const newPlayerPosition = {
        x: this.playerPosition.x + x,
        y: this.playerPosition.y + y
    }
    if (
        this.Game[newPlayerPosition.y] !== undefined &&
        this.Game[newPlayerPosition.y][newPlayerPosition.x] !== undefined
    ) {
        this.checkIfMooveIsAvailable(newPlayerPosition)
    }
}
}



Game.prototype.checkIfMooveIsAvailable = function (y, x) {
    this.gameBoardArray[this.playerPosition.y][this.playerPosition.x] = 0
    this.gameBoardArray[this.newPlayerPosition.y][this.newPlayerPosition.x + x] = 1
    this.playerPosition = newPlayerPosition

    this.render()
}



Game.prototype.startListeningArrowKeys = function () {
    window.addEventListener(
        'keydown',
        event => {
            event.preventDefault()
            switch (event.keys) {
                case 'ArrowUp':
                    this.checkIfMIsAvailable(-1, 0)
                    break
                case 'ArrowDown':
                    this.checkIfMIsAvailable(1, 0)
                    break
                case 'ArrowLeft':
                    this.checkIfMIsAvailable(0, -1)
                    break
                case 'ArrowRight':
                    this.checkIfMIsAvailable(0, 1)
                    break
            }
        }
    )
}


Game.prototype.render = function () {
    this.gameBoard.innerHTML = ''

    this.gameBoardArray.forEach(row => {
        row.forEach(cell => {
            this.renderSingleCell(cell)
        })
    })
}
Game.prototype.renderSingleCell = function (cell) {
    const cellElement = document.createElement('div')
    cellElement.style.width = this.cellDimension
    cellElement.style.height = this.cellDimension

    if (cell == 0) {
        cellElement.style.backgroundColor = 'grey'
    } else {
        cellElement.style.backgroundColor = 'black'
    }
    this.gameBoard.appendChild(cellElement)
}
