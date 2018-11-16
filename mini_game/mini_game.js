function Game(selector, boardDimension) {
    this.container = selector ?
        document.querySelector(selector)
        :
        document.querySelector('body')
    this.boardDimension=3
    this.cellDimension=(100/this.boardDimension)+'%'
    this.gameBoardArray = [
        [1, 0, 0],
        [0, 0, 0 ],
        [0, 0, 0 ]
    ]
    this.gameBoard=null
    this.init()
}
Game.prototype.init=function(){
    this.makeGameBoard()
    this.render()
}

Game.prototype.makeGameBoard=function(cell){
const boardElement=document.createElement('div')
boardElement.style.width='500px'
boardElement.style.height='500px'
boardElement.style.display='flex'
boardElement.style.flex='wrap'

this.gameBoard=boardElement
this.container.appendChild(boardElement)
}
Game.prototype.render = function () {
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
        cellElement.style.backgroundColor= 'black'
        }
        this.gameBoard.appendChild(cellElement)
    }
       
