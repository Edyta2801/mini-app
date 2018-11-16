function Game(selector) {
    this.container = selector ?
        document.querySelector(selector)
        :
        document.querySelector('body')
    this.gameBoardArray = [
        [0, 0],
        [0, 1]
    ]
    this.gameBoard=null
    this.init()
}
Game.prototype.init=function(){
    this.gameBoard()
    this.render()
}

Game.prototype.makeGameBoard=function(cell){
const boardElement=document.createElement('div')
boardElement.style.width='500px'
boardElement.style.height='500px'

this.container.appendChild(this.boardElement)
}
Game.prototype.render = function () {
    this.gameBoardArray.forEach(row => {
        row.forEach(cell => {
            this.renderSingleCell(cell)
        })
    })
}
Game.prototype.renderSingleCell = function (e = cell) {
    const cellElement = document.createElement('div')
    cellElement.style.width = '50%'
    cellElement.style.height = '50%'

    if (cel == 0) {
        cellElement.style.backgroundColor = 'grey'
    } else {
        cellElement.style.backgroundColor='black'
        }
        this.gameBoard.appendChild(cellElement)
    }
            
