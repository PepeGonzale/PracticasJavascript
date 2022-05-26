const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
//Create Block
class Block{
    //Starting in bottom left
    constructor(xAxis, yAxis){
        this.bottomLeft = {xAxis,yAxis}
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis,yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//All my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270)
]

console.log(blocks[0])
//Draw my block
function addBlocks(){

for(let i = 0; i< blocks.length;i++){
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomleft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
}
}
