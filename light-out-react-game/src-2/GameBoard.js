import React, { Component } from "react";
import Square from "./Square";
import "./Gameboard.css";
import randomArray from "./helpers";

class GameBoard extends Component {
     
    static defaultProps = {

    }
    constructor(props) {  
        super(props)
        this.state = {
            numSquareArray: randomArray()
        }
        this.handleToggleLight = this.handleToggleLight.bind(this)
        // this.winGame= this.winGame.bind(this)
    }
    handleToggleLight(cell) {
        if (cell === 0) {
            let items = [...this.state.numSquareArray];
            items[0] = !items[0]
            items[1] = !items[1]
            items[5] = !items[5]
            this.setState({ numSquareArray: items });
        } else if (cell === 1) {
            let items = [...this.state.numSquareArray];
            items[1] = !items[1]
            items[0] = !items[0]
            items[2] = !items[2]
            items[6] = !items[6]
            this.setState({ numSquareArray: items });
        } else if (cell === 2) {
            let items = [...this.state.numSquareArray];
            items[1] = !items[1]
            items[2] = !items[2]
            items[3] = !items[3]
            items[7] = !items[7]
            this.setState({ numSquareArray: items });
        } else if (cell === 3) {
            let items = [...this.state.numSquareArray];
            items[2] = !items[2]
            items[3] = !items[3]
            items[4] = !items[4]
            items[8] = !items[8]
            this.setState({ numSquareArray: items });
        } else if (cell === 4) {
            let items = [...this.state.numSquareArray];
            items[3] = !items[3]
            items[4] = !items[4]
            items[9] = !items[9]
            this.setState({ numSquareArray: items });
        } else if (cell === 5) {
            let items = [...this.state.numSquareArray];
            items[0] = !items[0]
            items[5] = !items[5]
            items[6] = !items[6]
            items[10] = !items[10]
            this.setState({ numSquareArray: items });
        } else if (cell === 6) {
            let items = [...this.state.numSquareArray];
            items[1] = !items[1]
            items[5] = !items[5]
            items[6] = !items[6]
            items[7] = !items[7]
            items[11] = !items[11]
            this.setState({ numSquareArray: items });
        } else if (cell === 7) {
            let items = [...this.state.numSquareArray];
            items[2] = !items[2]
            items[8] = !items[8]
            items[6] = !items[6]
            items[7] = !items[7]
            items[12] = !items[12]
            this.setState({ numSquareArray: items });
        } else if (cell === 8) {
            let items = [...this.state.numSquareArray];
            items[3] = !items[3]
            items[8] = !items[8]
            items[9] = !items[9]
            items[7] = !items[7]
            items[13] = !items[13]
            this.setState({ numSquareArray: items });
        } else if (cell === 9) {
            let items = [...this.state.numSquareArray];
            items[4] = !items[4]
            items[8] = !items[8]
            items[9] = !items[9]
            items[14] = !items[14]
            this.setState({ numSquareArray: items });
        } else if (cell === 10) {
            let items = [...this.state.numSquareArray];
            items[5] =  !items[5]
            items[10] = !items[10]
            items[11] = !items[11]
            items[15] = !items[15]
            this.setState({ numSquareArray: items });
        } else if (cell === 11) {
            let items = [...this.state.numSquareArray];
            items[6] = !items[6]
            items[10] = !items[10]
            items[11] = !items[11]
            items[12] = !items[12]
            items[16] = !items[16]
            this.setState({ numSquareArray: items });
        } else if (cell === 12) {
            let items = [...this.state.numSquareArray];
            items[7] = !items[7]
            items[11] = !items[11]
            items[12] = !items[12]
            items[13] = !items[13]
            items[17] = !items[17]
            this.setState({ numSquareArray: items });
        } else if (cell === 13) {
            let items = [...this.state.numSquareArray];
            items[8] = !items[8]
            items[14] = !items[14]
            items[12] = !items[12]
            items[13] = !items[13]
            items[18] = !items[18]
            this.setState({ numSquareArray: items });
        } else if (cell === 14) {
            let items = [...this.state.numSquareArray];
            items[9] = !items[9]
            items[13] = !items[13]
            items[14] = !items[14]
            items[19] = !items[19]
            this.setState({ numSquareArray: items });
        } else if (cell === 15) {
            let items = [...this.state.numSquareArray];
            items[10] = !items[10]
            items[15] = !items[15]
            items[16] = !items[16]
            items[20] = !items[20]
            this.setState({ numSquareArray: items });
        } else if (cell === 16) {
            let items = [...this.state.numSquareArray];
            items[11] = !items[11]
            items[15] = !items[15]
            items[16] = !items[16]
            items[20] = !items[20]
            items[21] = !items[21]
            this.setState({ numSquareArray: items });
        } else if (cell === 17) {
            let items = [...this.state.numSquareArray];
            items[12] = !items[12]
            items[17] = !items[17]
            items[16] = !items[16]
            items[18] = !items[18]
            items[22] = !items[22]
            this.setState({ numSquareArray: items });
        } else if (cell === 18) {
            let items = [...this.state.numSquareArray];
            items[13] = !items[13] 
            items[17] = !items[17]
            items[18] = !items[18]
            items[19] = !items[19]
            items[23] = !items[23]
            this.setState({ numSquareArray: items });
        } else if (cell === 19) {
            let items = [...this.state.numSquareArray];
            items[14] = !items[14]
            items[18] = !items[18]
            items[19] = !items[19]
            items[24] = !items[24]
            this.setState({ numSquareArray: items });
        } else if (cell === 20) {
            let items = [...this.state.numSquareArray];
            items[15] = !items[15]
            items[20] = !items[20]
            items[21] = !items[21]
            this.setState({ numSquareArray: items });
        } else if (cell === 21) {
            let items = [...this.state.numSquareArray];
            items[16] = !items[16]
            items[20] = !items[20]
            items[21] = !items[21]
            items[22] = !items[22]
            this.setState({ numSquareArray: items });
        } else if (cell === 22) {
            let items = [...this.state.numSquareArray];
            items[17] = !items[17]
            items[21] = !items[21]
            items[22] = !items[22]
            items[23] = !items[23]
            this.setState({ numSquareArray: items });
        } else if (cell === 23) {
            let items = [...this.state.numSquareArray];
            items[18] = !items[18]
            items[22] = !items[22]
            items[23] = !items[23]
            items[24] = !items[24]
            this.setState({ numSquareArray: items });
        } else if (cell === 24) {
            let items = [...this.state.numSquareArray];
            items[19] = !items[19]
            items[23] = !items[23]
            items[24] = !items[24]
            this.setState({ numSquareArray: items });
        }
    }

    winGame() {
        let winArray=0
        for (let i = 0; i < this.state.numSquareArray.length; i++){
            if (!this.state.numSquareArray[i]) {
                winArray++
            } 
        }
        if (winArray === 25) {
            return true
        }
    }
    render() {
    //    this.winGame()
        return (
            <div className ="gameboard" >
                
                 {this.winGame()?<div>I have won</div>:this.state.numSquareArray.map((sqr, idx) => <Square islightOn={sqr} id={idx} key={idx}
                    handleLight={() => this.handleToggleLight(idx)} hasWon={this.winGame()} />)}
              </div>
          )
      }
}
// flipCellsAround={() => this.flipCellsAround(coord)}
export default GameBoard;